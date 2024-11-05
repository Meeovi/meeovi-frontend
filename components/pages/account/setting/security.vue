<template>
  <v-card>
    <v-card-title>Security Settings</v-card-title>
    <v-card-text>
      <v-switch v-model="twoFactorAuth" label="Enable Two-Factor Authentication"
        @change="toggleTwoFactorAuth"></v-switch>
      <!--<v-row>
        <v-col><v-btn @click="viewLoginHistory" class="mb-4">View Login History</v-btn></v-col>
        <v-col><v-btn @click="manageActiveSessions" color="warning">Manage Active Sessions</v-btn></v-col>
      </v-row>-->
    </v-card-text>
  </v-card>
</template>

<script setup>
  import {
    ref
  } from 'vue';
  import {
    useRuntimeConfig
  } from '#app';

  const config = useRuntimeConfig();
  const twoFactorAuth = ref(false);

  const toggleTwoFactorAuth = async () => {
    try {
      const response = await $fetch(`/api/V1/tfa/google/configure`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.public.commerceApiToken}` // Replace with actual auth token
        },
        body: JSON.stringify({
          'tfa_enabled': twoFactorAuth.value
        })
      });
      console.log('2FA status updated:', response);
    } catch (error) {
      console.error('Error updating 2FA status:', error);
    }
  };

  const viewLoginHistory = async () => {
    try {
      const response = await $fetch(`/api/V1/customer/login-history`, {
        headers: {
          'Authorization': `Bearer ${config.public.commerceApiToken}` // Replace with actual auth token
        }
      });
      console.log('Login history:', response);
      // You can then update the UI to display this information
    } catch (error) {
      console.error('Error fetching login history:', error);
    }
  };

  const manageActiveSessions = async () => {
    try {
      const response = await $fetch(`/api/V1/customer/active-sessions`, {
        headers: {
          'Authorization': `Bearer ${config.public.commerceApiToken}` // Replace with actual auth token
        }
      });
      console.log('Active sessions:', response);
      // You can then update the UI to display this information and allow management
    } catch (error) {
      console.error('Error fetching active sessions:', error);
    }
  };

  const terminateSession = async (sessionId) => {
    try {
      const response = await $fetch(`/api/V1/customer/terminate-session/${sessionId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.public.commerceApiToken}` // Replace with actual auth token
        }
      });
      console.log('Session terminated:', response);
      // Refresh the list of active sessions
      await manageActiveSessions();
    } catch (error) {
      console.error('Error terminating session:', error);
    }
  };
</script>