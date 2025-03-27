<template>
  <div>
    <form id="payment-form">
      <div id="payment-element">
        <!-- Stripe Elements will inject the payment form here -->
      </div>
      <button id="submit" :disabled="isLoading">
        <span v-if="isLoading">Processing...</span>
        <span v-else>Pay now</span>
      </button>
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
    </form>
  </div>
</template>

<script setup>
const { $stripe } = useNuxtApp()
const elements = ref(null)
const isLoading = ref(false)
const errorMessage = ref('')

// Initialize payment element
onMounted(async () => {
  // Get clientSecret from your server
  const response = await fetch('/api/payment/create-payment-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      amount: 1000, // Amount in cents
      currency: 'usd'
    })
  })
  const { clientSecret } = await response.json()

  elements.value = $stripe.elements({
    clientSecret,
    appearance: {
      theme: 'stripe'
    }
  })

  const paymentElement = elements.value.create('payment')
  paymentElement.mount('#payment-element')
})

// Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault()
  
  if (!elements.value) {
    return
  }

  isLoading.value = true

  try {
    const { error } = await $stripe.confirmPayment({
      elements: elements.value,
      confirmParams: {
        return_url: `${window.location.origin}/payment-completion`,
      }
    })

    if (error) {
      errorMessage.value = error.message
    }
  } catch (e) {
    errorMessage.value = 'An unexpected error occurred.'
  }

  isLoading.value = false
}
</script>

<style scoped>
form {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

#payment-element {
  margin-bottom: 24px;
}

button {
  background: #5469d4;
  color: #ffffff;
  border-radius: 4px;
  border: 0;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: block;
  width: 100%;
  transition: all 0.2s ease;
}

button:hover {
  filter: brightness(1.1);
}

button:disabled {
  opacity: 0.5;
  cursor: default;
}

.error-message {
  color: rgb(205, 53, 53);
  margin-top: 12px;
  text-align: center;
}
</style>
