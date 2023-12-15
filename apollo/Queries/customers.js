import gql from 'graphql-tag'

export const query = gql`
query {
  customers {
    id
    name_prefix
    first_name
    middle_name
    last_name
    name_suffix
    username
    email
    phone
    zipcode
    websites
    tax_vat_number
    description
    Address
    address_two
    password
    payment
    dateofbirth
    image {
      filename_disk
    }
    gender
    type
  }
}`

export const custid = gql`
query {
    customers (filter: {type: {_contains: "Customer"}}){
        id
        name_prefix
        first_name
        middle_name
        last_name
        name_suffix
        username
        email
        phone
        zipcode
        websites
        tax_vat_number
        description
        Address
        address_two
        password
        payment
        dateofbirth
        image {
        filename_disk
        }
        gender
        type
    }
  }`

export default { query, custid }
