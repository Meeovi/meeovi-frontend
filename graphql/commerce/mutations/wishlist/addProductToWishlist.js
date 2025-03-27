import {
  gql
} from 'graphql-tag'

export const ADD_PRODUCT_TO_WISHLIST = gql`
  mutation AddProductToWishlist($wishlistId: ID!, $wishlistItems: [WishlistItemInput!]!) {
    addProductsToWishlist(
      wishlistId: $wishlistId
      wishlistItems: $wishlistItems
    ) {
      wishlist {
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