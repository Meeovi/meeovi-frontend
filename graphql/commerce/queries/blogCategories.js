import gql from 'graphql-tag';

const news = gql`
query {
  blogCategories {
    items {
      title
      content
      category_id
    }
  }
}
`

export default news;