import gql from 'graphql-tag';

const viewer = gql`
query viewer {
  jwtRefreshToken
}`

export default viewer;