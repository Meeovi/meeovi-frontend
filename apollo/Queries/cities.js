import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  cities {
    description
    id
    image
    languagenames
    latitude
    longitude
    name
    postalCode
  }
}
`

export default { query }
