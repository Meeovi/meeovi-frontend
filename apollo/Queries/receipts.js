import gql from 'graphql-tag'

export const query = gql`
query {
  orders {
    id
    order_number
    payments {
      payments_id {
        id
        payment_method
      }
    }
    status
    total_price
    Receipts {
      Receipts_id {
        id
        items {
          products_id {
            id
            name
            price
            image {
              filename_disk
            }
            content
          }
        }
      }
    }
  }
}
`

export default { query }