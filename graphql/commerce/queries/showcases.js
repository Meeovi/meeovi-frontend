import gql from 'graphql-tag';

const showcases = gql`
query {
  products (filter: {format: {eq: "Showcase"}}) {
    items {
      name
      ... on BundleProduct {
        canonical_url
        name
        created_at
        image {
          url
        }
        description {
          html
        }
        dynamic_price
        dynamic_sku
        dynamic_weight
        country_of_manufacture
        rating_summary
        review_count
        stock_status
        uid
        color
        colortext
        }
      }
    }
  }`

export default showcases;