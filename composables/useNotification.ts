// composables/useNotification.ts
export const useNotification = () => {
    const show = (options: { type: 'success' | 'error' | 'warning' | 'info', message: string }) => {
      // If you're using Nuxt UI
      const { $notify } = useNuxtApp()
      if ($notify) {
        $notify({
          title: options.type.charAt(0).toUpperCase() + options.type.slice(1),
          text: options.message,
          type: options.type
        })
      } else {
        // Fallback to console
        console.log(`${options.type}: ${options.message}`)
      }
    }
  
    return {
      show
    }
  }
  