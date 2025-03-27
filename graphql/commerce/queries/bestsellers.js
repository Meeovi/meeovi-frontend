import gql from 'graphql-tag';

const bestsellers = gql`
query {
  products (search: "Featured") {
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

export default bestsellers;