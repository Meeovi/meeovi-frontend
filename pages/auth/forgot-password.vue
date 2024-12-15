<template>
  <div class="authPage">
    <section data-bs-version="5.1" class="authForm">
      <NuxtImg loading="lazy" src="~/assets/images/logo512alpha-128x128.png" alt="Meeovi Logo" class="authLogo" />
      <h1 class="mbr-section-title mbr-fonts-style display-1">Forgot Password</h1>
      <div class="mbr-section-btn">
        <form @submit.prevent="forgotPassword" width="500">
          <v-text-field type="email" v-model="email" label="Enter Email for Password Reset" required></v-text-field>
          <v-btn class="mt-2 btn btn-primary display-4" type="submit" block>Request Password Reset</v-btn>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRuntimeConfig } from '#imports';

const email = ref('')

const forgotPassword = async () => {
  const config = useRuntimeConfig();
  try {
    await $fetch('/V1/customers/password', {
      method: 'PUT',
      baseURL: `${config.public.commerceUrl}/rest/default`,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        template: 'email_reset',
        websiteId: 1, // Change if needed
      }),
    })

    alert('Password reset link sent to your email')
  } catch (error) {
    console.error('Forgot password failed', error)
  }
}

 /* import {
    ref
  } from 'vue';

  const email = ref('');
  const message = ref('');

  const requestPasswordReset = async () => {
    try {
      const response = await fetch('/api/auth/requestReset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.value
        }),
      });

      const data = await response.json();

      if (response.status === 200 || response.status === 201) {
        message.value = 'Password reset email sent. Please check your inbox.';
      } else {
        message.value = data.body || 'Failed to request password reset';
      }
    } catch (error) {
      message.value = 'An error occurred';
      console.error('Error requesting password reset:', error);
    }
  };*/

  useHead({
    title: "Forgot Password"
  });

  definePageMeta({
    auth: false,
    //middleware: 'guest',
    layout: false,
  });
</script>

<style scoped>
  .message {
    margin-top: 10px;
    color: green;
  }
</style>