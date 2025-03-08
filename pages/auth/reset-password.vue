<template>
  <div class="authPage">
    <section data-bs-version="5.1" class="authForm">
      <img src="~/assets/images/logo512alpha-128x128.png" alt="Meeovi Logo" class="authLogo">
      <h1 class="mbr-section-title mbr-fonts-style display-1">Reset Password</h1>

      <p v-if="message" class="message">{{ message }}</p>

      <div class="mbr-section-btn">
        <form @submit.prevent="resetPassword" width="500">
          <v-text-field type="password" v-model="password" label="Password" required></v-text-field>
          <v-text-field type="password" v-model="confirmPassword" label="Confirm Password" required></v-text-field>
          <v-btn class="mt-2 btn btn-primary display-4" type="submit" block>Reset Password</v-btn>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue';
  import {
    useRoute
  } from 'vue-router';

  const route = useRoute();
  const newPassword = ref('');
  const message = ref('');

  const resetPassword = async () => {
    const token = route.query.token;

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          newPassword: newPassword.value
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        message.value = 'Password reset successfully. You can now log in with your new password.';
      } else {
        message.value = data.body || 'Failed to reset password';
      }
    } catch (error) {
      message.value = 'An error occurred';
      console.error('Error resetting password:', error);
    }
  };

  useHead({
    title: "Reset Password"
  });

  definePageMeta({
    auth: false,
    //middleware: 'guest',
    layout: false,
  });
</script>