import gql from 'graphql-tag';

export const CategoryQuery = gql`
 query CategoryQuery($uid: String!) {
    categories (filters: {category_uid: {eq: $uid}}) {
    items {
      uid
      name
      image
      children {
        uid
        name
        image
      }
      description
      cms_block {
        content
      }
      image
      products(pageSize: 20, sort: {position: DESC}) {
        items {
          description {
            html
          }
          uid
          name
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
        }
      }
    }
  }
}`

export const BestsellerQuery = gql`
  query BestsellerQuery($uid: String!) {
    products(filter: {category_uid: {eq: $uid}}, pageSize: 5, sort: {position: DESC}) {
      items {
        uid
        name
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
      }
    }
  }`

export const LatestProductsQuery = gql`
    query LatestProductsQuery($uid: String!) {
    products(filter: {category_uid: {eq: $uid}}, pageSize: 5, sort: {position: DESC}) {
      items {
        uid
        name
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
      }
    }
  }`

export const EventProductsQuery = gql`
    query EventProductsQuery {
    products(filter: {category_uid: {eq: "NjE="}}) {
      items {
        uid
        name
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
      }
    }
  }`

//export default { CategoryQuery, BestsellerQuery, LatestProductsQuery, EventProductsQuery }