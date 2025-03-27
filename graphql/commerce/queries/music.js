import gql from 'graphql-tag';

const categoryMusic = gql`
query {
  categories (filters: {name: {match: "Music"}}) {
    items {
      uid
      name
      image
      description
    }
  }
}
`

export default categoryMusic;