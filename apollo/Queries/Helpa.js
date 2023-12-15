import gql from 'graphql-tag'

export const query = gql`
query {
    helpa {
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

export default { query }