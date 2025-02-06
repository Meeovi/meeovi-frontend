// plugins/socket.client.js
import io from 'socket.io-client'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  
  const socket = io(config.public.websocketUrl)
  
  return {
    provide: {
      socket
    }
  }
})
