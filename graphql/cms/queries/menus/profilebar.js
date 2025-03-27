import gql from 'graphql-tag';

const profilebar = gql`
query AccountCommerce {
  menus(where: {slug: "profile-menu"}) {
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

export default profilebar;