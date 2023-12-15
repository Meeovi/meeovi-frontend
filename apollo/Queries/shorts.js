import gql from 'graphql-tag'

export const query = gql`
query {
  shorts {
    id
    status
    date_created
    name
    description
    video {
      filename_disk
    }
  }
}`

export default { query }