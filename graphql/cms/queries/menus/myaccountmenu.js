import gql from 'graphql-tag';

const myaccountmenu = gql`
query AccountCommerce {
  menus(where: {slug: "shop"}) {
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

export default myaccountmenu;