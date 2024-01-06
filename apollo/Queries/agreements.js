import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  agreements {
    content
    created
    excerpt
    id
    image
    name
    type
  }
}
`

export default { query }