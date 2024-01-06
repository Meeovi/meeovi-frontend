import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  musicchart {
    date_created
    date_updated
    description
    id
    image
    name
    sort
    status
    user_created
    user_updated
  }
}
`

export default { query }