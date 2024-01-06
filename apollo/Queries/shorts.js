import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  shorts {
    date_created
    date_updated
    description
    id
    name
    sort
    status
    user_created
    user_updated
    video
  }
}
`

export default { query }