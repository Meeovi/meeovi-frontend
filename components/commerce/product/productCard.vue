<template>
  <div>
    <v-row class="productCard">
      <v-col v-for="(products, index) in products" :key="index">
        <v-card class="mx-auto" max-width="350" :href="`/product/${products?.id}`">
          <img class="align-end text-white" style="height: 250px;" :src="`${products?.images[0]?.src}`" :alt="products?.name" cover />

          <v-card-title>{{products?.name}}</v-card-title>
          <v-card-subtitle class="pt-4">
            Sku: {{ products?.sku }}
          </v-card-subtitle>

          <v-card-subtitle class="pt-4" v-for="categories in products?.nodes?.productCategories?.nodes" :key="categories">
            Category: {{ categories?.name }}
          </v-card-subtitle>

          <v-card-text>
            <div>
              <v-rating v-model="rating" active-color="yellow-accent-4" color="orange" :size="products?.average_rating" half-increments>
              </v-rating>
            </div>

            <p>{{ currency }} {{ products?.price }}</p>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange">
              Add to Cart
            </v-btn>

            <v-btn color="orange">
              Buy Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
      url: process.env.DIRECTUS_URL,
      rating: null,
    }),
  }
</script>
<script setup>
  import {
    ref,
    onMounted
  } from 'vue';
  import {
    getCurrencySettings
  } from '~/composables/getCurrencySettings';
  import {
    getProducts
  } from '~/composables/getProducts';

  const products = ref([]);
  const currency = ref('');

  onMounted(async () => {
    products.value = await getProducts();
    const currencySettings = await getCurrencySettings();
    currency.value = currencySettings.currency;
  });

/*  const {
    getItems
  } = useDirectusItems()
  const route = useRoute();

  const products = await getItems({
    collection: "products",
  }); */
</script>