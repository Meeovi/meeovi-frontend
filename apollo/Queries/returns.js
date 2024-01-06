import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  returns {
    date_created
    date_updated
    id
    reason
    return_number
    status
  }
}
`

export default { query }