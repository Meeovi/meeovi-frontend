import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  comments {
    created_at
    helpful
    id
    media
    name
    response
    updated_at
  }
}
`

export default { query }
