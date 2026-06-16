/**
 * Initialize and provide the gateway to all components via nuxtApp.$gateway
 */
export default defineNuxtPlugin((nuxtApp) => {
  // Import the useGateway composable to initialize the gateway
  const gateway = useGateway()

  // Attach to nuxtApp so it's available globally
  nuxtApp.$gateway = gateway

  return {
    provide: {
      gateway,
    },
  }
})
