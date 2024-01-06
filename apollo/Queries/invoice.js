import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  invoice {
    channelId
    createdAt
    customerEmail
    id
    invoiceNumber
    orderCode
    orderId
    storageReference
    updatedAt
  }
}
`

export default { query }