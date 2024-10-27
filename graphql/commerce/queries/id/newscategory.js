import gql from 'graphql-tag';

const notes = gql`
query {
  blogCategories {
    items {
      title
      content
    }
  }
}
`

export default notes;