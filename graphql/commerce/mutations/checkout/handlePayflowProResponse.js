import {
    gql
} from 'graphql-tag'

export const CREATE_BRAINTREE_CLIENT_TOKEN = gql`
    mutation {
  handlePayflowProResponse(
    input: {
      cart_id: "Po1WkfK7d3vZE0qga610NwJIbxgqllpt"
      paypal_payload: "$payload"
    }
  ){
    cart {
      selected_payment_method {
        code
      }
    }
  }
}
`;