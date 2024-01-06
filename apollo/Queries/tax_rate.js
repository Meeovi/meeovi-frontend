import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  tax_rate {
    categoryId
    createdAt
    customerGroupId
    enabled
    id
    name
    value
    updatedAt
    zoneId
  }
}
`

export default { query }