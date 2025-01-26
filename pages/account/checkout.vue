<template>
  <div>
    <h1>Checkout</h1>
    <StripeCheckout />
    <!-- or -->
    <StripeCardElement />
  </div>
</template>

<script setup>
import StripeCheckout from '~/components/commerce/StripeCheckout.vue'
import StripeCardElement from '~/components/commerce/StripeCardElement.vue'

useHead({
  title: 'Checkout',
})
</script>
