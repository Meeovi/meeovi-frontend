import gql from 'graphql-tag';

const notifications = gql`
query NewQuery {
  activities {
    nodes {
      id
      date
      status
      title
      type
    }
  }
}`

export {notifications};