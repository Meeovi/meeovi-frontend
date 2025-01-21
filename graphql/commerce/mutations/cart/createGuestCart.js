import {
  gql
} from 'graphql-tag'

export const CREATE_GUEST_CART = gql`
  mutation CreateGuestCart {
    createEmptyCart
  }
`;
