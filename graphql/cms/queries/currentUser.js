import gql from 'graphql-tag';

const CREATE_ACTIVITY = gql`
query{
    viewer {
    id
    username
    email
    name
    avatar {
      url
    }
  }
}`

export default CREATE_ACTIVITY;