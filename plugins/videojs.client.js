import { defineNuxtPlugin } from '#app'
import videojs from 'video.js'
import '@videojs/themes/dist/sea/index.css';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      videojs
    }
  }
})
