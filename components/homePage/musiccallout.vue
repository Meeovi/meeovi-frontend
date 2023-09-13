<template>
    <div>
        <section v-for="departments in data.collections.items" :key="departments.id" data-bs-version="5.1" class="features19 cid-tAGUZsWaoz mbr-parallax-background" id="features12-62" :style="`background-image: url(${departments.featuredAsset.preview});`">
  
  <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(255, 255, 255);">
  </div>
  <div class="container">
    <h2 class="mbr-section-title align-left mbr-fonts-style mbr-bold display-2">
        <strong>Hottest sounds in Meeovi {{ departments.name }}</strong></h2>
        <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
                    <v-slide-group-item v-for="products in data.collections.items" :key="products.id"
                      v-slot="{ isSelected, toggle }">
                      <a :href="`/product/${products.productVariants.items[0].product.id}`">
                            <v-card class="ma-4" height="380" width="250" @click="toggle">
                                <img class="align-end text-white" height="200" :src="`${products.productVariants.items[0].product.featuredAsset.preview}`" :alt="products.productVariants.items[0].product.name" cover />
  
                                <v-card-title class="pt-4">
                                    {{ products.productVariants.items[0].product.name }}
                                </v-card-title>
  
                                <v-card-text>
                                    <div>Sku: {{ products.productVariants.items[0].product.variants.sku }}</div>
                                </v-card-text>
  
                                <v-card-actions>
                                    <v-card-title>$ {{ products.productVariants.items[0].product.variants.price }}
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
            url: 'http://meeovicms.com:3000'
        }),
    }
  </script>
  
  <script setup>
  const query = gql`
    query {
    collections (options: {topLevelOnly: true, filter: {name: {eq: "Music"}}}){
      items {
        name
        featuredAsset {
          id
          preview
        }
        productVariants {
          items {
            product {
              id
              name
              featuredAsset {
                id
                preview
              }
              variants {
                price
              }
            }
            sku
          }
        }
      }
    }
  }
  `
  const { data } = await useAsyncQuery(query)
  
  /*
  const { getItems } = useDirectusItems()
  
  const products = await getItems({ collection: "products"});
  const departments = await getItems({ collection: "departments", params: {filter: {name: {_eq: "Music"}}}, limit: 6 });*/
  </script>