<template>
  <v-card>
    <v-card-title>Account Information</v-card-title>
    <v-card-text>
      <v-alert v-if="errorMessage" type="error" dense>{{ errorMessage }}</v-alert>
      <v-alert v-if="successMessage" type="success" dense>{{ successMessage }}</v-alert>
      <v-form @submit.prevent="saveAccountInfo">
        <v-text-field v-model="firstName" label="First Name" :disabled="isLoading"></v-text-field>
        <v-text-field v-model="lastName" label="Last Name" :disabled="isLoading"></v-text-field>
        <v-text-field v-model="email" label="Email" type="email" :disabled="isLoading"></v-text-field>
        <v-text-field v-model="phone" label="Phone Number" :disabled="isLoading"></v-text-field>

        <p>Reset Password (if needed)</p>
        <v-text-field v-model="password" label="Current Password" type="password" :disabled="isLoading"></v-text-field>
        <v-text-field v-model="newpassword" label="New Password" type="password" :disabled="isLoading"></v-text-field>
        <v-btn type="submit" color="primary" :loading="isLoading" :disabled="isLoading">
          Save Changes
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRuntimeConfig } from 'nuxt/app'

const config = useRuntimeConfig()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')
const newpassword = ref('')
const isLoading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

// Magento API endpoints
const CUSTOMER_INFO_ENDPOINT = '/V1/customers/me'

// Assuming you have a way to get the customer's token (e.g., from Vuex store or localStorage)
const getCustomerToken = () => {
  // Implement this function to return the customer's token
  return localStorage.getItem('customer_token')
}

onMounted(async () => {
  await fetchAccountInfo()
})

const fetchAccountInfo = async () => {
  try {
    isLoading.value = true
    const customerData = await $fetch(CUSTOMER_INFO_ENDPOINT, {
      baseURL: config.public.commerceUrl,
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      }
    })
    firstName.value = customerData.firstname
    lastName.value = customerData.lastname
    email.value = customerData.email
    // Assuming the phone number is stored in a custom attribute
    phone.value = customerData.custom_attributes.find(attr => attr.attribute_code === 'telephone')?.value || ''
  } catch (error) {
    console.error('Error fetching account info:', error)
    errorMessage.value = 'Failed to load account information'
  } finally {
    isLoading.value = false
  }
}

const saveAccountInfo = async () => {
  try {
    isLoading.value = true
    errorMessage.value = ''
    successMessage.value = ''

    const updatedData = {
      customer: {
        firstname: firstName.value,
        lastname: lastName.value,
        email: email.value,
        custom_attributes: [
          {
            attribute_code: 'telephone',
            value: phone.value
          }
        ]
      }
    }

    // If password is being changed, include it in the request
    if (password.value && newpassword.value) {
      updatedData.customer.password = newpassword.value
      updatedData.customer.current_password = password.value
    }

    await $fetch(CUSTOMER_INFO_ENDPOINT, {
      baseURL: config.public.commerceUrl,
      method: 'PUT',
      body: updatedData,
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`,
        'Content-Type': 'application/json'
      }
    })

    successMessage.value = 'Account information updated successfully'
    // Refresh the account info after successful update
    await fetchAccountInfo()
  } catch (error) {
    console.error('Error saving account info:', error)
    errorMessage.value = 'Failed to update account information'
  } finally {
    isLoading.value = false
  }
}
</script>