<template>
  <div class="departmentPage">
    <!--Charts Category-->
    <div v-if="category?.id === 149 && category?.name === 'Charts'">
      <charts />
    </div>

    <!--Radio Station Category-->
    <div v-else-if="category?.id === 150 && category?.name === 'Radio'">
      <stations />
    </div>

    <!--Meeovi Eats Category-->
    <div v-else-if="category?.id === 152 && category?.name === 'Eats'">
      <eats />
    </div>

    <v-card variant="text" v-else>
      <v-toolbar :style="`background-color: ${category?.color}; color: ${category?.colortext}`"
        :title="category?.name">
        <v-slide-group show-arrows>
          <v-slide-group-item v-slot="{ isSelected, toggle }">
            <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle"
              :href="`/departments/categories/${category?.id}`">
              All
            </v-btn>
          </v-slide-group-item>

          <div v-for="categories in category?.category_children" :key="categories">
            <v-slide-group-item v-slot="{ isSelected, toggle }">
              <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle"
                :href="`/departments/categories/${categories?.id}`">
                {{ categories?.name }}
              </v-btn>
            </v-slide-group-item>
          </div>
        </v-slide-group>
      </v-toolbar>

      <!--Category Banner Slider-->
      <img v-if="category?.image" :src="`${category?.image}`"
        :alt="category?.name" cover />
    </v-card>

    <v-row>
      <!--List of products in the category-->
      <v-col cols="3" v-for="products in products" :key="products.id">
        <div>
          <productCard :product="products" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  import productCard from '~/components/commerce/product/productCard.vue'

  import charts from '~/components/appearance/charts.vue'
  import stations from '~/components/appearance/stations.vue'
  import eats from '~/components/appearance/eats.vue'
  
  //import realestate from '~/components/appearance/realestate.vue'
  //import health from '~/components/appearance/health.vue'
  //import pantry from '~/components/appearance/pantry.vue'
  //import deals from '~/components/appearance/deals.vue'
  import {
    useCategory
  } from '@/composables/commerce/categories/useCategories';  

  const route = useRoute()
  const model = ref(null)
  const {
      $directus,
      $readItem
    } = useNuxtApp()

  const { category, eventProducts, appProducts, loading, error } = useCategory(route.params.id);

  const { products } = useCategoryProducts(route.params.id);

  const {
    data: callouts
  } = await useAsyncData('callouts', () => {
    return $directus.request($readItem('callouts', '2'))
  })

  useHead({
    title: computed(() => category.value?.name || 'Category Page')
  });
</script>