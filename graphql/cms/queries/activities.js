import gql from 'graphql-tag';

const activities = gql`
query NewQuery {
  members {
    nodes {
      activities(where: {order: DESC, type: ACTIVITY_UPDATE, component: ACTIVITY}) {
        nodes {
          content
          id
          date
          status
          title
          type
          creator {
            avatar {
              url
            }
            username
          }
        }
      }
    }
  }
}`

export {activities}