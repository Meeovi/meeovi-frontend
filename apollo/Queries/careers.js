import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  careers {
    date_created
    date_updated
    degree_level
    description
    id
    experience
    image
    name
    sort
    status
    type
    url
  }
}
`

export default { query }