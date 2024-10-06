import { defineNuxtPlugin } from '#app'
import io from 'socket.io-client'

export default defineNuxtPlugin((nuxtApp) => {
  const socket = io(process.env.SOCKET_URL || 'http://localhost:3011')

  return {
    provide: {
      io: socket
    }
  }
})
