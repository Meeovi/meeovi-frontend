import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  helpq {
    date_created
    date_updated
    id
    sort
    status
    subject
    user_created
    user_updated
  }
}
`

export default { query }