<template>
  <v-card>
    <v-card-title>Account Information</v-card-title>
    <v-card-text>
      <v-alert v-if="errorMessage" type="error" dense>{{ errorMessage }}</v-alert>
      <v-alert v-if="successMessage" type="success" dense>{{ successMessage }}</v-alert>
      <v-form @submit.prevent="saveAccountInfo">
        <v-text-field v-model="firstName" label="First Name" required :disabled="isLoading"></v-text-field>
        <v-text-field v-model="lastName" label="Last Name" required :disabled="isLoading"></v-text-field>
        <v-text-field v-model="email" label="Email" type="email" required :disabled="isLoading"></v-text-field>
        <v-text-field v-model="phone" label="Phone Number" :disabled="isLoading"></v-text-field>
        <v-btn type="submit" color="primary" :loading="isLoading" :disabled="isLoading">
          Save Changes
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const isLoading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

onMounted(async () => {
  await fetchAccountInfo()
})

const fetchAccountInfo = async () => {
  try {
    isLoading.value = true
    const info = await userStore.getAccountInfo()
    firstName.value = info.firstname
    lastName.value = info.lastname
    email.value = info.email
    phone.value = info.telephone || ''
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

    await userStore.updateAccountInfo({
      firstname: firstName.value,
      lastname: lastName.value,
      email: email.value,
      telephone: phone.value,
    })

    successMessage.value = 'Account information updated successfully'
  } catch (error) {
    console.error('Error saving account info:', error)
    errorMessage.value = 'Failed to update account information'
  } finally {
    isLoading.value = false
  }
}
</script>