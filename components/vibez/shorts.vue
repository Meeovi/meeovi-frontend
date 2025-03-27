<template>
  <v-card class="mx-auto" max-width="400">
    <video loading="lazy" id="my-video" class="video-js" controls preload="auto"
      style="width: 100% !important; height: 50% !important;" loop>
      <source :src="`${$directus.url}assets/${short?.video?.filename_disk}`" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <v-card-subtitle class="pt-4">
      {{ short?.name }}
    </v-card-subtitle>

    <v-card-text>
      <div>Type: {{ short?.type }}</div>

      <div>{{ short?.description }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text="View" :href="`/social/vibe/${short?.id}`"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import videojs from 'video.js'

const model = ref(null)
const player = ref(null)

const props = defineProps({
  short: {
    type: Object,
    required: true,
  },
})
const { short } = props

onMounted(() => {
  player.value = videojs('my-video', {
    controls: true,
    autoplay: false,
    preload: 'auto',
    fluid: true
  })
})

// Clean up on component unmount
onUnmounted(() => {
  if (player.value) {
    player.value.dispose()
  }
})
</script>

<style scoped>
.video-js {
  width: 100%;
  height: 300px;
  position: relative;
  display: block;
}
</style>
