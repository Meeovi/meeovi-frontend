import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  refund {
    adjustment
    createdAt
    id
    items
    metadata
    method
    paymentId
    reason
    shipping
    state
    total
    transactionId
    updatedAt
  }
}

`

export default { query }