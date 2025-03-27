import gql from 'graphql-tag';

export const overview = gql`
query overview {
  pages(where: {name: "Meeovi"}) {
    nodes {
      id
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
      content
    }
  }
}`

export const aboutQuery = gql`
query AccountCommerce {
  menus(where: {slug: "about-meeovi"}) {
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

export const legalQuery = gql`
query AccountCommerce {
  menus(where: {slug: "legal"}) {
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

export const companyQuery = gql`
query companyQuery {
  navigations(where: {title: "Company"}) {
    nodes {
      title
      navigationFields {
        menu {
          nodes {
            ... on Website {
              id
              websiteFields {
                link
                type
                icon
                description
              }
              title
            }
          }
        }
      }
    }
  }
}`

export const copyrightQuery = gql`
query AccountCommerce {
  menus(where: {slug: "copyright-footer"}) {
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

/*export default {
    overview,
    aboutQuery,
    legalQuery,
    companyQuery,
    copyrightQuery
};*/