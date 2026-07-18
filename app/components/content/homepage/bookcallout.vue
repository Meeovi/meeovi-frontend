<template>
  <div>
    <section data-bs-version="5.1" class="features11 cid-skeBBk03KK mbr-parallax-background" id="features12-3"
      data-sortbtn="btn-primary"
      :style="`background-img: url(${getAssetURL(departmentBook?.image)})`">

      <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(255, 255, 255);">
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-lg">
            <div class="card-wrapper">
              <div class="card-box">
                <h4 class="card-title mbr-fonts-style mb-4 display-2">
                  <strong>{{ departmentBook?.name }}</strong>
                </h4>
                <p class="mbr-text mbr-fonts-style mb-4 display-7" v-dompurify-html="departmentBook?.description"></p>
                <div class="mbr-section-btn mb-4"><a class="btn btn-secondary display-4"
                    :href="toDepartmentPath(departmentBook?.slug)">Visit the Bookstore</a></div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 md-pb">
            <v-sheet class="mx-auto" style="background-color: transparent; box-shadow: none;">
              <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"
                  v-for="products in departmentBook?.products" :key="products">
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
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import { useRoutePath } from '#shared/app/composables/routing/useRoutePath'
  import ProductCard from '#commerce/app/components/catalog/product/productCard.vue'
  import {
    ref
  } from 'vue'

  const model = ref(null)
  const { joinRoutePath } = useRoutePath()
  const toDepartmentPath = (slug) => joinRoutePath('/departments', slug)
  const { $directus, $readItem, $readItems } = useNuxtApp()

  import { getAssetURL } from '#shared/app/utils/get-asset-url'

  const {
    data: departmentBook
  } = await useAsyncData('departmentBook', async () => {
    try {
      const resp = await $directus.request($readItem('departments', '29', {
        fields: [
          '*',
          'products.products_id.*',
          'products.products_id.image.*',
          'image.*'
        ],
      }))
      return resp?.data || resp || {}
    } catch {
      return null
    }
  })
</script>