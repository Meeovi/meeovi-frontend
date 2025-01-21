import {
  gql
} from 'graphql-tag'

export const CONFIRM_EMAIL = gql`
  mutation ConfirmEmail($email: String!, $token: String!) {
    confirmEmail(
      email: $email
      token: $token
    ) {
      status
    }
  }
`;