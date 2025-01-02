<template>
  <div class="departmentPage">
    <v-card variant="text">
      <v-toolbar :style="`background-color: ${outlet?.color}; color: ${outlet?.colortext}`" :title="outlet?.name">
          <v-slide-group show-arrows>
            <v-slide-group-item v-slot="{ isSelected, toggle }">
              <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle"
                :href="`/outlets/${outlet?.id}`">
                All
              </v-btn>
            </v-slide-group-item>

            <div v-for="categories in outlet?.categories" :key="categories?.categories_id?.id">
              <v-slide-group-item v-slot="{ isSelected, toggle }">
                <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle"
                  :href="`/departments/categories/${categories?.categories_id?.id}`">
                  {{ categories?.categories_id?.name }}
                </v-btn>
              </v-slide-group-item>
            </div>
          </v-slide-group>
      </v-toolbar>

      <!--Department Banner Slider-->
      <NuxtImg loading="lazy" :src="`${outlet?.image?.filename_disk}`" :alt="outlet?.name" cover />
    </v-card>

    <v-row class="departmentRow">
      <!--Best Seller Product Slider-->
      <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
        <h4>{{ outlet?.callouts[0]?.name }}</h4>
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <div v-for="category in best?.products?.items" :key="category">
            <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"
              v-for="products in category?.products?.items" :key="products">
              <productCard :product="products" :class="['ma-4', selectedClass]" @click="toggle" />
              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
                </v-scale-transition>
              </div>
            </v-slide-group-item>
          </div>
        </v-slide-group>
      </v-sheet>

      <!--List of latest products in the department-->
      <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
        <h4>{{ outlet?.callouts[1]?.name }}</h4>
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <div v-for="category in latest?.products?.items" :key="category">
            <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"
              v-for="products in category?.products?.items" :key="products">
              <productCard :product="products" :class="['ma-4', selectedClass]" @click="toggle" />
              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
                </v-scale-transition>
              </div>
            </v-slide-group-item>
          </div>
        </v-slide-group>
      </v-sheet>

      <!--List of products in the department-->
      <v-col cols="3" v-for="category in result?.categories?.items" :key="category.id">
        <div v-for="products in category?.products?.items" :key="products.id">
          <productCard :product="products" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  import productCard from '~/components/commerce/commerce/product/productCard.vue'
  import {
    useQuery
  } from '@vue/apollo-composable'
  import {
    CategoryQuery,
    BestsellerQuery,
    LatestProductsQuery
  } from '~/graphql/commerce/queries/id/department'

  const model = ref(null)

  // Retrieve the route and extract the UID
  const route = useRoute();
  const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    data: outlet
  } = await useAsyncData('outlet', () => {
    return $directus.request($readItem('outlets', route.params.id, {
      fields: ['*', {
        '*': ['*']
      }]
    }))
  })

  // Execute the queries with the UID variable
  const {
    result,
    error: errorData
  } = useQuery(CategoryQuery, {
    id: route.params.id
  });
  const {
    result: best,
    error: errorBest
  } = useQuery(BestsellerQuery, {
    id: route.params.id
  });
  const {
    result: latest,
    error: errorLatest
  } = useQuery(LatestProductsQuery, {
    id: route.params.id
  });

  if (errorData || errorBest || errorLatest) {
    console.error('GraphQL Error:', errorData || errorBest || errorLatest);
  }

  definePageMeta({
    layout: 'nolive',
  });

  useHead({
    title: computed(() => result.value?.categories?.items[0]?.name || 'Outlet Page')
  });
</script>