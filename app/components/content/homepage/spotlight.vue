<template>
  <div>
    <section data-bs-version="5.1" class="features19 cid-tAGUZsWaoz mbr-parallax-background" id="features12-62">
      <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(255, 255, 255);">
      </div>
      <div class="container">
        <h2 class="mbr-section-title align-left mbr-fonts-style mbr-bold display-2">Spotlight</h2>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" show-arrows>
            <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"
              v-for="(products, index) in spotlightProducts" :key="index">
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

<script setup lang="ts">
  import {
    ref
  } from 'vue'
  import productCard from '#commerce/app/catalog/product/productCard.vue'

  const model = ref(null)
  const { $directus, $readItem, $readItems } = useNuxtApp()

  const {
    data: spotlightProducts
  } = await useAsyncData('spotlightProducts', async () => {
    try {
      const resp = await $directus.request($readItems('products', {
        fields: ['*',
          'products.products_id.*',
          'products.products_id.image.*',
          'currency.currency_id.*',
          'brands.brands_id.*',
          'image.*',
        ],
        limit: 10,
        filter: {
          collections: {
            collections_id: {
              name: {
                _eq: "Spotlight"
              }
            }
          }
        }
      }))
      return resp?.data || resp || []
    } catch {
      return null
    }
  })
</script>