import gql from 'graphql-tag'

export const query = gql`
query {
  meeovistores {
    id
    name
    content
    image {
      filename_disk
    }
    categories {
      id
      categories_id {
        id
        name
        content
        image {
          filename_disk
        }
      }
    }
  }
}`

export default { query }
