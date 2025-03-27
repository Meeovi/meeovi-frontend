import gql from 'graphql-tag';

const page = gql`
query NewQuery ($id: ID!) {
  page(id: $id) {
    content
    id
    title
    status
    slug
  }
}`

export default page;