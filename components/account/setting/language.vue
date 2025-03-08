<template>
  <v-card>
    <v-card-title>Language and Localization</v-card-title>
    <v-card-text>
      <v-select
        v-model="selectedLanguage"
        :items="languages"
        label="Preferred Language"
        item-title="label"
        item-value="value"
        :loading="loading"
      ></v-select>
      <v-btn @click="saveLanguagePreference" color="primary" :loading="saving">
        Save Language Preference
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRuntimeConfig } from '#app';

const config = useRuntimeConfig();
const baseUrl = config.public.commerceUrl; // Magento API base URL

const selectedLanguage = ref('');
const languages = ref([]);
const loading = ref(false);
const saving = ref(false);

// Fetch available languages
const fetchLanguages = async () => {
  loading.value = true;
  try {
    const response = await $fetch(`/api/store/storeConfigs`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      },
    });
    
    // Check if response is an array, if not, wrap it in an array
    const storeConfigs = Array.isArray(response) ? response : [response];
    
    languages.value = storeConfigs.map(store => ({
      label: store.locale,
      value: store.code
    }));

    // Set default selected language if available
    if (languages.value.length > 0) {
      selectedLanguage.value = languages.value[0].value;
    }
  } catch (error) {
    console.error('Error fetching languages:', error);
    // You might want to add user-friendly error handling here
  } finally {
    loading.value = false;
  }
};

// Save language preference
const saveLanguagePreference = async () => {
  if (!selectedLanguage.value) return;

  saving.value = true;
  try {
    await $fetch(`/api/customers/me`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('customerToken')}`,
      },
      body: {
        customer: {
          store_id: selectedLanguage.value,
        },
      },
    });
    console.log('Language preference saved successfully');
    // You might want to add a success message here
  } catch (error) {
    console.error('Error saving language preference:', error);
    // You might want to add an error message here
  } finally {
    saving.value = false;
  }
};

onMounted(() => {
  fetchLanguages();
});
</script>
