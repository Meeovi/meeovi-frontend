import gql from 'graphql-tag';

const error = gql `
query MyQuery {
  pages(where: {name: "Oops, 404"}) {
    nodes {
      title
      content
      id
      menu {
        image {
          node {
            sourceUrl
          }
        }
      }
    }
  }
}
`

export default error;