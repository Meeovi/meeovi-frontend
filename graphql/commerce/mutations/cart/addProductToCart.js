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

export const ADD_DOWNLOADABLE_PRODUCT_TO_CART = gql`
mutation AddDownloadableProductToCart($cartId: String!, $cartItems: [CartItemInput!]!) {
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

export const ADD_CONFIGURABLE_PRODUCT_TO_CART = gql`
  mutation AddConfigurableProductToCart($cartId: String!, $cartItems: [CartItemInput!]!) {
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