import { gql } from 'graphql-tag'

export const GENERATE_CUSTOMER_TOKEN = gql`
  mutation generateCustomerToken($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`

export const CREATE_CART = gql`
  mutation createEmptyCart {
    createEmptyCart
  }
`

export const GET_CUSTOMER = gql`
  query getCustomer {
    customer {
      id
      firstname
      lastname
      suffix
      email
      addresses {
        firstname
        lastname
        street
        city
        region {
          region_code
          region
        }
        postcode
        country_code
        telephone
      }
    }
  }
`

export const MERGE_CARTS = gql`
  mutation mergeCarts($sourceCartId: String!, $destinationCartId: String!) {
    mergeCarts(
      source_cart_id: $sourceCartId,
      destination_cart_id: $destinationCartId
    ) {
      items {
        id
        quantity
      }
    }
  }
`
