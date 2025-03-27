import gql from 'graphql-tag';

const blogCategory = gql`
query ($id: ID!) {
  category(id: $id) {
    id
    name
    uri
    slug
    posts {
      nodes {
        author {
          node {
            username
          }
        }
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        status
        slug
      }
    }
    taxonomy {
      node {
        id
        name
      }
    }
  }
}`

export default blogCategory;