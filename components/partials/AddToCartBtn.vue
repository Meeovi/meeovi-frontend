<template>
  <SfButton size="sm" @click="addToCart">
    <template #prefix>
      <SfIconShoppingCart size="sm" />
    </template>
    Add to cart
  </SfButton>
</template>

<script setup>
import { SfButton, SfIconShoppingCart } from '@storefront-ui/vue';
import { useCart } from '~/composables/commerce/products/useCart'; // Assume you have a cart composable

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const { addItemToCart } = useCart();

const addToCart = () => {
  addItemToCart({
    id: props.product.id,
    sku: props.product.sku,
    name: props.product.name,
    price: props.product.price_range.minimum_price.regular_price.value,
    quantity: 1
  });
};
</script>
