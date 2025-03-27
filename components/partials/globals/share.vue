<template>
  <v-btn class="shareBtn" :disabled="!isSupported" @click="startShare" variant="text" prepend-icon="fas fa-share-nodes" size="medium" title="Share This">
    {{ isSupported ? 'Share' : 'Web share is not supported in your browser' }}
  </v-btn>
</template>

<script setup lang="ts">
import { useShare } from '@vueuse/core'

const { share, isSupported } = useShare()

async function startShare() {
  try {
    await share({
      title: 'Meeovi',
      text: '',
      url: window.location.href,
      // Optional: you can also share files
      // files: [...files]
    })
  } catch (err) {
    console.error('Error sharing:', err)
  }
}
</script>