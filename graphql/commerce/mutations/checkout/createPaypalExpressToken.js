import {
    gql
} from 'graphql-tag'

export const CREATE_BRAINTREE_CLIENT_TOKEN = gql`
    mutation {
  createPaypalExpressToken(
    input: {
      cart_id: "rMQdWEecBZr4SVWZwj2AF6y0dNCKQ8uH"
      code: "paypal_express"
      express_button: true
      urls: {
        return_url: "paypal/action/return.html"
        cancel_url: "paypal/action/cancel.html"
      }
    }
  ) {
    token
    paypal_urls {
      start
      edit
    }
  }
}
`;