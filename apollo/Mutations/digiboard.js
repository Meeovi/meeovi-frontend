import gql from 'graphql-tag'

export const mutation = gql`
mutation CREATE_DIGIBOARD($id: ID){
  create_digiboard_items (data: {id: $id}) {
    id
    name
    board
    created_at
    student
    course
  }
}`

export default { mutation }