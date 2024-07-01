import gql from 'graphql-tag';

export const CREATE_ACTIVITY = gql`
  mutation MyMutation($content: String!, $primaryItemId: Int!, $secondaryItemId: Int!, $userId: Int!) {
  createActivity(
    input: {component: ACTIVITY, content: $content, primaryItemId: $primaryItemId, secondaryItemId: $secondaryItemId, type: ACTIVITY_UPDATE, userId: $userId}
  ) {
    activity {
      content
      date
      id
      status
      title
      type
    }
  }
}
`;

export const UPDATE_ACTIVITY = gql`
  mutation MyMutation($content: String!, $primaryItemId: Int!, $secondaryItemId: Int!, $userId: Int!, $id: ID!, $id1: ID!) {
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
}
`;

export const DELETE_ACTIVITY = gql`
  mutation MyMutation($id: ID!) {
  deleteActivity(input: {id: $id}) {
    activity {
      id
    }
  }
}
`;
