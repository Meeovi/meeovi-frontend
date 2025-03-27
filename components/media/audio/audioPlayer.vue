<template>
  <div>
    <!-- The video element -->
    <video ref="videoRef" class="video-js vjs-theme-sea" preload="auto"></video>
  </div>
</template>

<script>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useVideojs } from '~/composables/media/useVideojs'

export default {
  name: 'AudioPlayer',
  props: {
    sources: {
      type: Array,
      required: true,
      // Default video source structure
      default: () => [
        {
          src: '',
          type: 'audio/mp3',
        },
      ],
    },
    plugins: {
      type: Array,
      default: () => [], // Array of Video.js plugins
    },
    options: {
      type: Object,
      default: () => ({}), // Extra Video.js options
    },
  },
  setup(props) {
    const videoRef = ref(null)
    const { initPlayer } = useVideojs()
    let player = null

    // Initialize the player
    const initializePlayer = () => {
      // Merge default options with the passed options
      const playerOptions = {
        autoplay: false,
        controls: false,
        responsive: true,
        loop: true,
        fluid: true,
        sources: props.sources, // Dynamic sources
        ...props.options, // Allow passing extra options
      }

      player = initPlayer(videoRef.value, playerOptions, props.plugins)
    }

    // Watch for changes to sources and update the player
    watch(
      () => props.sources,
      (newSources) => {
        if (player) {
          player.src(newSources) // Update the video source dynamically
        }
      },
      { deep: true }
    )

    onMounted(() => {
      initializePlayer()
    })

    onBeforeUnmount(() => {
      if (player) {
        player.dispose() // Clean up the player
      }
    })

    return { videoRef }
  },
}
</script>