import gql from 'graphql-tag'

export const mutation = gql`
mutation CREATE_SPACES($id: ID){
  create_Space_items (data: {id: $id}) {
    id
    Name
    Description
    Image {
      filename_disk
    }
    user_created
    date_created
    status
    newsfeed
    Files {
      directus_files_id {
        storage
        filename_disk
        title
        type
        tags
      }
    }
    product_id
    id
      products_id {
        name
        part_number
        price
        image {
          filename_disk
        }
        content
        categories {
          categories_id {
            name
          }
        }
      }
    }
    shorts_id
    id
      shorts_id {
        name
        video {
          filename_disk
        }
        description
      }
    }
  }
}`

export default { mutation }
