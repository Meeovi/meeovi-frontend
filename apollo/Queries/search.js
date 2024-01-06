import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
    Receipts {
      id
      total_price
      date_created
    }
  }`

export default { query }