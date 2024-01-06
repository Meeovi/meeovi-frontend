import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  attributes {
    attribute_code
    default_label
    id
    isPublic
  }
  attributes_products {
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