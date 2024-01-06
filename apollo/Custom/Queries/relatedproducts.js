import gql from 'graphql-tag'

export const query = gql`
query {
  products (limit: 12) {
    id
    name
    price
    sku
    image {
      filename_disk
    }
    rating
    tax_class
    stock_status
    websites {
      websites_id {
        name
        url
      }
    }
    weight
    height
    content
    part_number
    format
    file {
      filename_disk
    }
    type
    visibility
    size
    attributes {
      attributes_id {
        id
        default_label
      }
    }
    categories {
      categories_id {
        id
        name
      }
    }
    customers {
      customers_id {
        id
        username
      }
    }
    shops {
      shops_id {
        id
        name
      }
    }
  }
}`

export default { query }