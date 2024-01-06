import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  translations {
    code
    date_created
    date_updated
    id
    image
    name
    sort
    status
    url
  }
}
`

export default { query }