<template>
  <div>
    <section data-bs-version="5.1" class="mbr-section features20 cid-txNnCwzel4" id="features20-4t"
      data-sortbtn="btn-primary">
      <div class="container-fluid">
        <h2 class="mbr-section-title align-left mbr-fonts-style display-5">
          Latest Products</h2>
        <div class="underline align-left pb-3">
          <div class="line"></div>
        </div>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" show-arrows>
            <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"
              v-for="(products, index) in latest" :key="index">
              <productCard v-for="(products, index) in products?.items" :key="index" :product="products" :class="['ma-4', selectedClass]" @click="toggle" />

              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
                </v-scale-transition>
              </div>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </section>
  </div>
</template>

<script setup>
  import productCard from '~/components/product/productCard.vue'
  import {
    useQuery
  } from '@vue/apollo-composable'
  import gql from 'graphql-tag'
  import products from '~/graphql/commerce/modified/latestProducts.gql?raw'

  const LATEST_PRODUCTS = gql`${products}`

  // Add error handling and timeout configuration
  const {
    result: latest
  } = useQuery(
    LATEST_PRODUCTS,
    {
      // Add configuration options
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all',
      // Add timeout
      context: {
        fetchOptions: {
          timeout: 30000, // 30 second timeout
        },
      },
      // Add retry logic
      retryCount: 2,
    }
  )

  const model = ref(null);
</script>