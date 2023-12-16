<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="text-h5 text-center">Complete Password Reset</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="completePasswordReset">
              <v-text-field v-model="password" label="New Password" type="password" required></v-text-field>
              <v-text-field v-model="confirmPassword" label="Confirm New Password" type="password" required></v-text-field>
              <v-btn type="submit" color="primary">Reset Password</v-btn>
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
import { useRouter } from 'vue-router';

const password = ref('');
const confirmPassword = ref('');
const apolloClient = useApolloClient();
const router = useRouter();

const completePasswordReset = async () => {
  try {
    // Basic client-side input validation
    if (!validateInput()) {
      console.error('Invalid input');
      return;
    }

    // Send a mutation to complete the password reset process
    const response = await apolloClient.mutate({
      mutation: COMPLETE_PASSWORD_RESET_MUTATION,
      variables: {
        token: router.query.token, // Get the reset token from the URL
        password: password.value,
      },
    });

    // Handle the response (e.g., show a success message)
    console.log('Password reset completed:', response);

    // Redirect the user to the login page or another page
    router.push('/login');
  } catch (error) {
    console.error('Complete password reset failed:', error);
    // Handle the error (e.g., show an error message)
  }
};

const validateInput = () => {
  // Perform client-side input validation/sanitization
  // You may use a library like 'validator' for more advanced validation
  if (!password.value || password.value !== confirmPassword.value) {
    return false;
  }

  return true;
};

// Define your GraphQL mutation for completing the password reset
const COMPLETE_PASSWORD_RESET_MUTATION = `
  mutation CompletePasswordReset($token: String!, $password: String!) {
    completePasswordReset(token: $token, password: $password) {
      success
      message
    }
  }
`;
</script>
