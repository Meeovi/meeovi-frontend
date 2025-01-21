import {
  gql
} from 'graphql-tag'

export const ADD_WISHLIST_ITEMS_TO_CART = gql`
  mutation AddWishlistItemsToCart($wishlistId: ID!, $cartId: String!) {
    moveWishlistItemsToCart(
      wishlistId: $wishlistId
      cartId: $cartId
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