import gql from 'graphql-tag';

export const customerPaymentTokens = gql`
query {
  customerPaymentTokens {
    items {
      details
      public_hash
      payment_method_code
      type
    }
  }
}
`