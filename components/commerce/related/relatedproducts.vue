<template>
  <div>
    <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
      <h4>Related Products</h4>
      <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }" v-for="(products, index) in result?.products?.items" :key="index">
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
  import {
    useQuery
    } from '@vue/apollo-composable'
  import products from '~/graphql/commerce/queries/products'

  const model = ref(null);
  const {
    result
    } = useQuery(products)
 /*  import {
        getPage
    } from '@/composables/commerce/content/getPage.js';

    // Pass the specific products name you want to fetch
    const products = ref([]); 

    onMounted(async () => {
        products.value = await getPage(27);
    }); */
</script>