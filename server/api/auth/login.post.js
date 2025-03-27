import { useMutation } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import { defineEventHandler, readBody } from 'h3'

// Define the Magento login mutation
const GENERATE_CUSTOMER_TOKEN = gql`
  mutation generateCustomerToken($email: String!, $password: String!) {
    generateCustomerToken(
      email: $email
      password: $password
    ) {
      token
    }
  }
`

export default defineEventHandler(async (event) => {
  try {
    const { email, password } = await readBody(event)

    // Validate input
    if (!email || !password) {
      return {
        statusCode: 400,
        body: {
          error: 'Email and password are required'
        }
      }
    }

    // Execute the mutation
    const { mutate: generateToken } = useMutation(GENERATE_CUSTOMER_TOKEN)
    
    const result = await generateToken({
      variables: {
        email,
        password
      }
    })

    if (result?.data?.generateCustomerToken?.token) {
      // Successfully generated token
      return {
        statusCode: 200,
        body: {
          token: result.data.generateCustomerToken.token,
          success: true
        }
      }
    } else {
      return {
        statusCode: 401,
        body: {
          error: 'Invalid credentials',
          success: false
        }
      }
    }

  } catch (error) {
    return {
      statusCode: 500,
      body: {
        error: error.message || 'An error occurred during login',
        success: false
      }
    }
  }
})
