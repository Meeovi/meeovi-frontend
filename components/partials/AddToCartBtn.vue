<template>
  <SfButton size="sm" @click="addToCart(product)">
    <template #prefix>
      <SfIconShoppingCart size="sm" />
    </template>
    Add to cart
  </SfButton>
</template>

<script setup>
import { SfButton, SfIconShoppingCart } from '@storefront-ui/vue';
import { useCartStore } from '~/stores/cartStore'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const cart = useCartStore()

const addToCart = async (product) => {
  try {
    await cart.addItem({
      sku: product.sku,
      name: product.name,
      price: product.price,
      qty: 1
    })
  } catch (error) {
    // Handle error (show notification, etc.)
    console.error('Failed to add item to cart:', error)
  }
}
</script>
