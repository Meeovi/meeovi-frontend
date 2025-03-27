import gql from 'graphql-tag';

const lists = gql`
query NewQuery {
  query {
  customer {
    wishlists {
      id
      sharing_code
      updated_at
      items_count
      items_v2 {
        items {
          id
          product {
            uid
            name
            sku
          }
        }
      }
    }
  }
}
}`

export default lists;