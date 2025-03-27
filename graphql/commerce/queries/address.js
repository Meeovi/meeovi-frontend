import gql from 'graphql-tag';

const address = gql`
query {
  customer {
    addresses {
      city
      company
      country_code
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
  }
}`

const CREATE_ADDRESS = gql`
mutation CREATE_ADDRESS($city: String!, $fax: String!, $country_code: CountryCodeEnum = AD, $company: String!, $default_billing: Boolean = false, $default_shipping: Boolean = false, $vat_id: String!, $telephone: String!, $suffix: String!, $street: [String]!, $prefix: String!, $postcode: String!, $middlename: String!, $lastname: String!, $firstname: String!, $region: String!) {
  createCustomerAddress(input: {city: $city, company: $company, country_code: $country_code, default_billing: $default_billing, default_shipping: $default_shipping, fax: $fax, firstname: $firstname, lastname: $lastname, middlename: $middlename, postcode: $postcode, prefix: $prefix, street: $street, suffix: $suffix, telephone: $telephone, vat_id: $vat_id, region: {region: $region}}) {
    city
    company
    country_code
    default_billing
    default_shipping
    fax
    firstname
    lastname
    middlename
    postcode
    prefix
    street
    suffix
    telephone
    vat_id
    region {
      region
    }
  }
}`

const UPDATE_ADDRESS = gql`
mutation UPDATE_ADDRESS($id: ID!, $city: String!, $fax: String!, $country_code: CountryCodeEnum = AD, $company: String!, $default_billing: Boolean = false, $default_shipping: Boolean = false, $vat_id: String!, $telephone: String!, $suffix: String!, $street: [String]!, $prefix: String!, $postcode: String!, $middlename: String!, $lastname: String!, $firstname: String!, $region: String!) {
  updateCustomerAddress(id: $id, input: {city: $city, company: $company, country_code: $country_code, default_billing: $default_billing, default_shipping: $default_shipping, fax: $fax, firstname: $firstname, lastname: $lastname, middlename: $middlename, postcode: $postcode, prefix: $prefix, street: $street, suffix: $suffix, telephone: $telephone, vat_id: $vat_id, region: {region: $region}}) {
    city
    customer_id
    id
    company
    country_code
    default_billing
    default_shipping
    fax
    firstname
    lastname
    middlename
    postcode
    prefix
    street
    suffix
    telephone
    vat_id
    region {
      region
    }
  }
}`

const DELETE_ADDRESS = gql`
  mutation DELETE_ADDRESS($id: ID!) {
    deleteCustomerAddress(id: $id) {
      address {
        id
      }
    }
  }`

export default { address, CREATE_ADDRESS, UPDATE_ADDRESS, DELETE_ADDRESS }