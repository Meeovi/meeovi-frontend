import gql from 'graphql-tag'

export const query = gql`
query {
  agreements {
    id
    name
    excerpt
    content
    created
    image
    type
  }
}`

export default { query }