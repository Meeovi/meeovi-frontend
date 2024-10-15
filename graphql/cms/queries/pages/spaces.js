import gql from 'graphql-tag';

const page = gql`
query {
  pages (where: {name: "Spaces"}) {
    nodes {
      content
    }
  }
}`

export default page;