import gql from 'graphql-tag'

export const mutation = gql`
mutation CREATE_ARTICLE ($id: ID){
  create_articles_items (data: {id: $id}){
    id
    name
    excerpt
    content
    image {
      filename_disk
    }
    created_at
  }
}`

export default { mutation }

