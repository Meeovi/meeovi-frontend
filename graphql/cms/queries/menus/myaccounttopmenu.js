import gql from 'graphql-tag';

export const AccountCommerce = gql`
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

export const AccountSocial = gql`
query AccountCommerce {
  menus(where: {slug: "social"}) {
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

//export default { AccountCommerce, AccountSocial };