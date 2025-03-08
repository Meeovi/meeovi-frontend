<template>
  <div class="departmentPage">
    <v-card variant="text">
      <v-toolbar :style="`background-color: ${outlet?.color}; color: ${outlet?.colortext}`"
        :title="result?.categories?.items[0]?.name">
        <v-slide-group show-arrows>
          <v-slide-group-item v-slot="{ isSelected, toggle }">
            <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle"
              :href="`/outlets/${result?.categories?.items[0]?.uid}`">
              All
            </v-btn>
          </v-slide-group-item>

          <div v-for="categories in result?.categories?.items" :key="categories">
            <v-slide-group-item v-slot="{ isSelected, toggle }" v-for="categories in categories?.children"
              :key="categories">
              <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle"
                :href="`/departments/categories/${categories?.uid}`">
                {{ categories?.name }}
              </v-btn>
            </v-slide-group-item>
          </div>
        </v-slide-group>
      </v-toolbar>

      <!--Department Banner Slider-->
      <NuxtImg class="departmentBanner" loading="lazy" :src="`${result?.categories?.items[0]?.image}`"
        :alt="result?.categories?.items[0]?.name" cover />
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
      <v-col cols="3" v-for="category in result?.categories?.items" :key="category.uid">
        <div v-for="products in category?.products?.items" :key="products.uid">
          <productCard :product="products" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import productCard from '~/components/product/productCard.vue'
import { useQuery } from '@vue/apollo-composable'
import {
  CategoryQuery,
  BestsellerQuery,
  LatestProductsQuery
} from '~/graphql/commerce/queries/id/department'
import { useOutletData } from '~/composables/commerce/categories/useOutletData'

const route = useRoute()
const model = ref(null)

// Execute the queries with the UID variable
const { results, error: errorData } = useQuery(CategoryQuery, {
  uid: route.params.uid
});

const { result: best, error: errorBest } = useQuery(BestsellerQuery, {
  uid: route.params.uid
});

const { result: latest, error: errorLatest } = useQuery(LatestProductsQuery, {
  uid: route.params.uid
});

// Get outlet data from the composable
const { result, outlet, outlets } = useOutletData()

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
