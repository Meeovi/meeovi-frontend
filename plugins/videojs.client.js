import { defineNuxtPlugin } from '#app'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

// Register video.js globally
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      videojs,
    },
  }
})
