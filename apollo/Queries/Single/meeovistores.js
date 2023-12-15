import gql from 'graphql-tag'

export const query = gql`
query {
  meeovistores_by_id (id: 3) {
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
    color
    colortext
  }
}`

export default { query }