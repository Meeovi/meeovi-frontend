import gql from 'graphql-tag';

const time = gql`
query {
  categories (filters: {category_uid: {eq: "OTY="}}){
    items {
      name
      uid
      image
    }
  }
}
`

export default time;