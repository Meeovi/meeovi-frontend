import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  helpa {
    date_created
    date_updated
    id
    message
    question_id
    sort
    status
    user_created
    user_updated
  }
}
`

export default { query }