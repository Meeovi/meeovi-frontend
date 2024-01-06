import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  newsfeed {
    date_created
    date_updated
    id
    image
    post
    sort
    status
    user_created
    user_updated
  }
}
`

export default { query }