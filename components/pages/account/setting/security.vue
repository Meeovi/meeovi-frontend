<template>
  <v-card>
    <v-card-title>Security Settings</v-card-title>
    <v-card-text>
      <v-switch
        v-model="twoFactorAuth"
        label="Enable Two-Factor Authentication"
      ></v-switch>
      <v-row>
        <v-col><v-btn @click="viewLoginHistory" class="mb-4">View Login History</v-btn></v-col>
        <v-col><v-btn @click="manageActiveSessions" color="warning">Manage Active Sessions</v-btn></v-col>
        <v-col><v-btn @click="changePassword" color="primary">Change Password</v-btn></v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const twoFactorAuth = ref(false);

const viewLoginHistory = () => {
  // Implement view login history logic
  console.log('Viewing login history');
};

const manageActiveSessions = () => {
  // Implement manage active sessions logic
  console.log('Managing active sessions');
};

const changePassword = () => {
  // Implement change password logic
  console.log('Changing password');
};
</script>
