import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  surcharge {
    createdAt
    description
    id
    listPrice
    listPriceIncludesTax
    orderId
    orderModificationId
    sku
    taxLines
    updatedAt
  }
}
`

export default { query }