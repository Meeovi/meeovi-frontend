import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  states {
    country_code
    country_id
    created_at
    fips_code
    flag
    id
    iso2
    latitude
    longitude
    name
    updated_at
    wikiDataId
  }
}
`

export default { query }
