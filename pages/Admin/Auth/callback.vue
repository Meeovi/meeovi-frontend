<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title class="text-h5 text-center">Callback Page</v-card-title>
            <v-card-text>
              <!-- You can add content or loading indicators as needed -->
              <v-progress-circular
                v-if="loading"
                indeterminate
                color="primary"
              ></v-progress-circular>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { onBeforeMount } from 'vue';
  import { useRouter } from 'vue-router';
  import { useApolloClient } from '@vue/apollo-composable';
  
  const router = useRouter();
  const apolloClient = useApolloClient();
  
  const loading = ref(true);
  
  // This function handles the callback logic
  const handleCallback = async () => {
    try {
      // Extract query parameters from the URL
      const { code, state } = router.query;
  
      // You may perform additional checks or validations here
  
      // Perform the necessary GraphQL mutation or other actions
      const response = await apolloClient.mutate({
        mutation: HANDLE_CALLBACK_MUTATION,
        variables: {
          code,
          state,
        },
      });
  
      // Handle the response as needed
      console.log('Callback handled successfully:', response);
  
      // Optionally redirect the user to a specific page
      router.push('/');
    } catch (error) {
      console.error('Callback handling failed:', error);
      // Handle the error (e.g., show an error message)
    } finally {
      // Set loading to false when the callback handling is complete
      loading.value = false;
    }
  };
  
  // Use onBeforeMount to execute the callback handling logic when the component is mounted
  onBeforeMount(handleCallback);
  
  // Define your GraphQL mutation or callback handling logic
  const HANDLE_CALLBACK_MUTATION = `
    mutation HandleCallback($code: String!, $state: String!) {
      handleCallback(code: $code, state: $state) {
        success
        message
      }
    }
  `;
  </script>
  