import gql from 'graphql-tag';

const uploadPage = gql`
query {
  cmsPage (identifier: "upload-center") {
    content
    title
  }
}`

export {uploadPage};