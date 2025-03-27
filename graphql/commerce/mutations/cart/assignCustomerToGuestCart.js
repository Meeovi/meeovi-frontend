import {
  gql
} from 'graphql-tag'

export const ASSIGN_CUSTOMER_TO_GUEST_CART = gql`
  mutation AssignCustomerToGuestCart($cartId: String!, $customerId: ID!) {
    assignCustomerToGuestCart(
      cartId: $cartId
      customerId: $customerId
    ) {
      cart {
        id
      }
    }
  }
`;