import gql from 'graphql-tag'

export const query = gql`
query {
    pages (search: "404") {
      id
      status
      sort
      name
      content
      link
      list
      type
      date_created
    }
  }`

export default { query }