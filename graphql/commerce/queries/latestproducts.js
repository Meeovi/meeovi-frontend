import gql from 'graphql-tag';

const LatestProductsQuery = gql`
query LatestProductsQuery {
  products(filter: {price: {from: "1"}}, pageSize: 5, sort: { position: DESC }) {
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

export default LatestProductsQuery;