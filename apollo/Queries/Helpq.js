import gql from 'graphql-tag'

export const query = gql`
query {
    helpq {
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

export default { query }