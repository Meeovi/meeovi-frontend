import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  tags {
    date_created
    description
    id
    image
    name
    sort
    status
  }
}
`

export default { query }