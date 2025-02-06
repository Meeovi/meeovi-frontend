// composables/useNotifications.js
import { ref, onMounted, onUnmounted } from 'vue'
import io from 'socket.io-client'

export const useNotifications = () => {
  const notifications = ref([])
  const socket = ref(null)

  const initializeSocket = () => {
    socket.value = io(process.env.NUXT_WEBSOCKET_URL)
    
    socket.value.on('notification', (notification) => {
      notifications.value.push({
        id: notification.id,
        timestamp: new Date(),
        status: notification.status || 'unread',
        sender: notification.sender,
        subject: notification.subject,
        message: notification.message,
        collection: notification.collection
      })
    })
  }

  const disconnect = () => {
    if (socket.value) {
      socket.value.disconnect()
    }
  }

  onMounted(() => {
    initializeSocket()
  })

  onUnmounted(() => {
    disconnect()
  })

  return {
    notifications
  }
}
