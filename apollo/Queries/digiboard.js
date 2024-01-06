import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  digiboard {
    board
    created_at
    id
    image
    name
  }
}
`

export default { query }