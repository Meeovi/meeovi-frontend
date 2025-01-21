import {
  gql
} from 'graphql-tag'

export const ADD_VIRTUAL_PRODUCT_TO_CART = gql`
  mutation AddVirtualProductToCart($cartId: String!, $cartItems: [CartItemInput!]!) {
    addProductsToCart(
      cartId: $cartId
      cartItems: $cartItems
    ) {
      cart {
        items {
          id
          product {
            name
            sku
          }
          quantity
        }
      }
    }
  }
`;