<template>
  <button class="btn btn-info display-7" @click="handleCompare" :disabled="isInCompare">
    <span class="mobi-mbri mobi-mbri-left-right mbr-iconfont mbr-iconfont-btn"></span>
    Add to Compare
  </button>
</template>

<script setup lang="ts">
  import {
    SfButton,
    SfIconCompareArrows
  } from '@storefront-ui/vue';
  import {
    computed
  } from 'vue'
  import {
    useCompareStore
  } from '~/stores/compare'
  import type {
    ProductData
  } from '~/types/product'

  // Define proper props with type
  const props = defineProps < {
    product: ProductData;
  } > ()

  const compareStore = useCompareStore()

  // Add computed property to check if product is already in compare
  const isInCompare = computed(() => {
    return compareStore.items.some(item => item.sku === props.product.sku)
  })

  // Add computed property for button text
  const buttonText = computed(() => {
    return isInCompare.value ? 'In Compare List' : 'Add to Compare'
  })

  // Improve handle compare function
  const handleCompare = () => {
    try {
      if (!props.product) {
        throw new Error('Product data is required')
      }

      if (isInCompare.value) {
        compareStore.removeFromCompare(props.product.sku)
      } else {
        compareStore.addToCompare(props.product)
      }
    } catch (error) {
      console.error('Error handling compare:', error)
    }
  }
</script>