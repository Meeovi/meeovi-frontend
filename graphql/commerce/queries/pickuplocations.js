import gql from 'graphql-tag';

const pickuplocations = gql`
query {
  pickupLocations(
    filters: {}
    sort: {}
  ) {
    items {
      city
      contact_name
      country_id
      description
      email
      fax
      latitude
      longitude
      name
      phone
      pickup_location_code
      postcode
      region
      region_id
      street
    }
    total_count
  }
}
`

export default pickuplocations;