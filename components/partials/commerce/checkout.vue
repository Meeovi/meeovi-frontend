<template>
  <div class="checkout">
    <h2>Shopping Cart</h2>
    <v-list v-if="cart.length > 0">
      <v-list-item v-for="item in cart" :key="item.id">
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-subtitle>
            Quantity: {{ item.quantity }} | Price: ${{ item.price.toFixed(2) }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click="removeFromCart(item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-alert v-else type="info">Your cart is empty</v-alert>
    <v-divider></v-divider>
    <div class="total">
      <strong>Total: ${{ cartTotal.toFixed(2) }}</strong>
    </div>
    <v-btn color="primary" block @click="proceedToCheckout" :disabled="cart.length === 0">
      Proceed to Checkout
    </v-btn>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCart } from '~/composables/commerce/products/useCart' // Assuming you have this composable

const { cart, removeItemFromCart } = useCart()

const cartTotal = computed(() => {
  return cart.value.reduce((total, item) => total + item.price * item.quantity, 0)
})

const removeFromCart = (item) => {
  removeItemFromCart(item.id)
}

const proceedToCheckout = () => {
  // Implement your checkout logic here
  console.log('Proceeding to checkout')
}
</script>

<style scoped>
.checkout {
  padding: 16px;
}
.total {
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: right;
}
</style>
