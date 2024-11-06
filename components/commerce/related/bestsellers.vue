<template>
  <div>
    <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
      <h4>Best Sellers</h4>
      <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }" v-for="(products, index) in bestsellers" :key="index">
          <productCard :product="products" :class="['ma-4', selectedClass]" @click="toggle" />

          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
            </v-scale-transition>
          </div>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script setup>
  import productCard from '~/components/commerce/commerce/product/productCard.vue'
  import { ref } from 'vue'
/*  import {
    useQuery
    } from '@vue/apollo-composable'
  import bestsellers from '~/graphql/commerce/queries/bestsellers'

  const {
    result
    } = useQuery(bestsellers)
    const model = ref(null); */

async function fetchBestsellers() {
  const response = await fetch('/api/commerce/catalog/products/bestsellers/bestsellers')
  if (!response.ok) {
    throw new Error('Failed to fetch bestsellers')
  }
  return response.json()
}

// Use this function in your component
const bestsellers = await fetchBestsellers()
</script>