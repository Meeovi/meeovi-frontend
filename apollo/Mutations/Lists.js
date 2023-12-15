import gql from 'graphql-tag'

export const mutation = gql`
mutation CREATE_LISTS($id: ID){
  create_lists_items (data: {id: $id})
    id
      sort
      user_created
      user_updated
      date_created
      date_updated
      name
      description
      product_id 
      image {
        filename_disk
      }
      type
    }`

export default { mutation }