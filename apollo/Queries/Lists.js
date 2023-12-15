import gql from 'graphql-tag'

export const query = gql`
query {
    lists {
      id
      sort
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
      type
    }
  }`

export default { query }