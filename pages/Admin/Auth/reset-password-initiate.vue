<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="text-h5 text-center">Initiate Password Reset</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="initiatePasswordReset">
              <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
              <v-btn type="submit" color="primary">Send Reset Email</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useApolloClient } from '@vue/apollo-composable';

const email = ref('');
const apolloClient = useApolloClient();

const initiatePasswordReset = async () => {
  try {
    // Send a mutation to initiate the password reset process
    const response = await apolloClient.mutate({
      mutation: INITIATE_PASSWORD_RESET_MUTATION,
      variables: { email: email.value },
    });

    // Handle the response (e.g., show a success message)
    console.log('Password reset initiated:', response);
  } catch (error) {
    console.error('Initiate password reset failed:', error);
    // Handle the error (e.g., show an error message)
  }
};

// Define your GraphQL mutation for initiating the password reset
const INITIATE_PASSWORD_RESET_MUTATION = `
  mutation InitiatePasswordReset($email: String!) {
    initiatePasswordReset(email: $email) {
      success
      message
    }
  }
`;
</script>
