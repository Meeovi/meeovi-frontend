import gql from 'graphql-tag';

const CREATE_ACTIVITY = gql`
  mutation CREATE_ACTIVITY($content: String!) {
    createActivity(input: {content: $content, type: ACTIVITY_UPDATE}) {
    activity {
      content
      date
      status
      title
      type
    }
  }
}`

const UPDATE_ACTIVITY = gql`
  mutation UPDATE_ACTIVITY($content: String!, $id: ID!) {
    updateActivity(input: {content: $content, type: ACTIVITY_UPDATE, id: $id}) {
      activity {
        content
        date
        id
        status
        title
        type
      }
    }
  }`

const DELETE_ACTIVITY = gql`
  mutation DELETE_ACTIVITY($id: ID!) {
    deleteActivity(input: {id: $id}) {
      activity {
        id
      }
    }
  }`

export { CREATE_ACTIVITY, UPDATE_ACTIVITY, DELETE_ACTIVITY }