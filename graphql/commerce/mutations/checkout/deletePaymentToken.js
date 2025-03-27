import {
    gql
} from 'graphql-tag'

export const CREATE_BRAINTREE_CLIENT_TOKEN = gql`
    mutation {
  deletePaymentToken(
    public_hash: "377c1514e0..."
  ) {
    result
    customerPaymentTokens {
      items {
        details
        public_hash
        payment_method_code
        type
      }
    }
  }
}
`;