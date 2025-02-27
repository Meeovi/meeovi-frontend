import {
  gql
} from 'graphql-tag'

export const ADD_PRODUCTS_TO_CART = gql`
  mutation AddProductsToCart($cartId: String!, $cartItems: [CartItemInput!]!) {
      addProductsToCart(
        cartId: $cartId
        cartItems: $cartItems
      ) {
      cart {
      itemsV2 {
        items {
          product {
            name
            sku
          }
          quantity
        }
        total_count
        page_info {
          page_size
          current_page
          total_pages
        }
      }
    }
    user_errors {
      code
      message
    }
  }
  }`