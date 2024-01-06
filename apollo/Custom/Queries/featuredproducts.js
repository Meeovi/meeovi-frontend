import gql from 'graphql-tag'

export const query = gql`
query {
  collections(search: "Featured") {
    id
    name
    description
    type
    image {
      filename_disk
    }
    products {
      products_id {
        id
        name
        price
        rating
        sku
        image {
          filename_disk
        }
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