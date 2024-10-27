import gql from 'graphql-tag';

const showcases = gql`
 query {
  products (filter: {price: {from: "0"}}) {
    items {
      ... on GroupedProduct {
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
  }
 }
`

export default showcases;