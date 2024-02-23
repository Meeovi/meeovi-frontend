import { defineNuxtPlugin } from 'nuxt3'

export default defineNuxtPlugin(nuxtApp => {
  // Import dayjs
  const dayjs = require('dayjs')
  
  // Create a plugin
  nuxtApp.provide('dateFormatter', {
    format(date, formatString = 'YYYY-MM-DD HH:mm:ss') {
      return dayjs(date).format(formatString)
    }
  })
})