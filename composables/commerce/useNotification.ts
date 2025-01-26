interface Notification {
  type: 'success' | 'error'
  message: string
}

export const useNotification = () => {
  const notify = (notification: Notification) => {
    // Implement your notification logic here
    console.log(`${notification.type}: ${notification.message}`)
  }

  return {
    notify
  }
}
