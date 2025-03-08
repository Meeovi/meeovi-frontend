<template>
  <v-card>
    <v-card-title>Privacy and Data</v-card-title>
    <v-card-text>
      <!--<v-switch
        v-model="dataSharing"
        label="Allow Data Sharing for Personalized Experiences"
        @change="updateDataSharingPreference"
      ></v-switch>-->
      <v-row>
        <v-col><v-btn @click="requestDataReport" class="mb-4">Request Personal Data Report</v-btn></v-col>
        <v-col><v-btn @click="deleteAccount" color="error">Delete Account</v-btn></v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';

const customerStore = useUserStore();

const dataSharing = ref(true);

onMounted(async () => {
  await fetchPrivacySettings();
});

const fetchPrivacySettings = async () => {
  try {
    const settings = await customerStore.getPrivacySettings();
    dataSharing.value = settings.data_sharing_enabled;
  } catch (error) {
    console.error('Error fetching privacy settings:', error);
  }
};

const requestDataReport = async () => {
  try {
    const response = await $fetch('/api/customer/gdpr/delete-customer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any necessary authentication headers
      },
    });
    console.log('Personal data report requested successfully');
    // Handle the response as needed
  } catch (error) {
    console.error('Error requesting personal data report:', error);
  }
};

const deleteAccount = async () => {
  try {
    const response = await $fetch('/api/customers/me', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add any necessary authentication headers
      },
    });
    console.log('Account deletion process initiated');
    // Handle the response, e.g., log out the user and redirect
  } catch (error) {
    console.error('Error initiating account deletion:', error);
  }
};

const updateDataSharingPreference = async () => {
  try {
    const response = await $fetch('/api/customers/me/data-sharing', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Add any necessary authentication headers
      },
      body: JSON.stringify({
        data_sharing_enabled: dataSharing.value
      }),
    });
    console.log('Data sharing preference updated successfully');
    // Handle the response as needed
  } catch (error) {
    console.error('Error updating data sharing preference:', error);
  }
};
</script>

