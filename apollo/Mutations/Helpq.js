import gql from 'graphql-tag'

export const mutation = gql`
mutation CREATE_HELPQ($id: ID){
  create_helpq_items (data: {id: $id})
    id
      status
      sort
      user_created
      user_updated
      date_created
      date_updated
      subject
      answer_id
    }
  }`

export default { mutation }