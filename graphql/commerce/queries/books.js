import gql from 'graphql-tag';

const categoryBooks = gql`
query {
  categories (filters: {category_uid: {eq: "NDE="}}) {
    items {
      uid
      name
      image
      description
    }
  }
}
`

export default categoryBooks;