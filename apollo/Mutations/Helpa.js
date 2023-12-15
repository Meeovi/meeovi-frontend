import gql from 'graphql-tag'

export const mutation = gql`
mutation CREATE_HELPA($id: ID){
  create_helpa_items (data: {id: $id})
    id
      status
      sort
      user_created
      user_updated
      date_created
      date_updated
      message
      question_id {
        id
        user_created
        user_updated
        subject
      }
    }
  }`

export default { mutation }