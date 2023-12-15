import gql from 'graphql-tag'

export const query = gql`
query {
  articles {
    id
    name
    excerpt
    content
    image {
      filename_disk
    }
    created_at
  }
}`

export default { query }

