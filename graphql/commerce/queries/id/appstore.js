import gql from 'graphql-tag';

const appstoreCategory = gql`
query {
  categories (filters: {category_uid: {eq: "NTE="}}){
    items {
      name
      uid
      image
    }
  }
}
`

export default appstoreCategory;