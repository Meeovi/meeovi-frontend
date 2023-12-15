import gql from 'graphql-tag'

export const mutation = gql`
mutation CREATE_SHORTS($id: ID){
  create_shorts_items (data: {id: $id}) {
    id
    status
    date_created
    name
    description
    video {
      filename_disk
    }
  }
}`

export default { mutation }