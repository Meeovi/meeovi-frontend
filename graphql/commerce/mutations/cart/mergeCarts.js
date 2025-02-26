import gql from "graphql-tag";

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
