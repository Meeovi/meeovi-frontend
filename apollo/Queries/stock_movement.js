import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  stock_movement {
    createdAt
    discriminator
    id
    orderLineId
    productVariantId
    quantity
    stockLocationId
    type
    updatedAt
  }
}
`

export default { query }