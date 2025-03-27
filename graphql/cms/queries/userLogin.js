import gql from 'graphql-tag';

const login = gql`
mutation login($username: String!, $password: String!) {
  login(input: {username: $username, password: $password}) {
    authToken
    refreshToken
    user { userId name username email }
  }
}`

export default login;