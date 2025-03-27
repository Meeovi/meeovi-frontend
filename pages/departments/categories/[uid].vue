<template>
  <div class="departmentPage">
    <!--Charts Category-->
    <div v-if="category?.id === 149 && result?.categories?.items[0]?.uid === 'NzM='">
      <charts />
    </div>

    <!--Radio Station Category-->
    <div v-else-if="category?.id === 150 && result?.categories?.items[0]?.uid === 'NzQ='">
      <stations />
    </div>

    <!--Meeovi Eats Category-->
    <div v-else-if="category?.id === 152 && result?.categories?.items[0]?.uid === 'ODg='">
      <eats />
    </div>

    <v-card variant="text" v-else>
      <v-toolbar :style="`background-color: ${categories?.color}; color: ${categories?.colortext}`"
        :title="result?.categories?.items[0]?.name">
        <v-slide-group show-arrows>
          <v-slide-group-item v-slot="{ isSelected, toggle }">
            <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle"
              :href="`/departments/categories/${result?.categories?.items[0]?.uid}`">
              All
            </v-btn>
          </v-slide-group-item>

          <div v-for="categories in result?.categories?.items" :key="categories">
            <v-slide-group-item v-slot="{ isSelected, toggle }" v-for="categories in categories?.children"
              :key="categories">
              <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle"
                :href="`/departments/categories/${categories?.categories_id?.id}`">
                {{ categories?.name }}
              </v-btn>
            </v-slide-group-item>
          </div>
        </v-slide-group>
      </v-toolbar>

      <!--Category Banner Slider-->
      <img v-if="categories?.items[0]?.image" :src="`${result?.categories?.items[0]?.image}`"
        :alt="result?.categories?.items[0]?.name" cover />
    </v-card>

    <v-row>
      <!--List of products in the category-->
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
  import {
    useQuery
  } from '@vue/apollo-composable'
  import {
    CategoryQuery,
    BestsellerQuery,
    LatestProductsQuery,
    EventProductsQuery
  } from '~/graphql/commerce/queries/id/category'
  import charts from '~/components/categories/charts.vue'
  import stations from '~/components/categories/stations.vue'
  import eats from '~/components/categories/eats.vue'

  //import videobar from '~/components/menus/videobar.vue'
  //import latestproducts from '~/components/product/latestproducts.vue'
  //import relatedevents from '~/components/product/relatedevents.vue'
  //import bestsellers from '~/components/product/bestsellers.vue'
  //import relatedcreators from '~/components/customers.vue'
  //import shorts from '~/components/vibez/shorts.vue'
  //import relatedspaces from '~/components/spaces/relatedspaces.vue'
  
  //import realestate from '~/components/categories/realestate.vue'
  //import health from '~/components/categories/health.vue'
  //import pantry from '~/components/categories/pantry.vue'
  //import deals from '~/components/categories/deals.vue'

  const route = useRoute()
  const model = ref(null)
  const {
    $directus,
    $readItem
  } = useNuxtApp()

  // Execute the queries with the UID variable
  const {
    result,
    error: errorData
  } = useQuery(CategoryQuery, {
    uid: route.params.uid
  });

  const {
    result: best,
    error: errorBest
  } = useQuery(BestsellerQuery, {
    uid: route.params.uid
  });

  const {
    result: latest,
    error: errorLatest
  } = useQuery(LatestProductsQuery, {
    uid: route.params.uid
  });

  const {
    result: events,
    error: errorEvents
  } = useQuery(EventProductsQuery, {
    uid: route.params.uid
  });

  const {
    data: callouts
  } = await useAsyncData('callouts', () => {
    return $directus.request($readItem('callouts', '2'))
  })

  if (errorData || errorBest || errorLatest || errorEvents) {
    console.error('GraphQL Error:', errorData || errorBest || errorLatest || errorEvents);
  }

  useHead({
    title: computed(() => result.value?.categories?.items[0]?.name || 'Category Page')
  });
</script>