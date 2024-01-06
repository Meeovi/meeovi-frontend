import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  warehouse {
    category
    city
    country
    created_at
    description
    id
    image
    isPublic
    name
    postal
    products
    state
    status
  }
}
`

export default { query }