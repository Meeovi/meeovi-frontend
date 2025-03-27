import gql from 'graphql-tag';

const bottomsidebarmenu = gql`query AccountCommerce {
  menus(where: {slug: "try-something-new"}) {
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

export default bottomsidebarmenu;