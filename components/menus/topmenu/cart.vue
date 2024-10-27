<template>
    <div>
      <v-btn class="shopping-cart" icon="fas fa-shopping-cart" title="Shopping Cart" variant="text" size="small">
        <v-icon start icon="fas fa-shopping-cart"></v-icon>
        <v-badge :content="cartItemCount" :value="cartItemCount" color="error" overlap class="cartBadge">
          <v-menu activator="parent" style="top: 50px !important; position: relative;">
            <v-list>
              <checkout />
            </v-list>
          </v-menu>
        </v-badge>
      </v-btn>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import checkout from '~/components/partials/checkout.vue'
  import { useCart } from '~/composables/commerce/products/useCart' // Assuming you have this composable
  
  const drawer = ref(false)
  const group = ref(null)
  
  const { cart } = useCart()
  
  const cartItemCount = computed(() => {
    return cart.value.reduce((total, item) => total + item.quantity, 0)
  })
  </script>
  