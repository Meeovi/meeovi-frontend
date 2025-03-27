import gql from 'graphql-tag';

const liveid = gql`
query NewQuery ($id: ID!) {
  video(id: $id){
    id
    title
    content
    videoFields {
      type
      videoFile {
        node {
          sourceUrl
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

export default liveid;