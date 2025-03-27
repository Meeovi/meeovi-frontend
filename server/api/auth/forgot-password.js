import { useMutation } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import { defineEventHandler, readBody } from 'h3'

const REQUEST_PASSWORD_RESET = gql`
  mutation requestPasswordResetEmail($email: String!) {
    requestPasswordResetEmail(
      email: $email
    )
  }
`

export default defineEventHandler(async (event) => {
  try {
    const { email } = await readBody(event)

    if (!email) {
      return {
        statusCode: 400,
        body: {
          error: 'Email is required',
          success: false
        }
      }
    }

    const { mutate: requestReset } = useMutation(REQUEST_PASSWORD_RESET)
    
    const result = await requestReset({
      variables: { email }
    })

    return {
      statusCode: 200,
      body: {
        message: 'Password reset email has been sent',
        success: true
      }
    }

  } catch (error) {
    return {
      statusCode: 500,
      body: {
        error: error.message || 'Failed to request password reset',
        success: false
      }
    }
  }
})
