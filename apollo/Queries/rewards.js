import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  rewards {
    articles
    categories
    coupons
    created_at
    customers
    expiration
    id
    level
    name
    products
    slug
    users
  }
}
`

export default { query }