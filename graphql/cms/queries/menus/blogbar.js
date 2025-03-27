import gql from 'graphql-tag';

const blogbar = gql`
query NewQuery {
  categories {
    nodes {
      parent {
        node {
          id
          name
        }
      }
    }
  }
  nodeByUri(uri: "blog") {
    ... on Page {
      id
      title
      content
    }
  }
}`

export default blogbar;