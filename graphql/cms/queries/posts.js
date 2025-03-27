import gql from 'graphql-tag';

const posts = gql`
query NewQuery {
  posts {
    nodes {
      author {
        node {
          username
        }
      }
      content
      date
      excerpt
      id
      title
      slug
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}`

export {posts};