import { useMutation } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import { defineEventHandler, readBody } from 'h3'

const RESET_PASSWORD = gql`
  mutation resetPassword(
    $email: String!
    $resetToken: String!
    $newPassword: String!
  ) {
    resetPassword(
      email: $email
      resetToken: $resetToken
      newPassword: $newPassword
    ) {
      success
    }
  }
`

export default defineEventHandler(async (event) => {
  try {
    const { email, resetToken, newPassword } = await readBody(event)

    if (!email || !resetToken || !newPassword) {
      return {
        statusCode: 400,
        body: {
          error: 'Email, reset token, and new password are required',
          success: false
        }
      }
    }

    const { mutate: resetPass } = useMutation(RESET_PASSWORD)
    
    const result = await resetPass({
      variables: {
        email,
        resetToken,
        newPassword
      }
    })

    if (result?.data?.resetPassword?.success) {
      return {
        statusCode: 200,
        body: {
          message: 'Password has been reset successfully',
          success: true
        }
      }
    }

  } catch (error) {
    return {
      statusCode: 500,
      body: {
        error: error.message || 'Failed to reset password',
        success: false
      }
    }
  }
})
