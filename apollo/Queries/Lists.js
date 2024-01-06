import gql from 'graphql-tag'

export const query = gql`
query {
  lists {
    id
    user_created
    user_updated
    name
    description
    image {
      filename_disk
    }
    type
  }
}`

export default { query }