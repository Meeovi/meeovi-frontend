import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  shipping_method {
    calculator
    checker
    code
    createdAt
    deletedAt
    fulfillmentHandlerCode
    id
  }
}
`

export default { query }