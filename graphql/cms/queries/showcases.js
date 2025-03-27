import gql from 'graphql-tag';

const CREATE_SHOWCASE = gql`
  mutation CREATE_SHOWCASE($title: String!) {
    createShowcase(input: {
      title: $title,
      status: PUBLISH,
    }) {
      showcase {
        id
        title
        status
        showcaseFields {
          color
          colortext
          description
          image {
            node {
                sourceUrl
            }
          }
        }
      }
    }
  }`

const UPDATE_SHOWCASE = gql`
mutation UPDATE_SHOWCASE($content: String!, $description: String!, $name: String!, $id: ID!, $title: String!, $excerpt: String!) {
  updateShowcase(
    input: {id: $id, title: $title, status: PUBLISH, excerpt: $excerpt, content: $content}
  ) {
    showcase {
      content
      excerpt
      id
      title
      showcaseFields {
        color
        colortext
        description
        image {
          node {
            sourceUrl
          }
        }
        name
        rating
        products {
          items {
            id
            date
            status
            ... on SimpleProduct {
              id
              name
              description
              content
              price
              sku
              type
            }
          }
        }
      }
    }
  }
}`

const DELETE_SHOWCASE = gql`
  mutation DELETE_SHOWCASE($id: ID!) {
    deleteShowcase(input: {id: $id}) {
      showcase {
        id
      }
    }
  }`

export default { CREATE_SHOWCASE, UPDATE_SHOWCASE, DELETE_SHOWCASE }