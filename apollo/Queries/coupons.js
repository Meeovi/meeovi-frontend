import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  coupons {
    code
    discount_percent
    excerpt
    id
    image
    max_redemptions
    name
    valid_from
    valid_until
  }
}
`

export default { query }