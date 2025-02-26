import Medusa from "@medusajs/js-sdk"
import { useRuntimeConfig } from '#app'

  const config = useRuntimeConfig()
  
  export const medusa = new Medusa({
    baseUrl: config.public.medusaBackendUrl || "http://localhost:9000",
    maxRetries: 3,
    debug: process.env.NODE_ENV === "development",
    publishableKey: config.public.medusaPublishableKey,
  })
