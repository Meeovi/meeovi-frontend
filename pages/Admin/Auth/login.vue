<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="text-h5 text-center">Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field v-model="username" label="Email" type="text" required></v-text-field>
              <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
              <v-btn type="submit" color="primary">Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {

  }
</script>

<script setup>
import { ref } from 'vue';
import { useApolloClient } from '@vue/apollo-composable';

  useHead({
    title: 'Welcome Back'
  })

const username = ref('');
const password = ref('');

const apolloClient = useApolloClient();
const router = router();

const login = async () => {
  try {
    // Send login mutation to your GraphQL server
    const response = await apolloClient.mutate({
      mutation: LOGIN_MUTATION,
      variables: {
        username: username.value,
        password: password.value,
      },
    });

    // Assuming your server returns a token upon successful login
    const token = response.data.login.token;

    // Save the token to localStorage or Vuex store
    localStorage.setItem('authToken', token);

    // Redirect the user to the previous page or another page
    const from = router.query.from || '/';
    router.push(from);
  } catch (error) {
    console.error('Login failed:', error);
  }
};

// Define your login mutation
const LOGIN_MUTATION = `
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        username
        // Add other user fields as needed
      }
    }
  }
`;
</script>