import gql from 'graphql-tag'

export const query = gql`
query {
    lists (search: "Wishlist"){
      id
      date_created
      date_updated
      name
      description
      image {
        filename_disk
      }
      type
      customers {
        customers_id {
          id
          first_name
          last_name
          email
          username
          image {
            filename_disk
          }
        }
      }
    }
  }`

export default { query }