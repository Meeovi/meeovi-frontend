import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  stock_level {
    createdAt
    id
    productVariantId
    stockAllocated
    stockLocationId
    stockOnHand
    updatedAt
  }
}
`

export default { query }