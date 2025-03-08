<template>
    <div>
      <v-btn color="primary" @click="redirectToCheckout">
        Proceed to Payment
      </v-btn>
    </div>
  </template>
  
  <script setup>
  import { useRuntimeConfig } from '#app';
  import { storeToRefs } from 'pinia';
  import { useCartStore } from '@/stores/cart';
  
  const { cartItems } = storeToRefs(useCartStore());
  
  const redirectToCheckout = async () => {
    const { public: config } = useRuntimeConfig();
  
    const response = await $fetch('/api/commerce/checkout', {
      method: 'POST',
      body: {
        items: cartItems.value.map((item) => ({
          price_data: {
            currency: 'usd',
            product_data: { name: item.name },
            unit_amount: Math.round(item.price * 100),
          },
          quantity: item.quantity,
        })),
        customer_email: 'user@example.com', // Use logged-in user's email
        metadata: {
          magento_cart_id: cartItems.value.map((item) => item.id).join(','),
        },
        successUrl: `${config.baseURL}/checkout/success`,
        cancelUrl: `${config.baseURL}/checkout/cancel`,
      },
    });
  
    if (response.url) {
      window.location.href = response.url;
    } else {
      alert('Payment failed: ' + response.error);
    }
  };
  </script>
  