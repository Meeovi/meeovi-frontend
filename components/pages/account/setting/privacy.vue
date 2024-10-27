<template>
  <v-card>
    <v-card-title>Privacy and Data</v-card-title>
    <v-card-text>
      <v-switch
        v-model="dataSharing"
        label="Allow Data Sharing for Personalized Experiences"
      ></v-switch>
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
    await customerStore.requestDataReport();
    console.log('Personal data report requested successfully');
  } catch (error) {
    console.error('Error requesting personal data report:', error);
  }
};

const deleteAccount = async () => {
  try {
    await customerStore.initiateAccountDeletion();
    console.log('Account deletion process initiated');
  } catch (error) {
    console.error('Error initiating account deletion:', error);
  }
};
</script>
