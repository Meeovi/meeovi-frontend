import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  shipments {
    carrier_name
    client_id
    client_secret
    country
    id
    image
    product
    ship_date
    speed_grade
    tracking_url
    transit_time
    website
  }
}

`

export default { query }