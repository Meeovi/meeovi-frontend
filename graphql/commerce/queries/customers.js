import gql from 'graphql-tag';

const customers = gql`
query {
  customer {
    addresses {
      city
      company
      country_code
      country_id
      custom_attributes {
        attribute_code
        value
      }
      customer_id
      default_billing
      default_shipping
      extension_attributes {
        attribute_code
        value
      }
      fax
      firstname
      id
      lastname
      middlename
      postcode
      prefix
      region {
        region
        region_code
        region_id
      }
      region_id
      street
      suffix
      telephone
      vat_id
    }
    allow_remote_shopping_assistance
    created_at
    date_of_birth
    default_billing
    default_shipping
    email
    firstname
    middlename
    lastname
    gender
    is_subscribed
    prefix
    suffix
    taxvat
  }
}`

const CREATE_CUSTOMER = gql`
mutation createCustomer(
  $email: String!
  $firstname: String!
  $lastname: String!
) {
  createCustomer(
    input: {
      email: $email
      firstname: $firstname
      lastname: $lastname
    }
  ) {
    customer {
      id
      firstname
      lastname
      email
    }
  }
}`

export default { customers, CREATE_CUSTOMER }