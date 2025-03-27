<template>
  <v-card>
    <v-card-title>Communication Preferences</v-card-title>
    <v-card-text>
      <!-- Newsletter subscriptions -->
      <v-list v-if="newsletters.length">
        <v-list-subheader>Your Newsletter Subscriptions:</v-list-subheader>
        <v-list-item v-for="newsletter in newsletters" :key="newsletter.id">
          <v-list-item-content>
            <v-list-item-title>{{ newsletter.name }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-switch v-model="newsletter.subscribed" @change="updateSubscription(newsletter)"></v-switch>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-alert v-else type="info">You are not subscribed to any newsletters.</v-alert>
      
      <!-- SMS Notifications -->
      <v-switch
        v-model="smsNotifications.enabled"
        label="Receive SMS Notifications"
        @change="updateSmsNotifications"
      ></v-switch>
      <v-text-field
        v-if="smsNotifications.enabled"
        v-model="smsNotifications.phoneNumber"
        label="Phone Number for SMS"
        placeholder="Enter your phone number"
        @input="updateSmsNotifications"
      ></v-text-field>

      <!-- Push Notifications -->
      <v-switch
        v-model="pushNotifications.enabled"
        label="Receive Push Notifications"
        @change="updatePushNotifications"
      ></v-switch>
      
      <v-btn @click="savePreferences" color="primary">Save Preferences</v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const { $magento } = useNuxtApp();

const newsletters = ref([]);
const smsNotifications = ref({
  enabled: false,
  phoneNumber: ''
});
const pushNotifications = ref({
  enabled: false
});

const fetchNewsletterSubscriptions = async () => {
  try {
    const response = await $magento.customer.getNewsletterSubscriptions();
    newsletters.value = response.map(subscription => ({
      id: subscription.id,
      name: subscription.name,
      subscribed: subscription.subscribed
    }));
  } catch (error) {
    console.error('Error fetching newsletter subscriptions:', error);
  }
};

const updateSubscription = async (newsletter) => {
  try {
    await $magento.customer.updateNewsletterSubscription(newsletter.id, newsletter.subscribed);
  } catch (error) {
    console.error('Error updating subscription:', error);
    newsletter.subscribed = !newsletter.subscribed;
  }
};

const updateSmsNotifications = async () => {
  try {
    await $magento.customer.updateSmsNotifications(smsNotifications.value);
  } catch (error) {
    console.error('Error updating SMS notifications:', error);
  }
};

const updatePushNotifications = async () => {
  try {
    await $magento.customer.updatePushNotifications(pushNotifications.value.enabled);
  } catch (error) {
    console.error('Error updating push notifications:', error);
  }
};

const savePreferences = async () => {
  try {
    await Promise.all([
      updateSmsNotifications(),
      updatePushNotifications()
    ]);
    console.log('Saving communication preferences');
    // Optionally, show a success message
  } catch (error) {
    console.error('Error saving preferences:', error);
    // Handle error (e.g., show an error message to the user)
  }
};

const fetchPreferences = async () => {
  try {
    const preferences = await $magento.customer.getCommunicationPreferences();
    smsNotifications.value = preferences.smsNotifications;
    pushNotifications.value = preferences.pushNotifications;
  } catch (error) {
    console.error('Error fetching preferences:', error);
  }
};

onMounted(() => {
  fetchNewsletterSubscriptions();
  fetchPreferences();
});
</script>