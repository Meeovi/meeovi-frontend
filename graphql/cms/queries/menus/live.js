import gql from 'graphql-tag';

const live = gql`
query NewQuery {
  videos {
    nodes {
      date
      id
      content
      title
      videoFields {
        bookmarkVideoUrl
        type
        videoFile {
          node {
            sourceUrl
          }
        }
        media {
          nodes {
            id
            name
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}`

export default live;