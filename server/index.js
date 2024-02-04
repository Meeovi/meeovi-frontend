import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { ApolloGateway } from '@apollo/gateway'
import { useApolloFederation } from '@envelop/apollo-federation'
import { useApolloInlineTrace } from '@graphql-yoga/plugin-apollo-inline-trace'

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'cms', url: 'http://194.164.19.137:8011/graphql' },
    { name: 'commerce', url: process.env.GQL_HOST }
    // ...additional subgraphs...
  ]
})
 
// Make sure all services are loaded
await gateway.load()

const yoga = createYoga({
  cors: {
    origin: '*',
    credentials: true,
    allowedHeaders: ['X-Custom-Header'],
    methods: ['POST']
  },
  plugins: [
    useApolloFederation({
      gateway
    }),
    useApolloInlineTrace()
  ]
  /* ...other args */
})

const server = createServer(yoga)
 
// Start the server and you're done!
server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})