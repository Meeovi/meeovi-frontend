<template>
  <div>
    <v-row>
      <v-col>
        <SfButton size="sm" @click="addToCart(productVariantId)" :disabled="hasItem(productVariantId)">
          {{ hasItem(productVariantId) ? 'In Cart' : 'Add to Cart' }}
        </SfButton>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue';
  import {
    SfButton,
    SfIconShoppingCart
  } from '@storefront-ui/vue';
  import {
    addCart
  } from '@/composables/commerce/cart/addToCart';

  const {
    addToCart,
    hasItem,
  } = addCart()

  const selectedQuantity = ref(1);

  // Props
  const props = defineProps({
    addCartBtn: {
      type: Object,
      required: true,
    },
  });
</script>