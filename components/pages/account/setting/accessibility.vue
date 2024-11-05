<template>
  <v-card>
    <v-card-title>Accessibility Settings</v-card-title>
    <v-card-text>
      <v-switch
        v-model="highContrast"
        label="High Contrast Mode"
      ></v-switch>
      <v-slider
        v-model="fontSize"
        label="Font Size"
        min="12"
        max="24"
        step="2"
        thumb-label
      ></v-slider>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { useAccessibilitySettings } from '~/composables/cms/settings/useAccessibilitySettings'

const { highContrast, fontSize } = useAccessibilitySettings()
</script>

<style>
/* Add these styles to your global CSS */
body {
  transition: background-color 0.3s, color 0.3s;
}

body.high-contrast {
  background-color: #000;
  color: #fff;
}

body.high-contrast a {
  color: #ffff00;
}

/* Adjust Vuetify components for high contrast mode */
body.high-contrast .v-card {
  background-color: #333;
  color: #fff;
}

body.high-contrast .v-switch__track {
  background-color: #666 !important;
}

body.high-contrast .v-switch__thumb {
  background-color: #fff !important;
}

/* Add more high-contrast styles for other components as needed */
</style>
