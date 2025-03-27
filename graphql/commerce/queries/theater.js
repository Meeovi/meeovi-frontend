import gql from 'graphql-tag';

const categoryTheater = gql`
query {
  categories (filters: {name: {match: "Theater"}}) {
    items {
      uid
      name
      image
      description
    }
  }
}
`

export default categoryTheater;