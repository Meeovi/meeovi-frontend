<template>
  <div class="accountPage" v-if="brand">
    <v-card color="#1F7087" class="ma-4" elevation="0">
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="text-h5">
            {{ brand.title }}
          </v-card-title>
          <v-card-subtitle>{{ brand.description }}</v-card-subtitle>
        </div>
        <v-avatar class="ma-3" rounded="0" size="125">
          <nuxt-img loading="lazy" :src="`${config.public.commerceUrl}/media/${brand.image}`" :alt="brand.title" />
        </v-avatar>
      </div>
    </v-card>

    <v-row>
      <v-col cols="3" v-for="brandProduct in brand.mgtn_sparsh_brand_products" :key="brandProduct.brand_product_id">
        <productCard :product="brandProduct.mgtn_catalog_product_entity" />
      </v-col>
    </v-row>
  </div>
  <div v-else>
    Loading brand...
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import productCard from '~/components/commerce/commerce/product/productCard.vue'
import { useRuntimeConfig } from 'nuxt/app';

const config = useRuntimeConfig();
const route = useRoute();
const brand = ref(null)

const fetchBrand = async () => {
  try {
    const id = route.params.id
    const response = await $fetch(`/api/commerce/catalog/brands/${id}`)
    brand.value = response
  } catch (error) {
    console.error('Error fetching brand:', error)
  }
}

onMounted(() => {
  fetchBrand()
})

definePageMeta({
  layout: 'nolive',
});

useHead({
  title: computed(() => brand.value?.title || 'Brand Page')
})
</script>
