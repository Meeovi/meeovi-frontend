<template>
  <div class="accountPage" v-if="brand">
    <v-card color="#1F7087" class="ma-4" elevation="0">
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="text-h5">
            {{ brand.name }}
          </v-card-title>
          <v-card-subtitle>{{ brand.description }}</v-card-subtitle>
          <v-card-subtitle>{{ brand.code }}</v-card-subtitle>
        </div>
        <v-avatar class="ma-3" rounded="0" size="125">
          <NuxtImg loading="lazy" :src="`${brand.image?.filename_disk}`" :alt="brand.name" />
        </v-avatar>
      </div>
    </v-card>

    <!--Brand Products-->
    <v-row>
      <v-col cols="3" v-for="brand in brand?.shorts" :key="brand.id">
        <shorts :short="brand?.shorts_id" />
      </v-col>
    </v-row>

    <!--Brand Products-->
    <v-row>
      <v-col cols="3" v-for="brand in brand?.products" :key="brand.id">
        <productCard :product="brand?.products_id" />
      </v-col>
    </v-row>
  </div>
  <div v-else>
    Loading brand...
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import shorts from '~/components/cms/related/shorts.vue'
import productCard from '~/components/commerce/commerce/product/productCard.vue'
import { useRuntimeConfig } from 'nuxt/app';

const config = useRuntimeConfig();
const route = useRoute();
const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    data: brand
  } = await useAsyncData('brand', () => {
    return $directus.request($readItem('brands', route.params.id, {
      fields: ['*', {
        '*': ['*']
      }]
    }))
  })

definePageMeta({
  layout: 'nolive',
});

useHead({
  title: computed(() => brand.value?.name || 'Brand Page')
})
</script>
