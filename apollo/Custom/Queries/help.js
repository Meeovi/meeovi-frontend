import gql from 'graphql-tag'

export const query = gql`
query {
  articles (search: "Help"){
    id
    name
    excerpt
    content
    comments {
      comments_id {
        id
        response
        media {
          filename_disk
        }
      }
    }
    categories {
      categories_id {
        id
        name
        content
        image {
          filename_disk
        }
      }
    }
    created_at
    type
    tags {
      tags_id {
        id
        name
      }
    }
  }
}`

export default { query }