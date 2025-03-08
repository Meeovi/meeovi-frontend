import {
    gql
} from 'graphql-tag'

export const AUTH_MUTATIONS = {
  REGISTER: gql`
    mutation RegisterCustomer($firstname: String!, $lastname: String!, $email: String!, $password: String!) {
      createCustomer(
        input: {
          firstname: $firstname
          lastname: $lastname
          email: $email
          password: $password
        }
      ) {
        customer {
          email
          firstname
          lastname
        }
      }
    }
  `,

  LOGIN: gql`
    mutation LoginCustomer($email: String!, $password: String!) {
      generateCustomerToken(email: $email, password: $password) {
        token
      }
    }
  `,

  LOGOUT: gql`
    mutation RevokeCustomerToken {
      revokeCustomerToken {
        result
      }
    }
  `,

  SESSION: gql`
    query GetCustomerDetails {
      customer {
        email
        firstname
        lastname
      }
    }
  `,

  FORGOT_PASSWORD: gql`
    mutation ForgotPassword($email: String!) {
      requestPasswordResetEmail(email: $email)
    }
  `,

  RESET_PASSWORD: gql`
    mutation ResetPassword($email: String!, $resetToken: String!, $newPassword: String!) {
      resetPassword(
        email: $email,
        resetPasswordToken: $resetToken,
        newPassword: $newPassword
      )
    }
  `,
}
