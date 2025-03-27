import gql from 'graphql-tag';

export const getPayflowLinkToken = gql`
query {
  getPayflowLinkToken(input: {cart_id: "123"}) {
    secure_token
    secure_token_id
    mode
    paypal_url
  }
}
`