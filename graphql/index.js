/* eslint-disable */
require("reflect-metadata");
require('@sentry/tracing');
require('dotenv').config({ path: ['../layers/cms/.env', '../layers/commerce/.env', '../.env'] })

const { usePersistedOperations } = require('@graphql-yoga/plugin-persisted-operations');
const { useCookies } = require('@whatwg-node/server-plugin-cookies');
const { makeExecutableSchema } = require('graphql-tools');
const { buildSchema } = require('type-graphql');
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const { applyMiddleware } = require('graphql-middleware')
const { shield, allow, deny } = require('graphql-shield')

const { useApolloInlineTrace } = require('@graphql-yoga/plugin-apollo-inline-trace');

const { createServer } = require('node:http');
const { createFetch } = require('@whatwg-node/fetch');
const { resolvers } = require("./prisma/generated/type-graphql");
const { useSentry } = require('@envelop/sentry');
const fastify = require('fastify');

const {
    createYoga,
    maskError,
    useReadinessCheck
} = require('graphql-yoga');
const {
    ApolloGateway
} = require('@apollo/gateway');
const {
    useApolloFederation
} = require('@envelop/apollo-federation');

const app = fastify()

// Setting cors and logging capabilities

var cors = require('cors')

app.options('*', cors())

// Pulling our Graphql Resolvers from Type-graphql & Prisma generation

async function main() {
  const schemacomm = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(__dirname, "~/layers/commerce/generated-schema.graphql"),
    validate: false,
  });

  const schemacms = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(__dirname, "~/layers/cms/generated-schema.graphql"),
    validate: false,
  });

  // Graphql Shield generates GraphQL Middleware layer from your rules.
  const permissions = shield({
    Query: {
      "*": allow
    },
    Mutation: {
      "*": allow
    },
  }, {
    fallbackRule: allow
  });

  // Integrating Graphql-Sheild 
  const schema = applyMiddleware(schemacomm, schemacms, permissions);

  // Connect to Prisma

  const prisma = new PrismaClient();
  await prisma.$connect();

  // Initialize the gateway
  const gateway = new ApolloGateway({
    serviceList: [
        { name: 'cms', url: process.env.API_URL_GRAPHQL },
        { name: 'commerce', url: process.env.GRAPHQL_HOST },
      // ...additional subgraphs...
    ]
  })
  
  // Make sure all services are loaded
  await gateway.load()

  // Graphql Server main function 

  const yoga = createYoga({
    schema,
    healthCheckEndpoint: '/live',
    batching: true,
    cors: {
      origin: '*',
      credentials: true,
    },
    context: ({}) => ({
      prisma,
    }),
    plugins: [
      useParserCache({}),
      useValidationCache({}),
      useGraphQlJit({}),
      useSentry({
        includeRawResult: false, // set to `true` in order to include the execution result in the metadata collected
        includeResolverArgs: false, // set to `true` in order to include the args passed to resolvers
        includeExecuteVariables: false, // set to `true` in order to include the operation variables values
      }),
      useApolloInlineTrace(),
      useApolloFederation({
        gateway
      }),
      useSofaWithSwaggerUI({
        basePath: '/rest',
        swaggerUIEndpoint: '/swagger',
        servers: [
          {
            url: '/', // Specify Server's URL.
            description: 'Development server'
          }
        ],
        info: {
          title: 'Example API',
          version: '1.0.0'
        }
      }),
    ],
    fetchAPI: createFetch({
      // We prefer `node-fetch` over `undici` and current unstable Node's implementation
      useNodeFetch: true,
      formDataLimits: {
        // Maximum allowed file size (in bytes)
        fileSize: 1000000,
        // Maximum allowed number of files
        files: 10,
        // Maximum allowed size of content (operations, variables etc...)
        fieldSize: 1000000,
        // Maximum allowed header size for form data
        headerSize: 1000000
      }
    })
  });

  const server = createServer(yoga)

  app.route({
    url: '/graphql',
    method: ['GET', 'POST', 'OPTIONS'],
    handler: async (req, reply) => {
      // Second parameter adds Fastify's `req` and `reply` to the GraphQL Context
      const response = await yoga.handleNodeRequest(req, {
        req,
        reply
      })
      response.headers.forEach((value, key) => {
        reply.header(key, value)
      })

      reply.status(response.status)

      reply.send(response.body)

      return reply
    }
    
  })

  server.listen(4005, () => {
    console.info('Server is running on http://localhost:4000/graphql')
  })
}



main().catch((e) => {
  console.error(e);
  process.exit(1);
});