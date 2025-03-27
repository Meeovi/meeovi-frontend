<template>
  <div class="authPage">
    <section data-bs-version="5.1" class="authForm">
      <NuxtImg loading="lazy" src="~/assets/images/logo512alpha-128x128.png" alt="Meeovi Logo" class="authLogo" />
      <h1 class="mbr-section-title mbr-fonts-style display-1">Reset Password</h1>

      <!-- Show different forms based on the reset password stage -->
      <div v-if="!token" class="request-reset-form">
        <p>Enter your email address to receive a password reset link.</p>
        <form @submit.prevent="requestReset" class="mbr-section-btn">
          <v-text-field
            v-model="email"
            type="email"
            label="Email"
            :error-messages="emailError"
            required
          ></v-text-field>
          <v-btn
            class="mt-2 btn btn-primary display-4"
            type="submit"
            block
            :loading="loading"
            :disabled="loading"
          >
            Send Reset Link
          </v-btn>
        </form>
      </div>

      <div v-else class="reset-password-form">
        <form @submit.prevent="resetPassword" class="mbr-section-btn">
          <v-text-field
            v-model="password"
            type="password"
            label="New Password"
            :error-messages="passwordError"
            required
          ></v-text-field>
          <v-text-field
            v-model="confirmPassword"
            type="password"
            label="Confirm Password"
            :error-messages="confirmPasswordError"
            required
          ></v-text-field>
          <v-btn
            class="mt-2 btn btn-primary display-4"
            type="submit"
            block
            :loading="loading"
            :disabled="loading"
          >
            Reset Password
          </v-btn>
        </form>
      </div>

      <v-alert
        v-if="message"
        :type="messageType"
        class="mt-4"
        variant="tonal"
      >
        {{ message }}
      </v-alert>

      <div class="mt-4 text-center">
        <NuxtLink to="/auth/login">Back to Login</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useRuntimeConfig } from '#imports';

const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();

// Form data
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const loading = ref(false);
const message = ref('');
const messageType = ref('info');
const token = ref(route.query.token || null);

// Validation
const emailError = computed(() => {
  if (!email.value) return '';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.value) ? '' : 'Please enter a valid email address';
});

const passwordError = computed(() => {
  if (!password.value) return '';
  if (password.value.length < 8) return 'Password must be at least 8 characters';
  return '';
});

const confirmPasswordError = computed(() => {
  if (!confirmPassword.value) return '';
  return password.value === confirmPassword.value ? '' : 'Passwords do not match';
});

// Request password reset
const requestReset = async () => {
  if (emailError.value || !email.value) {
    message.value = 'Please enter a valid email address';
    messageType.value = 'error';
    return;
  }

  try {
    loading.value = true;
    message.value = '';

    const response = await fetch(`${config.public.directus.url}/auth/password/request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        reset_url: `${window.location.origin}/auth/reset-password?token={token}`,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to send reset email');
    }

    message.value = 'If an account exists with this email, you will receive a password reset link.';
    messageType.value = 'success';
    email.value = '';
    
  } catch (error) {
    message.value = error.message;
    messageType.value = 'error';
  } finally {
    loading.value = false;
  }
};

// Reset password with token
const resetPassword = async () => {
  if (passwordError.value || confirmPasswordError.value) {
    message.value = 'Please fix the errors in the form';
    messageType.value = 'error';
    return;
  }

  try {
    loading.value = true;
    message.value = '';

    const response = await fetch(`${config.public.directus.url}/auth/password/reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: token.value,
        password: password.value,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to reset password');
    }

    message.value = 'Password reset successfully. You can now login with your new password.';
    messageType.value = 'success';

    // Clear form
    password.value = '';
    confirmPassword.value = '';

    // Redirect to login after a short delay
    setTimeout(() => {
      router.push('/auth/login');
    }, 3000);

  } catch (error) {
    message.value = error.message;
    messageType.value = 'error';
  } finally {
    loading.value = false;
  }
};

// Page meta
useHead({
  title: "Reset Password"
});

definePageMeta({
  auth: false,
  layout: false,
});
</script>

<style scoped>
.authForm {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
}

.message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
}
</style>