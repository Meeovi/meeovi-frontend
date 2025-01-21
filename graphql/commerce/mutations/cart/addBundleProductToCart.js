import {
  gql
} from 'graphql-tag'

export const ADD_BUNDLE_PRODUCT_TO_CART = gql`
  mutation AddBundleProductToCart($cartId: String!, $cartItems: [CartItemInput!]!) {
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
`