import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  fulfillment {
    createdAt
    handlerCode
    id
    method
    state
    trackingCode
    updatedAt
  }
}
`

export default { query }