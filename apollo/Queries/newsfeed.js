import gql from 'graphql-tag'

export const query = gql`
query {
  newsfeed {
    user_created
    user_updated
    date_created
    date_updated
    post
    image {
      filename_disk
    }
    files {
      directus_files_id {
        id
        filename_disk
      }
    }
  }
}`

export default { query }