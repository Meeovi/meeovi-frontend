import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  countries {
    capital
    created_at
    currency
    currency_symbol
    emoji
    emojiU
    flag
    id
    iso2
    iso3
    latitude
    longitude
    name
    native
    phonecode
    region
    subregion
    timezones
    tld
    translations
    updated_at
    wikiDataId
  }
}
`

export default { query }
