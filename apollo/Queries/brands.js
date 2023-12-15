import gql from 'graphql-tag'

export const query = gql`
query {
  brands {
    id
    created_at
    code
    name
    country
    state
    isPublic
    city
    description
    media
  }
}`

export default { query }
