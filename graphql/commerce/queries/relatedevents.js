import gql from 'graphql-tag';

const relatedevents = gql`
 query {
  products (filter: {category_id: {eq: "56"}}) {
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

export default relatedevents;