import gql from 'graphql-tag'

export const query = gql`
query {
    pages (filter: {name: {_starts_with: "InternetConnection"}}) {
      id
      status
      sort
      name
      content
      link
      list
      image {
        filename_disk
      }
      type
      date_created
    }
  }`

export default { query }