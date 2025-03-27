import {
  gql
} from 'graphql-tag'

export const APPLY_COUPON_TO_CART = gql`
  mutation ApplyCouponToCart($cartId: String!, $couponCode: String!) {
    applyCouponToCart(
      input: {
        cart_id: $cartId
        coupon_code: $couponCode
      }
    ) {
      cart {
        applied_coupons {
          code
        }
      }
    }
  }
`