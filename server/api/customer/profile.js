import { defineEventHandler, readBody } from 'h3'
import { gql } from 'graphql-tag'

// GraphQL Queries and Mutations
const GET_CUSTOMER_PROFILE = gql`
  query GetCustomerProfile {
    customer {
      id
      email
      firstname
      lastname
      is_subscribed
      default_billing
      default_shipping
      created_at
      dob
      gender
      taxvat
      addresses {
        id
        firstname
        lastname
        street
        city
        region {
          region_code
          region
        }
        postcode
        country_code
        telephone
        default_billing
        default_shipping
      }
    }
  }
`

const UPDATE_CUSTOMER_PROFILE = gql`
  mutation UpdateCustomerProfile(
    $firstname: String
    $lastname: String
    $email: String
    $password: String
    $is_subscribed: Boolean
    $dob: String
    $gender: Int
    $taxvat: String
  ) {
    updateCustomerV2(
      input: {
        firstname: $firstname
        lastname: $lastname
        email: $email
        password: $password
        is_subscribed: $is_subscribed
        dob: $dob
        gender: $gender
        taxvat: $taxvat
      }
    ) {
      customer {
        id
        email
        firstname
        lastname
        is_subscribed
        dob
        gender
        taxvat
      }
    }
  }
`

const DELETE_CUSTOMER_ADDRESS = gql`
  mutation DeleteCustomerAddress($addressId: Int!) {
    deleteCustomerAddress(id: $addressId)
  }
`

const CREATE_CUSTOMER_ADDRESS = gql`
  mutation CreateCustomerAddress($address: CustomerAddressInput!) {
    createCustomerAddress(input: $address) {
      id
      region {
        region
        region_code
      }
      country_code
      street
      telephone
      postcode
      city
      firstname
      lastname
      default_shipping
      default_billing
    }
  }
`

export default defineEventHandler(async (event) => {
  try {
    const { action, data } = await readBody(event)
    const { client } = useApollo()

    switch (action) {
      // Read profile
      case 'getProfile':
        const { data: profileData } = await client.query({
          query: GET_CUSTOMER_PROFILE,
          fetchPolicy: 'network-only'
        })

        return {
          statusCode: 200,
          body: {
            customer: profileData.customer,
            success: true
          }
        }

      // Update profile
      case 'updateProfile':
        const { data: updateData } = await client.mutate({
          mutation: UPDATE_CUSTOMER_PROFILE,
          variables: {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password,
            is_subscribed: data.is_subscribed,
            dob: data.dob,
            gender: data.gender,
            taxvat: data.taxvat
          }
        })

        return {
          statusCode: 200,
          body: {
            customer: updateData.updateCustomerV2.customer,
            message: 'Profile updated successfully',
            success: true
          }
        }

      // Create address
      case 'createAddress':
        const { data: createAddressData } = await client.mutate({
          mutation: CREATE_CUSTOMER_ADDRESS,
          variables: {
            address: {
              firstname: data.firstname,
              lastname: data.lastname,
              street: data.street,
              city: data.city,
              region: {
                region_code: data.region_code
              },
              postcode: data.postcode,
              country_code: data.country_code,
              telephone: data.telephone,
              default_shipping: data.default_shipping,
              default_billing: data.default_billing
            }
          }
        })

        return {
          statusCode: 200,
          body: {
            address: createAddressData.createCustomerAddress,
            message: 'Address created successfully',
            success: true
          }
        }

      // Delete address
      case 'deleteAddress':
        const { data: deleteAddressData } = await client.mutate({
          mutation: DELETE_CUSTOMER_ADDRESS,
          variables: {
            addressId: data.addressId
          }
        })

        return {
          statusCode: 200,
          body: {
            success: deleteAddressData.deleteCustomerAddress,
            message: 'Address deleted successfully'
          }
        }

      default:
        return {
          statusCode: 400,
          body: {
            error: 'Invalid action',
            success: false
          }
        }
    }

  } catch (error) {
    return {
      statusCode: 500,
      body: {
        error: error.message || 'An error occurred while processing your request',
        success: false
      }
    }
  }
})

// Validation helper functions
const validateProfileData = (data) => {
  const errors = []

  if (data.email && !isValidEmail(data.email)) {
    errors.push('Invalid email format')
  }

  if (data.password && data.password.length < 8) {
    errors.push('Password must be at least 8 characters long')
  }

  if (data.telephone && !isValidPhone(data.telephone)) {
    errors.push('Invalid phone number format')
  }

  return errors
}

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const isValidPhone = (phone) => {
  return /^\+?[\d\s-]{10,}$/.test(phone)
}

// Example usage:
/*
// Get profile
await $fetch('/api/customer/profile', {
  method: 'POST',
  body: {
    action: 'getProfile'
  }
})

// Update profile
await $fetch('/api/customer/profile', {
  method: 'POST',
  body: {
    action: 'updateProfile',
    data: {
      firstname: 'John',
      lastname: 'Doe',
      email: 'john@example.com',
      is_subscribed: true
    }
  }
})

// Create address
await $fetch('/api/customer/profile', {
  method: 'POST',
  body: {
    action: 'createAddress',
    data: {
      firstname: 'John',
      lastname: 'Doe',
      street: ['123 Main St'],
      city: 'New York',
      region_code: 'NY',
      postcode: '10001',
      country_code: 'US',
      telephone: '1234567890'
    }
  }
})

// Delete address
await $fetch('/api/customer/profile', {
  method: 'POST',
  body: {
    action: 'deleteAddress',
    data: {
      addressId: 123
    }
  }
})
*/
