<template>
  <div>
    <v-row>
      <v-col v-for="products in products" :key="products.id" cols="3">
        <a :href="`/product/${products.id}`">
          <v-card class="ma-4" height="380" width="250" @click="toggle">
            <img class="align-end text-white" height="200" :src="`${url}/assets/${products.image}`" :alt="products.name"
              cover />

            <v-card-title class="pt-4">
              {{ products.name }}
            </v-card-title>

            <v-card-text>
              <div>Tags: {{ products.tags }}</div>
              <div>Category: {{ products.categories }}</div>
            </v-card-text>

            <v-card-actions>
              <v-card-title>$ {{ products.price }}</v-card-title>
            </v-card-actions>
          </v-card>
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {

  }
</script>

<script setup>
  const {
    getItems
  } = useDirectusItems()

  const products = await getItems({
    collection: "products"
  });
</script>