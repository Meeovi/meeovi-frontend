import gql from 'graphql-tag';

const refreshJwtAuthToken = gql`
mutation refreshJwtAuthToken($jwtRefreshToken: String!) {
  refreshJwtAuthToken(input: {jwtRefreshToken: $jwtRefreshToken}) {
    authToken
  }
}`

export default refreshJwtAuthToken;