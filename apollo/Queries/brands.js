import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  brands {
    code
    created_at
    description
    id
    image
    name
    brands_products {
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
}
`

export default { query }
