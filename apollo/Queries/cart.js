import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  cart {
    date_created
    date_updated
    id
    session_id
    total_price
    user_updated
  }
  cart_products {
    product {
      content
      created_at
      file
      format
      height
      id
      image
      like
      name
      part_number
      price
      rating
      size
      sku
      stock_status
      tax_class
      type
      visibility
      weight
    }
  }
}
`

export default { query }