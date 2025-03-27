import { useMutation } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import { defineEventHandler } from 'h3'

const REVOKE_CUSTOMER_TOKEN = gql`
  mutation revokeCustomerToken {
    revokeCustomerToken {
      result
    }
  }
`

export default defineEventHandler(async (event) => {
  try {
    const { mutate: revokeToken } = useMutation(REVOKE_CUSTOMER_TOKEN)
    
    const result = await revokeToken()

    if (result?.data?.revokeCustomerToken?.result) {
      return {
        statusCode: 200,
        body: {
          message: 'Successfully logged out',
          success: true
        }
      }
    }

    return {
      statusCode: 400,
      body: {
        error: 'Logout failed',
        success: false
      }
    }

  } catch (error) {
    return {
      statusCode: 500,
      body: {
        error: error.message || 'An error occurred during logout',
        success: false
      }
    }
  }
})
