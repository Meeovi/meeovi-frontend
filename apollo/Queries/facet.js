import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  facet {
    code
    createdAt
    id
    isPrivate
    updatedAt
  }
}
`

export default { query }