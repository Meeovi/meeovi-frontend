import gql from 'graphql-tag'

export const query = gql`
query {
  digiboard {
    id
    name
    board
    created_at
    student
    course
  }
}`

export default { query }