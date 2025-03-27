// plugins/stripe.js
import { loadStripe } from '@stripe/stripe-js'

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig()
  const stripe = await loadStripe(config.public.stripePublishableKey)
  
  return {
    provide: {
      stripe
    }
  }
})
