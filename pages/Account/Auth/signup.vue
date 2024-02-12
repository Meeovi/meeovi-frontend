<template>
  <div>
    <v-row>
      <v-col cols="6"><img class="authImage" src="../../../assets/images/mbr-1900x1069.jpg" alt="Register Page Image">
      </v-col>
      <v-col cols="6">
        <v-form class="registerForm">
          <h1><img src="../../../assets/images/logo512alpha-192x192.png" alt="">Meeovi</h1>
          <v-toolbar title="Welcome to Meeovi"></v-toolbar>
          <v-text-field v-model="username" label="Username" variant="outlined" required></v-text-field>
          <v-text-field v-model="email" label="Email" type="email" variant="outlined" required></v-text-field>
          <v-text-field v-model="firstName" label="First Name" variant="outlined" required></v-text-field>
          <v-text-field v-model="lastName" label="Last Name" variant="outlined"></v-text-field>
          <v-text-field v-model="password" label="Password" type="password" variant="outlined" required></v-text-field>
          <v-checkbox v-model="termsAgree" label="By registering you agree to our Terms and Conditions"></v-checkbox>
          <v-btn type="submit">Register</v-btn>
        </v-form>
        <v-toolbar class="authSellerBar" color="transparent">
          <v-toolbar-title>Product By: <a href=""></a></v-toolbar-title>
        </v-toolbar>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {

  }
</script>

<script setup>
  definePageMeta({
    layout: false,
  });

  useHead({
    title: 'Welcome to Meeovi'
  })
</script>