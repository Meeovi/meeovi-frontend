import { defineApolloClient } from '@nuxtjs/apollo'

export default defineApolloClient({
  httpEndpoint: 'http://meeovicms.com:8011/graphql',
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
