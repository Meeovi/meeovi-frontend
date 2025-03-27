<template>
  <div>
    <v-dialog v-model="showDialog" persistent max-width="500">
      <v-card>
        <v-card-title class="text-h5">Age Verification</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" @submit.prevent="verifyAge">
            <v-text-field v-model="formData.firstName" label="First Name" :rules="nameRules" required></v-text-field>

            <v-text-field v-model="formData.lastName" label="Last Name" :rules="nameRules" required></v-text-field>

            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y
              min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="formData.dateOfBirth" label="Date of Birth" readonly v-bind="attrs" v-on="on"
                  :rules="dateRules" required></v-text-field>
              </template>
              <v-date-picker v-model="formData.dateOfBirth" :max="maxDate" @input="menu = false"></v-date-picker>
            </v-menu>

            <v-checkbox v-model="formData.termsAccepted" :rules="[v => !!v || 'You must agree to continue']"
              label="I confirm that all information provided is accurate" required></v-checkbox>

            <v-alert v-if="error" type="error" dense text>
              {{ error }}
            </v-alert>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" :loading="loading" :disabled="!valid" type="submit">
                Verify Age
              </v-btn>
              <v-btn color="error" @click="cancelVerification">
                Cancel
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
  import {
    ref,
    computed,
    onMounted
  } from 'vue'
  import {
    useRouter
  } from 'vue-router'

  const router = useRouter()
  const showDialog = ref(false)
  const valid = ref(false)
  const loading = ref(false)
  const error = ref(null)
  const menu = ref(false)
  const form = ref(null)

  const formData = ref({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    termsAccepted: false
  })

  const maxDate = computed(() => {
    const date = new Date()
    return date.toISOString().split('T')[0]
  })

  const nameRules = [
    v => !!v || 'Name is required',
    v => v.length >= 2 || 'Name must be at least 2 characters'
  ]

  const dateRules = [
    v => !!v || 'Date of Birth is required'
  ]

  const verifyAge = async () => {
    if (!form.value.validate()) return

    loading.value = true
    error.value = null

    try {
      const response = await $fetch('/api/verify-age', {
        method: 'POST',
        body: formData.value
      })

      if (response.verified) {
        // Store verification token securely
        sessionStorage.setItem('ageVerificationToken', response.token)
        showDialog.value = false
      } else {
        router.push('/')
      }
    } catch (err) {
      error.value = err.data?.message || 'Verification failed. Please try again.'
    } finally {
      loading.value = false
    }
  }

  const validateToken = async (token) => {
    try {
      const response = await $fetch('/api/validate-token', {
        method: 'POST',
        body: {
          token
        }
      })
      if (!response.valid) {
        showDialog.value = true
        sessionStorage.removeItem('ageVerificationToken')
      }
    } catch (err) {
      showDialog.value = true
      sessionStorage.removeItem('ageVerificationToken')
    }
  }

  const cancelVerification = () => {
    router.push('/')
  }

  onMounted(() => {
    const token = sessionStorage.getItem('ageVerificationToken')
    if (!token) {
      showDialog.value = true
    } else {
      // Verify token validity with backend
      validateToken(token)
    }
  })
</script>