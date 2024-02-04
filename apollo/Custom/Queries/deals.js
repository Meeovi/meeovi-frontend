import gql from 'graphql-tag'

export const query = gql`
query {
  products(filter: {price: {to: "20"}}){
    items {
      uid
      name
      categories {
        name
      }
      price_range {
        maximum_price {
          regular_price {
            currency
            value
          }
        }
      }
      image {
        url
      }
    }
  }
}`

export default { query }