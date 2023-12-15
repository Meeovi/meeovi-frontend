import gql from 'graphql-tag'

export const mutation = gql`
mutation CREATE_COMMENTS($id: ID){
  create_comments_items (data: {id: $id}){
    id
    customer_name
    image
    response
    published
  }
}`

export default { mutation }
