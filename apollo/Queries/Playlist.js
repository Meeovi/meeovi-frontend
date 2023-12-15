import gql from 'graphql-tag'

export const query = gql`
query {
    playlist {
      id
      sort
      status
      user_created
      user_updated
      date_created
      date_updated
      name
      description
      product_id 
      image {
        filename_disk
      }
    }
  }`

export default { query }