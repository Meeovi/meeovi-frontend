import { defineApolloClient } from '@nuxtjs/apollo/config'

export default defineApolloClient({
  // The GraphQL endpoint.
  httpEndpoint: process.env.MAGE_MAGENTO_GRAPHQL_URL,

  // Provide a GraphQL endpoint to be used client-side. Overrides `httpEndpoint`.
  // browserHttpEndpoint: '/graphql',

  // See https://www.apollographql.com/docs/link/links/http.html#options
  httpLinkOptions: {
    headers: {
      'Authorization': `Bearer ${process.env.WEBSITE_TOKEN}`,
      'content-type': 'application/json'
    }
  },

  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network'
    }
  },

  // Specify a websocket endpoint to be used for subscriptions.
  // The `wss` protocol is recommended in production.
  // wsEndpoint: 'ws://localhost:4000',

  // LocalStorage token
  tokenName: "apollo-token",

  // Specify if the client should solely use WebSocket.
  // requires `wsEndpoint`.
  websocketsOnly: false
})