import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  shops {
    content
    date_created
    date_updated
    id
    name
    sort
    status
    type
    user_created
    user_updated
    website
  }
}
`

export default { query }