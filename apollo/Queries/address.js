import gql from 'graphql-tag'

export const query = gql`
query {
  address {
    id
    name
    address
    description
    type
    user_created
    user_updated
    customers {
      customers_id {
        id
        first_name
        last_name
        username
        image {
          filename_disk
        }
      }
    }
  }
}
`

export default { query }