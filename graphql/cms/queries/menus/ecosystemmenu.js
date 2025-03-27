import gql from 'graphql-tag';

const ecosystemmenu = gql`
query AccountCommerce {
  menus(where: {slug: "ecosystemmenu"}) {
    nodes {
      menuItems {
        nodes {
          id
          label
          path
        }
      }
      name
      id
      slug
    }
  }
}`

export default ecosystemmenu;