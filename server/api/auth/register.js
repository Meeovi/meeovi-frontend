import { useMutation } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import { defineEventHandler, readBody } from 'h3'

const CREATE_CUSTOMER = gql`
  mutation createCustomer(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
  ) {
    createCustomer(
      input: {
        firstname: $firstname
        lastname: $lastname
        email: $email
        password: $password
      }
    ) {
      customer {
        id
        email
        firstname
        lastname
      }
    }
  }
`

export default defineEventHandler(async (event) => {
  try {
    const { firstname, lastname, email, password } = await readBody(event)

    // Validate required fields
    if (!firstname || !lastname || !email || !password) {
      return {
        statusCode: 400,
        body: {
          error: 'All fields are required',
          success: false
        }
      }
    }

    const { mutate: createCustomer } = useMutation(CREATE_CUSTOMER)
    
    const result = await createCustomer({
      variables: {
        firstname,
        lastname,
        email,
        password
      }
    })

    if (result?.data?.createCustomer?.customer) {
      return {
        statusCode: 200,
        body: {
          customer: result.data.createCustomer.customer,
          message: 'Registration successful',
          success: true
        }
      }
    }

  } catch (error) {
    return {
      statusCode: 500,
      body: {
        error: error.message || 'Registration failed',
        success: false
      }
    }
  }
})
