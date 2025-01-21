import {
  gql
} from 'graphql-tag'

export const CANCEL_ORDER = gql`
  mutation CancelOrder($orderId: ID!) {
    cancelOrder(
      orderId: $orderId
    ) {
      status
    }
  }
`;