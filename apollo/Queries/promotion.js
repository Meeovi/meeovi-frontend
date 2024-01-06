import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  promotion {
    actions
    conditions
    couponCode
    createdAt
    deletedAt
    enabled
    endsAt
    id
  }
}
`

export default { query }