import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  zone {
    createdAt
    id
    name
    updatedAt
  }
}
`

export default { query }