import gql from 'graphql-tag';

const exclusives = gql`
 query {
  products (filter: {category_uid: {eq: "OTI="}}) {
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
 }
`

export default exclusives;