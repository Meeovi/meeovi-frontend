<!-- pages/cart.vue -->
<template>
    <div class="cartPage">
      <h2>Shopping Cart</h2>
      
      <div v-if="cart.items.length === 0" class="empty-cart">
        Your cart is empty
      </div>
      
      <div v-else>
        <div v-for="item in cart.items" :key="item.id" class="cart-item">
          <div class="item-details">
            <h3>{{ item.name }}</h3>
            <p>Price: ${{ item.price }}</p>
            <p>Quantity: {{ item.quantity }}</p>
          </div>
          <v-btn @click="cart.removeItem(item.id)" color="error">
            Remove
          </v-btn>
        </div>
        
        <div class="cart-total">
          <h3>Total: ${{ cart.total }}</h3>
        </div>
        
        <PayPalButtons
          @payment-success="handlePaymentSuccess"
          @payment-error="handlePaymentError"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { useCartStore } from '~/stores/cartStore'
  
  const cart = useCartStore()
  
  const handlePaymentSuccess = (order) => {
    // Handle successful payment
    console.log('Payment successful:', order)
    // You might want to redirect to a success page or show a success message
  }
  
  const handlePaymentError = (error) => {
    // Handle payment error
    console.error('Payment failed:', error)
    // Show error message to user
  }
  </script>
  
  <style scoped>
  .cartPage {
    padding: 20px;
  }
  
  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #eee;
  }
  
  .cart-total {
    margin-top: 20px;
    text-align: right;
  }
  
  .empty-cart {
    text-align: center;
    padding: 50px;
  }
  </style>
  