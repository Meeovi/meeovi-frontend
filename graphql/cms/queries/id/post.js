import gql from 'graphql-tag';

const post = gql`
query NewQuery ($id: ID!) {
  post(id: $id) {
    author {
      node {
        username
      }
    }
    content
    comments {
      nodes {
        author {
          node {
            avatar {
              url
            }
            id
            name
          }
        }
        content
        date
        status
        replies {
          nodes {
            content
            author {
              node {
                avatar {
                  url
                }
                name
              }
            }
            status
            type
          }
        }
      }
    }
    date
    excerpt
    featuredImage {
      node {
        sourceUrl
      }
    }
    id
    modified
    slug
    status
    tags {
      nodes {
        name
      }
    }
    title
    uri
  }
}`

export default post;