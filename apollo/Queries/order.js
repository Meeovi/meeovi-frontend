import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  orders {
    date_created
    date_updated
    id
    order_number
    status
    total_price
  }
}
`

export default { query }