import gql from 'graphql-tag';

export const FETCH_PRODUCTS = gql`
 query Product($sku: String!) {
  products(filter: { sku: { eq: $sku } }) {
    items {
      uid
      name
      __typename
      description {
        html
      }
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
        }
      }
      image {
        url
      }
      rating_summary
      review_count
      crosssell_products {
        uid
        name
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
      }
      related_products {
        uid
        name
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
      }
      ... on GroupedProduct {
        items {
          product {
            uid
            name
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
      ... on BundledProduct {
        items {
          product {
            uid
            name
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
  }
}`;

//export default FETCH_PRODUCTS;