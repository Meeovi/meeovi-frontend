<template>
  <div>
    <h1>Checkout</h1>
    <StripeCheckout />
    <!-- or -->
    <StripeCardElement />
  </div>
</template>

<script setup>
import StripeCheckout from '~/components/commerce/commerce/StripeCheckout.vue'
import StripeCardElement from '~/components/commerce/commerce/StripeCardElement.vue'

useHead({
  title: 'Checkout',
})
</script>
