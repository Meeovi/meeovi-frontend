import {
    gql
} from 'graphql-tag'

export const CREATE_BRAINTREE_CLIENT_TOKEN = gql`
    mutation {
  createBraintreeClientToken
}`;