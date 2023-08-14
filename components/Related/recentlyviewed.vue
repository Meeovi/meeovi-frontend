<template>
    <v-sheet class="mx-auto sliderProducts">
        <h4>Recently Viewed</h4>
        <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="products in products" :key="products.id"
                v-slot="{ isSelected, toggle }">
                <a :href="`/product/${products.id}`">
                    <v-card class="ma-4" height="380" width="250" @click="toggle">
                        <img class="align-end text-white" height="200" :src="`${url}/assets/${products.image}`" :alt="products.name" cover>

                              <v-card-title class="pt-4">
                                  {{ products.name }}
                              </v-card-title>

                              <v-card-text>
                                  <div>Tags: {{ products.tags }}</div>
                                  <div>Category: {{ products.categories }}</div>
                              </v-card-text>

                              <v-card-actions>
                                  <v-card-title>$ {{ products.price }}
                                  </v-card-title>
                              </v-card-actions>
                        <div class="d-flex fill-height align-center justify-center">
                            <v-scale-transition>
                                <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline">
                                </v-icon>
                            </v-scale-transition>
                        </div>
                    </v-card>
                </a>
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
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

const products = await getItems({ collection: "products", params: {filter: {tags: {_eq: "Recentlyviewed"}}}, limit: 6 });
</script>