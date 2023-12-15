import gql from 'graphql-tag'

export const query = gql`
query {
  comments {
    id
    customer_name
    image
    response
    published
  }
}`

export default { query }
