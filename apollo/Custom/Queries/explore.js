import gql from 'graphql-tag'

export const query = gql`
query {
  pages(search: "explore") {
    id
    status
    sort
    name
    content
    link
    list
    type
    image {
      filename_disk
    }
    date_created
  }
}`

export default { query }