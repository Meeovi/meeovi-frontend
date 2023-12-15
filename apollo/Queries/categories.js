import gql from 'graphql-tag'

export const query = gql`
query {
  categories {
    id
    name
    description
    content
    image {
      filename_disk
    }
    meeovistores {
      id
    }
    products {
      id
      products_id {
        id
        name
        price
        content
        image {
          filename_disk
        }
        country
      }
    }
    Space {
      id
      Space_id {
        id
        Name
        newsfeed
        date_created
        Description
        Image {
          filename_disk
        }
        product_id {
          id
          products_id {
            price
            name
            image {
              filename_disk
            }
            short_description
            content
            country
          }
        }
      }
    }
    shorts {
      id
      shorts_id {
        id
        name
        description
        date_created
        video {
          filename_disk
        }
      }
    }
  }
}`

export default { query }
