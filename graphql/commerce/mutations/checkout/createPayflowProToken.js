import {
    gql
} from 'graphql-tag'

export const CREATE_BRAINTREE_CLIENT_TOKEN = gql`
    mutation {
  createPayflowProToken(
    input: {
      cart_id: "Po1WkfK7d3vZE0qga610NwJIbxgqllpt"
      urls: {
        return_url: "paypal/action/return.html"
        cancel_url: "paypal/action/cancel.html"
        error_url: "paypal/action/error.html"
      }
    }
  ) {
    response_message
    result
    result_code
    secure_token
    secure_token_id
  }
}
`;