<template>
  <div>
    <section data-bs-version="5.1" class="mbr-section features20 cid-txNnCwzel4" id="features20-4t"
      data-sortbtn="btn-primary">
      <div class="container-fluid">
        <h2 class="mbr-section-title align-left mbr-fonts-style display-5">
          Deals</h2>
        <div class="underline align-left pb-3">
          <div class="line"></div>
        </div>
    <v-sheet class="mx-auto">
      <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"
          v-for="(products, index) in result?.products?.items" :key="index">
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
    </section>
  </div>
</template>

<script setup>
  import productCard from '~/components/product/productCard.vue'
  import {
    ref
  } from 'vue'
  import {
    useQuery
  } from '@vue/apollo-composable'
  import {
    deals
  } from '~/graphql/commerce/queries/deals'

  const model = ref(null);
  const {
    result
  } = useQuery(deals)

  /*  import {
         getDeals
     } from '@/composables/commerce/products/deals.js';

     // Pass the specific products name you want to fetch
     const products = ref([]); 

     onMounted(async () => {
         products.value = await getDeals();
     });

  import productCard from '~/components/product/productCard.vue'
   //import { deals } from '~/graphql/commerce/queries/deals'



   const {
     data
   } = useAsyncQuery(deals); */
</script>