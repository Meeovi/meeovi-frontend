import gql from 'graphql-tag'

export const query = gql`
query {
  musicchart {
    id
    name
    description
    image {
      filename_disk
    }
    categories {
      categories_id {
        id
        name
      }
    }
    products {
      products_id {
        id
        name
        price
        content
        image {
          filename_disk
        }
        sku
        customers {
          customers_id {
            id
            username
            image {
              filename_disk
            }
          }
        }
      }
    }
  }
}`

export default { query }