<template>
  <SfButton size="sm" variant="tertiary" @click="handleCompare" :disabled="isInCompare">
    <template #prefix>
      <SfIconCompareArrows size="sm" />
    </template>
    {{ buttonText }}
  </SfButton>
</template>

<script setup lang="ts">
  import {
    computed
  } from 'vue';
  import {
    useCompareStore
  } from '~/stores/compare'; // Corrected store import
  import type {
    Product
  } from '~/types/product'; // Import the correct Product type

  // Define props
  const props = defineProps < {
    product: Product;
  } > ();

  const compareStore = useCompareStore();

  // Check if the product is already in compare list
  const isInCompare = computed(() => {
    return compareStore.getComparedProducts.some(product => product.sku === props.product?.sku);
  });

  // Dynamically update button text
  const buttonText = computed(() => (isInCompare.value ? 'In Compare List' : 'Add to Compare'));

  // Handle Add/Remove from Compare list
  const handleCompare = () => {
    try {
      if (!props.product) {
        throw new Error('Product data is required');
      }

      if (isInCompare.value) {
        compareStore.removeComparedProduct(props.product?.sku);
      } else {
        compareStore.addComparedProductSku(props.product?.sku);
      }
    } catch (error) {
      console.error('Error handling compare:', error);
    }
  };
</script>