import gql from 'graphql-tag'

export const mutation = gql`
mutation CREATE_CUSTOMERS($id: ID){
  create_customers_items (data: {id: $id})
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

export default { mutation }
