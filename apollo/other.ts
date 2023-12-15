import { defineApolloClient } from '@nuxtjs/apollo'

export default defineApolloClient({
  httpEndpoint: 'http://67.207.71.123:8011/graphql',
  browserHttpEndpoint: '',
  wsEndpoint: '',
  httpLinkOptions: {},
  wsLinkOptions: {},
  websocketsOnly: false,
  connectToDevTools: false,
  defaultOptions: {},
  inMemoryCacheOptions: {},
  tokenStorage: 'cookie',
  authType: 'Bearer',
  authHeader: 'Authorization'
})
