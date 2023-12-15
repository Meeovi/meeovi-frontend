import gql from 'graphql-tag'

export const query = gql`
query {
  cities {
    id
    name
    description
    state
    country
    postalCode
    image
    customers {
      id
      customers_id {
        name_prefix
        first_name
        middle_name
        last_name
        name_suffix
        email
        phone
        zipcode
        websites
        dateofbirth
        description
        Address
        address_two
        username
        password
        payment
        gender
        type
      }
    }
  }
}`

export default { query }
