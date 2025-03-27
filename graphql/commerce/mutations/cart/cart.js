import {
    gql
  } from 'graphql-tag'

export const GET_CART = gql`
  query GetCart($cartId: String!) {
    cart(cart_id: $cartId) {
      items {
        id
        quantity
        product {
          name
          sku
          thumbnail {
            url
          }
          price_range {
            minimum_price {
              regular_price {
                value
                currency
              }
            }
          }
        }
      }
    }
  }
`;

export const CREATE_CART = gql`
  mutation {
    createEmptyCart
  }
`;

export const ADD_TO_CART = gql`
  mutation AddToCart($cartId: String!, $sku: String!, $quantity: Int!) {
    addProductsToCart(
      cartId: $cartId
      cartItems: { sku: $sku, quantity: $quantity }
    ) {
      cart {
        items {
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

export const UPDATE_CART_QUANTITY = gql`
  mutation UpdateCart($cartId: String!, $cartItemId: Int!, $quantity: Int!) {
    updateCartItems(
      input: {
        cart_id: $cartId
        cart_items: {
          cart_item_id: $cartItemId
          quantity: $quantity
        }
      }
    ) {
      cart {
        items {
          id
          quantity
        }
      }
    }
  }
`;

export const REMOVE_ITEM = gql`
  mutation RemoveItem($cartId: String!, $cartItemId: Int!) {
    removeItemFromCart(input: { cart_id: $cartId, cart_item_id: $cartItemId }) {
      cart {
        items {
          id
        }
      }
    }
  }
`;

export const MERGE_CARTS = gql`
  mutation mergeCarts($sourceCartId: String!, $destinationCartId: String!) {
    mergeCarts(
      source_cart_id: $sourceCartId
      destination_cart_id: $destinationCartId
    ) {
      id
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
`;
