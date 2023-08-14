<template>
  <div>
      <section v-for="departments in departments" :key="departments.id" data-bs-version="5.1" class="features19 cid-tAGUZsWaoz mbr-parallax-background" id="features12-62" style="`background-image: url(../../assets/images/books.jpg);`">

<div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(255, 255, 255);">
</div>
<div class="container">
  <h2 class="mbr-section-title align-left mbr-fonts-style mbr-bold display-2">
      <strong>Best Deals in Meeovi {{ departments.name }}</strong></h2>
      <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
        <v-slide-group-item v-for="products in products" :key="products.id"
                      v-slot="{ isSelected, toggle }">
                      <a :href="`/product/${products.id}`">
                          <v-card class="ma-4" height="380" width="250" @click="toggle">
                              <img class="align-end text-white" height="200" :src="`${url}/assets/${products.image}`" :alt="products.name" cover />

                              <v-card-title class="pt-4">
                                  {{ products.name }}
                              </v-card-title>

                              <v-card-text>
                                  <div>Format: {{ products.format }}</div>
                                  <div>Category: {{ products.categories }}</div>
                              </v-card-text>

                              <v-card-actions>
                                  <v-card-title>$ {{ products.price }}
                                  </v-card-title>
                              </v-card-actions>
                              <div class="d-flex fill-height align-center justify-center">
                                  <v-scale-transition>
                                      <v-icon v-if="isSelected" color="white" size="48"
                                          icon="mdi-close-circle-outline"></v-icon>
                                  </v-scale-transition>
                              </div>
                          </v-card>
                      </a>
                  </v-slide-group-item>
              </v-slide-group>
          </div>
      </section>
  </div>
</template>

<script>
  export default {
      data: () => ({
          model: null,
          url: 'http://meeovicms.com:8011'
      }),
  }
</script>

<script setup>
const { getItems } = useDirectusItems()

const products = await getItems({ collection: "products"});
const departments = await getItems({ collection: "departments", params: {filter: {name: {_eq: "Yardsale"}}}, limit: 6 });
</script>