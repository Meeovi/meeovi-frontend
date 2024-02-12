<template>
  <div>
    <v-row>
      <v-col cols="6"><img class="authImage" src="../../../assets/images/mbr-1900x1069.jpg"
          alt="Password Reset Success Page Image">
      </v-col>
      <v-col cols="6">
        <p class="resetPasswordSuccessPage"></p>
        <v-toolbar class="authSellerBar" color="transparent">
          <v-toolbar-title>Product By: <a href=""></a></v-toolbar-title>
        </v-toolbar>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

useHead({
  title: 'Reset Password Success Page'
})
</script>
