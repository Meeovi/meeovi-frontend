<template>
  <v-app>
    <v-main>
      <v-container class="fill-height d-flex flex-column align-center justify-center">
        <v-card class="pa-6 text-center" elevation="4" max-width="500">
          <v-card-title class="text-h5 text-error mb-4">
            Oops, something went wrong
          </v-card-title>

          <v-alert type="error" variant="tonal" class="mb-4">
            {{ error.message }}
          </v-alert>

          <v-btn color="primary" href="/">
            Go back home
          </v-btn>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
defineProps({
  error: {
    type: Object,
    required: true
  }
})
</script>