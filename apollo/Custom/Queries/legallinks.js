import gql from 'graphql-tag'

export const query = gql`
query {
    pages (search: "Legal") {
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