import gql from 'graphql-tag';

const showcases = gql`
 query {
  products (filter: {}) {
    total_count
    items {
      uid
      name
      sku
      url_key
      stock_status
      __typename
      ... on GroupedProduct {
        items {
          qty
          position
          product {
            uid
            sku
            name
            stock_status
            __typename
            url_key
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
              label
            }
          }
        }
      }
    }
  }
}
`

export default showcases;