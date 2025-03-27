import gql from 'graphql-tag';

const members = gql`
query NewQuery {
  members {
    nodes {
      avatar {
        url
      }
      description
      id
      memberTypes
      url
      username
      totalFriendCount
      locale
      latestUpdate
    }
  }
}`

export {members};