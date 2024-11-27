<template>
  <div class="departmentPage">
    <v-card variant="text">
      <v-sheet class="mx-auto">
        <v-slide-group show-arrows>
          <h5 style="padding: 15px">Meeovi {{ result?.categories?.items[0]?.name }}</h5>
          <v-slide-group-item v-slot="{ isSelected, toggle }">
            <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle"
              :href="`/departments/${result?.categories?.items[0]?.uid}`">
              All
            </v-btn>
          </v-slide-group-item>

          <div v-for="categories in result?.categories?.items" :key="categories">
            <v-slide-group-item v-for="categories in categories?.children" :key="categories"
              v-slot="{ isSelected, toggle }">
              <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle"
                :href="`/departments/categories/${categories?.uid}`">
                {{ categories.name }}
              </v-btn>
            </v-slide-group-item>
          </div>
        </v-slide-group>
      </v-sheet>

      <!--Department Banner Slider-->
      <div>
        <div v-if="result?.categories?.items[0]?.uid === 'OTY='">
          <timeBanner :category="result?.categories?.items[0]?.uid" />
        </div>
        <div v-else-if="result?.categories?.items[0]?.uid === 'OTM='">
          <weather :category="result?.categories?.items[0]?.uid" />
        </div>
        <div v-else-if="result?.categories?.items[0]?.uid === 'NjY='">
          <travel :category="result?.categories?.items[0]?.uid" />
        </div>
        <div v-else-if="result?.categories?.items[0]?.uid === 'NTE='">
          <appstore :product="result?.categories?.items[0]?.uid" />
        </div>
        <div v-else :src="`${result?.categories?.items[0]?.image}`">
          <img :alt="result?.categories?.items[0]?.name" cover />
        </div>
      </div>
    </v-card>

    <v-row class="departmentRow">
      <!--Best Seller Product Slider-->
      <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
        <h4>Best Sellers</h4>
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
        <h4>Latest Products</h4>
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

      <!--List of events in this department-->
      <v-col cols="3" v-for="category in events?.products?.items" :key="category">
        <div v-for="products in category?.products?.items" :key="products">
          <relatedevents :events="products" />
        </div>
      </v-col>
      <!---->

      <!--List of spaces in the department-->
      <v-col cols="12">
        <relatedspaces />
      </v-col>
    </v-row>
    <relatedcreators />
  </div>
</template>

<script setup>
  //import videobar from '~/components/menus/videobar.vue'
  import latestproducts from '~/components/commerce/related/latestproducts.vue'
  import relatedevents from '~/components/commerce/related/relatedevents.vue'
  import bestsellers from '~/components/commerce/related/bestsellers.vue'
  import relatedcreators from '~/components/cms/related/relatedcreators.vue'
  //import shorts from '~/components/cms/related/shorts.vue'
  import relatedspaces from '~/components/cms/related/relatedspaces.vue'
  import productCard from '~/components/commerce/commerce/product/productCard.vue'
  import {
    useQuery
  } from '@vue/apollo-composable'
  import {
    CategoryQuery,
    BestsellerQuery,
    LatestProductsQuery,
    EventProductsQuery
  } from '~/graphql/commerce/queries/id/department'
  import timeBanner from '~/components/appearance/time.vue'
  import weather from '~/components/appearance/weather.vue'
  import travel from '~/components/appearance/travel.vue'
  import appstore from '~/components/appearance/appstore.vue'

  const model = ref(null)

  // Retrieve the route and extract the UID
  const route = useRoute();

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
  } = useQuery(EventProductsQuery);

  if (errorData || errorBest || errorLatest || errorEvents) {
    console.error('GraphQL Error:', errorData || errorBest || errorLatest || errorEvents);
  }

  useHead({
    title: computed(() => result.value?.categories?.items[0]?.name || 'Outlet Page')
  });
</script>