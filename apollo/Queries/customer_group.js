import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  customer_group {
    createdAt
    customFieldsIscustomermanaged
    id
    name
    updatedAt
  }
}
`

export default { query }