<template>
  <div>
    <v-row>
      <v-col cols="6"><img class="authImage" src="../../../assets/images/mbr-1900x1069.jpg"
          alt="Forgot Password Page Image">
      </v-col>
      <v-col cols="6">
        <v-form class="forgotPasswordForm">
          <h1><img src="../../../assets/images/logo512alpha-192x192.png" alt="">Meeovi</h1>
          <v-toolbar title="Forgot Password"></v-toolbar>
          <v-text-field v-model="email" label="Enter your Email" type="email" variant="outlined"></v-text-field>
          <v-btn type="submit">Request for Password Reset</v-btn>
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
    title: 'Forgot Password'
  })
</script>