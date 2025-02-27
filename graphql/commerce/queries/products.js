import gql from 'graphql-tag';

export const FETCH_PRODUCTS = gql`
 query {
  products (filter: {price: {from: "0"}}) {
    items {
      uid
      name
      rating_summary
      description {
        html
      }
      image {
        url
      }
      sku
      price_range {
        minimum_price {
          regular_price {
            currency
            value
          }
        }
      }
      categories {
        name
      }
    }
  }
 }`

//export default FETCH_PRODUCTS;