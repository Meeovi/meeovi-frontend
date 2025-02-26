<template>
  <div>
    <!-- Shopping Cart Button -->
    <v-btn class="shopping-cart" icon="fas fa-shopping-cart" title="Shopping Cart" variant="text" size="small"
      @click.stop="drawer = !drawer">
      <v-icon start icon="fas fa-shopping-cart"></v-icon>
      <v-badge :content="cartQuantity || 0" :value="cartQuantity || 0" color="error" overlap class="cartBadge">
      </v-badge>
    </v-btn>

    <!-- Flyout Menu -->
    <v-navigation-drawer v-model="drawer" location="right" temporary class="cart-flyout" :width="383">
      <div class="cart-items">
        <template v-if="cartItems.length">
          <v-list>
            <v-list-item v-for="item in cartItems" :key="item.id" class="cart-item">
              <v-avatar>
                <img :src="item?.thumbnail" :alt="item?.title" />
              </v-avatar>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>
                Quantity: <v-text-field @click="updateQuantity(item.id)" type="number"
                  label="Quantity">{{ getItemQuantity(item.variant_id) }}</v-text-field>
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                Price: {{ formatCurrency(item?.unit_price) }}
              </v-list-item-subtitle>

              <v-btn icon="fas fa-trash" title="Remove" variant="text" size="small" @click="removeItem(item.id)">
                <v-icon start icon="fas fa-trash"></v-icon>
              </v-btn>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                Subtotal: {{ getSubTotal() }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </template>
        <template v-else>
          <v-alert type="info" class="mt-4">
            No items in the cart.
          </v-alert>
        </template>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
  import {
    addCart
  } from '@/composables/commerce/cart/addToCart';

  const drawer = ref(false);

  const {
    cart,
    cartItems,
    cartQuantity,
    updateQuantity,
    removeItem,
    getCurrentCart,
    getItemQuantity,
  } = addCart()
</script>

<style scoped>
  .cart-flyout {
    width: 300px;
  }

  .cart-items {
    max-height: 400px;
    overflow-y: auto;
  }

  .cart-item img {
    width: 40px;
    height: 40px;
  }
</style>