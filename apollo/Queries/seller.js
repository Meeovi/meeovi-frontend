import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  seller {
    createdAt
    deletedAt
    id
    name
    updatedAt
  }
}
`

export default { query }