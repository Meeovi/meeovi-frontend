import gql from 'graphql-tag';

const departmentsmenu = gql`
query {
  categories {
    items {
      uid
      name
      children {
        uid
        name
      }
    }
  }
}`

export default departmentsmenu;