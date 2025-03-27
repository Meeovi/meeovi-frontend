import gql from 'graphql-tag';

const settingsmenu = gql`
query AccountCommerce {
  menus(where: {slug: "settings"}) {
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

export default settingsmenu;