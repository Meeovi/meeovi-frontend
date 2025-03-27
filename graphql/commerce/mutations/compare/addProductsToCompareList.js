import {
  gql
} from 'graphql-tag'

export const ADD_PRODUCTS_TO_COMPARE_LIST = gql`
  mutation AddProductsToCompareList($compareListId: ID!, $products: [CompareListItemInput!]!) {
    addProductsToCompareList(
      compareListId: $compareListId
      products: $products
    ) {
      compareList {
        items {
          product {
            name
            sku
          }
        }
      }
    }
  }
`;