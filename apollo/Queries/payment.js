import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  payments {
    amount
    id
    payment_method
    status
    transaction_id
  }
}
`

export default { query }