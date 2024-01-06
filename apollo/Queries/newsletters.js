import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  newsletters {
    created_at
    email
    id
    optin
  }
}
`

export default { query }