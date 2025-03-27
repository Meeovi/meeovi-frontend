import gql from 'graphql-tag';

const dollarland = gql`
query {
  products (filter: {price: {from: "0", to: "1"}}) {
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

export default dollarland;