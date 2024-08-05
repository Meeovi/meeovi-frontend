import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
  query {
    viewer {
    id
    username
    email
    name
    avatar {
      url
    }
  }
}
`;
