import gql from 'graphql-tag';

const activity = gql`
query NewQuery ($id: ID!) {
  activity(id: $id) {
    content
    creator {
      avatar {
        url
      }
      username
    }
    date
    id
    status
    title
    type
  }
}`

export default activity;