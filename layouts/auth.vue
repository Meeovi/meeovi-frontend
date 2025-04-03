<template>
  <div>
    <NuxtPwaManifest />
    <slot />
    <pwaDialog />
  </div>
</template>

<script setup>
import pwaDialog from '~/components/ui/pwaDialog.vue'
</script>