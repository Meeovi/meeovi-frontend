import gql from 'graphql-tag'

export const query = gql`
query {
    websites (search: "ecosystemmenu") {
      id
      name
      type
      url
      image {
        filename_disk
      }
    }
  }`

export default { query }