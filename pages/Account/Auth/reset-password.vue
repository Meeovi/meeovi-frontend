<template>
  <div>
    <v-row>
      <v-col cols="6"><img class="authImage" src="../../../assets/images/mbr-1900x1069.jpg" alt="Reset Password Page Image">
      </v-col>
      <v-col cols="6">
        <v-form class="loginForm">
          <h1><img src="../../../assets/images/logo512alpha-192x192.png" alt="">Meeovi</h1>
          <v-toolbar title="Reset Password"></v-toolbar>
          <v-text-field v-model="password" label="Password" type="password" variant="outlined"></v-text-field>
          <v-text-field v-model="password" label="Confirm Password" type="password" variant="outlined"></v-text-field>
          <v-btn type="submit">Reset your password</v-btn>
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
    title: 'Reset Password'
  })
</script>