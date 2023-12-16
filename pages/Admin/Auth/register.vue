<!-- pages/register.vue -->
<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="text-h5 text-center">Register</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="register">
              <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
              <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
              <v-text-field v-model="confirmPassword" label="Confirm Password" type="password" required></v-text-field>
              <v-btn type="submit" color="primary">Register</v-btn>
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

const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const apolloClient = useApolloClient();
const router = useRouter();

const register = async () => {
  try {
    // Basic client-side input validation
    if (!validateInput()) {
      console.error('Invalid input');
      return;
    }

    // Send registration mutation to your GraphQL server
    const response = await apolloClient.mutate({
      mutation: REGISTER_MUTATION,
      variables: {
        input: {
          email: email.value,
          password: password.value,
        },
      },
    });

    // Assuming your server returns a token upon successful registration
    const token = response.data.register.token;

    // Save the token to localStorage or Vuex store
    localStorage.setItem('authToken', token);

    // Redirect the user to the home page or another page
    router.push('/');
  } catch (error) {
    console.error('Registration failed:', error);
  }
};

const validateInput = () => {
  // Perform client-side input validation/sanitization
  // You may use a library like 'validator' for more advanced validation
  if (!email.value || !password.value || password.value !== confirmPassword.value) {
    return false;
  }

  return true;
};

// Define your registration mutation
const REGISTER_MUTATION = `
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      token
    }
  }
`;
</script>

<style scoped>
  /* Add your custom styles here */
</style>
