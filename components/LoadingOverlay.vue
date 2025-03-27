<template>
  <v-overlay v-model="loading" class="loading-overlay">
    <v-progress-circular indeterminate />
    <span class="loading-text">{{ loadingText }}</span>
  </v-overlay>
</template>

<script setup>
const { loading, loadingText } = useLoading()
</script>