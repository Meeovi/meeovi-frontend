<template>
  <div>
    <section data-bs-version="5.1" class="mbr-section features20 cid-txNnCwzel4" id="features20-4t"
      data-sortbtn="btn-primary">
      <div class="container-fluid">
        <h2 class="mbr-section-title align-left mbr-fonts-style display-5">
          Exclusives</h2>
        <div class="underline align-left pb-3">
          <div class="line"></div>
        </div>
        <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"
              v-for="(products, index) in exclusives?.products" :key="index">
              <productCard :product="products?.products_id" :class="['ma-4', selectedClass]" @click="toggle" />

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
  
  const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    data: exclusives
  } = await useAsyncData('exclusives', () => {
    return $directus.request($readItem('departments', route.params.slug, {
      fields: ['*', {
        '*': ['*']
      }],
      limit: 10,
      filter: {
        products: {
          products_id: {
            departments: {
              departments_id: {
                name: {
                  _eq: "Exclusives"
                }
              }
            }
          }
        }
      }
    }))
  })
</script>