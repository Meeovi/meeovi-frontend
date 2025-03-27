<template>
  <div class="authPage">
    <section data-bs-version="5.1" class="authForm">
      <NuxtImg loading="lazy" src="~/assets/images/logo512alpha-128x128.png" alt="Meeovi Logo" class="authLogo" />
      <h1 class="mbr-section-title mbr-fonts-style display-1">Forgot Password</h1>

      <div class="mbr-section-btn">
        <form @submit.prevent="forgotPassword" width="500">
          <v-text-field type="email" v-model="email" label="Enter Email for Password Reset" :error-messages="emailError"
            :disabled="loading" required></v-text-field>

          <v-btn class="mt-2 btn btn-primary display-4" type="submit" block :loading="loading" :disabled="loading">
            {{ loading ? 'Sending...' : 'Request Password Reset' }}
          </v-btn>
        </form>

        <v-alert v-if="message" :type="messageType" class="mt-4" variant="tonal" closable>
          {{ message }}
        </v-alert>

        <div class="mt-4 text-center">
          <p>Remember your password?
            <NuxtLink to="/auth/login">Sign In</NuxtLink>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import {
    ref,
    computed
  } from 'vue'
  import {
    useRuntimeConfig
  } from '#imports'
  import {
    useRouter
  } from 'vue-router'

  const router = useRouter()
  const config = useRuntimeConfig()

  // Form state
  const email = ref('')
  const loading = ref(false)
  const message = ref('')
  const messageType = ref < 'success' | 'error' | 'info' > ('info')

  // Validation
  const emailError = computed(() => {
    if (!email.value) return ''
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email.value) ? '' : 'Please enter a valid email address'
  })

  const forgotPassword = async () => {
    // Validate email
    if (emailError.value || !email.value) {
      message.value = 'Please enter a valid email address'
      messageType.value = 'error'
      return
    }

    try {
      loading.value = true
      message.value = ''

      // Get the current origin for the reset URL
      const origin = window.location.origin
      const resetUrl = `${origin}/auth/reset-password`

      const response = await fetch(`${config.public.directus.url}/auth/password/request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.value,
          reset_url: `${resetUrl}?token={token}`, // Directus will replace {token} with the actual token
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Failed to send reset email')
      }

      // Show success message
      message.value = 'If an account exists with this email, you will receive a password reset link shortly.'
      messageType.value = 'success'

      // Clear form
      email.value = ''

      // Optionally redirect after a delay
      setTimeout(() => {
        router.push('/auth/login')
      }, 5000)

    } catch (error) {
      console.error('Password reset request failed:', error)
      message.value = 'An error occurred while processing your request. Please try again.'
      messageType.value = 'error'
    } finally {
      loading.value = false
    }
  }

  // Handle auto-fill of email from query params if present
  onMounted(() => {
    const route = useRoute()
    if (route.query.email) {
      email.value = route.query.email as string
    }
  })

  useHead({
    title: "Forgot Password"
  })

  definePageMeta({
    auth: false,
    layout: false,
  })
</script>

<style scoped>
  .authPage {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--v-background);
  }

  .authForm {
    width: 100%;
    max-width: 400px;
    margin: 2rem auto;
    padding: 2rem;
    background: var(--v-surface-variant);
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .authLogo {
    display: block;
    margin: 0 auto 2rem;
    max-width: 128px;
    height: auto;
  }

  .mbr-section-title {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 600;
  }

  .v-alert {
    margin-top: 1rem;
  }

  .text-center {
    text-align: center;
  }

  .mt-4 {
    margin-top: 1rem;
  }
</style>