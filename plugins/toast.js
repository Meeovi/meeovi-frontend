import { createApp } from 'vue'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ToastPlugin)
})
