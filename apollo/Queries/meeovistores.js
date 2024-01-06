import gql from 'graphql-tag'

export const query = gql`
query {
  meeovistores {
    id
    name
    color
    colortext
    content
    image {
      filename_disk
    }
    customers {
      customers_id {
        id
        first_name
        last_name
        image {
          filename_disk
        }
      }
    }
    categories {
      categories_id {
        id
        name
        image {
          filename_disk
        }
      }
    }
    products {
      id
      products_id {
        id
        name
        price
        image {
          filename_disk
        }
        sku
        Space {
          id
          Space_id {
            id
            Name
          }
        }
      }
    }
  }
}
`

export default { query }
