import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  collections {
    created_at
    description
    id
    image
    name
    type
  }
}

`

export default { query }