<template>
  <v-card>
    <v-card-title>Communication Preferences</v-card-title>
    <v-card-text>
      <v-switch
        v-model="emailNewsletter"
        label="Receive Email Newsletter"
      ></v-switch>
      <v-switch
        v-model="smsNotifications"
        label="Receive SMS Notifications"
      ></v-switch>
      <v-switch
        v-model="pushNotifications"
        label="Receive Push Notifications"
      ></v-switch>
      <v-btn @click="savePreferences" color="primary">Save Preferences</v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const emailNewsletter = ref(false);
const smsNotifications = ref(false);
const pushNotifications = ref(false);

const savePreferences = () => {
  // Implement save logic here
  console.log('Saving communication preferences');
};
</script>
