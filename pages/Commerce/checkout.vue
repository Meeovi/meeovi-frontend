<template>
  <div class="cartPage">
    <!-- Display a payment form -->
    <div id="checkout">
        <!-- Checkout will insert the payment form here -->
      </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<script setup>
const stripe = stripe(String(runtimeConfig.public.stripePk));

initialize();

// Create a Checkout Session
async function initialize() {
  const fetchClientSecret = async () => {
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  const checkout = await stripe.initEmbeddedCheckout({
    fetchClientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}

  definePageMeta({
    layout: 'nolive',
  });
  
  useHead({
    title: 'Checkout',
  })
</script>