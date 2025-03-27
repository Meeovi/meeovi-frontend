<template>
  <div class="departmentPage">
    <div v-if="department?.id === 48 && result?.categories?.items[0]?.uid === 'OTM='">
      <v-toolbar :style="`background-color: ${department?.color}; color: ${department?.colortext}`"
        :title="result?.categories?.items[0]?.name"></v-toolbar>
      <deals :category="department?.id" />
    </div>

    <v-card variant="text" v-else>
      <v-toolbar :style="`background-color: ${department?.color}; color: ${department?.colortext}`"
        :title="result?.categories?.items[0]?.name">
        <v-slide-group show-arrows>
          <v-slide-group-item v-slot="{ isSelected, toggle }">
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle" v-bind="props"
                  append-icon="fas fa-caret-down" variant="text">
                  Categories
                </v-btn>
              </template>
              <v-list class="departmentMenu">
                <v-row>
                  <v-col cols="3" v-for="categories in result?.categories?.items" :key="categories?.uid">
                    <v-list-item v-for="categories in categories?.children" :key="categories">
                      <NuxtLink :to="`/departments/categories/${result?.categories?.items[0]?.uid}`">
                        {{ categories?.name }}</NuxtLink>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-list>
            </v-menu>
          </v-slide-group-item>

          <v-slide-group-item v-for="menu in department?.menus" :key="menu" v-slot="{ isSelected, toggle }">
            <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle"
              :href="`${menu?.url}`">
              {{ menu?.name }}
            </v-btn>
          </v-slide-group-item>
        </v-slide-group>
      </v-toolbar>

      <!--Department Banner Slider-->
      <div>
        <div v-if="result?.categories?.items[0]?.uid === 'NjY='">
          <travel :category="result?.categories?.items[0]?.uid" />
        </div>
        <div v-else-if="result?.categories?.items[0]?.uid === 'NTE='">
          <appstore :product="result?.categories?.items[0]?.uid" />
        </div>
        <div v-else-if="result?.categories?.items[0]?.uid === 'NTE='">
          <adultstore :product="result?.categories?.items[0]?.uid" />
        </div>
        <div v-else-if="result?.categories?.items[0]?.uid === 'NjM='">
          <health :product="result?.categories?.items[0]?.uid" />
        </div>
        <div v-else-if="result?.categories?.items[0]?.uid === 'NjU='">
          <realestate :product="result?.categories?.items[0]?.uid" />
        </div>
        <div v-else-if="result?.categories?.items[0]?.uid === 'NjI='">
          <pantry :product="result?.categories?.items[0]?.uid" />
        </div>
        <div v-else-if="result?.categories?.items[0]?.uid === 'OTM='">
          <weather :product="result?.categories?.items[0]?.uid" />
        </div>
        <div v-else-if="result?.categories?.items[0]?.uid === 'OTY='">
          <time :product="result?.categories?.items[0]?.uid" />
        </div>
        <div v-else-if="result?.categories?.items[0]?.uid === 'OTQ='">
          <news :product="result?.categories?.items[0]?.uid" />
        </div>
        
        <div v-else>
          <NuxtImg class="departmentBanner" loading="lazy" :src="`${result?.categories?.items[0]?.image}`" :alt="result?.categories?.items[0]?.name" cover />
        </div>
      </div>
    </v-card>

    <v-row class="departmentRow">
      <!--Vibez Slider-->
      <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
        <h4 style="left: 15px; position: relative;">{{ callouts?.menus?.[0]?.name }} {{ result?.categories?.items[0]?.name }}</h4>
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }" v-for="shorts in department?.shorts"
            :key="shorts">
            <shorts :short="shorts?.shorts_id" :class="['ma-4', selectedClass]" @click="toggle" />
            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
              </v-scale-transition>
            </div>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>

      <!--Best Seller Product Slider-->
      <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
        <h4 style="left: 15px; position: relative;">{{ callouts?.menus?.[1]?.name }}</h4>
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
        <h4 style="left: 15px; position: relative;">{{ callouts?.menus?.[2]?.name }}</h4>
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
      <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
        <h4 style="left: 15px; position: relative;">{{ callouts?.menus?.[3]?.name }} {{ result?.categories?.items[0]?.name }}</h4>
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <div v-for="category in events?.products?.items" :key="category">
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
      <!---->

      <!--List of spaces in the department-->
      <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
        <h4 style="left: 15px; position: relative;">{{ callouts?.menus?.[4]?.name }} {{ result?.categories?.items[0]?.name }}</h4>
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }" v-for="spaces in department?.spaces"
            :key="spaces">
            <spaces :space="spaces?.spaces_id" :class="['ma-4', selectedClass]" @click="toggle" />
            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
              </v-scale-transition>
            </div>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>

      <v-col cols="12">
        <h4 style="left: 15px; position: relative;">{{ callouts?.menus?.[5]?.name }} {{ result?.categories?.items[0]?.name }}</h4>
        <relatedcreators />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  //import videobar from '~/components/menus/videobar.vue'
  import latestproducts from '~/components/product/latestproducts.vue'
  import relatedevents from '~/components/product/relatedevents.vue'
  import bestsellers from '~/components/product/bestsellers.vue'
  import relatedcreators from '~/components/contacts/relatedcreators.vue'
  import shorts from '~/components/vibez/shorts.vue'
  import spaces from '~/components/spaces/spaces.vue'
  import relatedspaces from '~/components/spaces/relatedspaces.vue'
  import productCard from '~/components/product/productCard.vue'
  import {
    useQuery
  } from '@vue/apollo-composable'
  import {
    CategoryQuery,
    BestsellerQuery,
    LatestProductsQuery,
    EventProductsQuery
  } from '~/graphql/commerce/queries/id/department'
  import travel from '~/components/categories/travel.vue'
  import appstore from '~/components/categories/appstore.vue'
  import adultstore from '~/components/categories/adultstore.vue'
  import realestate from '~/components/categories/realestate.vue'
  import health from '~/components/categories/health.vue'
  import pantry from '~/components/categories/pantry.vue'
  import deals from '~/components/categories/deals.vue'
  import time from '~/components/categories/time/time.vue'
  import weather from '~/components/categories/weather/weather.vue'
  import news from '~/components/categories/news/index.vue'
  import notes from '~/components/categories/notes/index.vue'

const route = useRoute()
const model = ref(null)
const {
    $directus,
    $readItem
  } = useNuxtApp()

// Execute the queries with the UID variable
const { result, error: errorData } = useQuery(CategoryQuery, {
  uid: route.params.uid
});

const { result: best, error: errorBest } = useQuery(BestsellerQuery, {
  uid: route.params.uid
});

const { result: latest, error: errorLatest } = useQuery(LatestProductsQuery, {
  uid: route.params.uid
});

const { result: events, error: errorEvents } = useQuery(EventProductsQuery, {
  uid: route.params.uid
});

// Get department data from the composable
//const { result, department, departments } = useDepartmentData()

const {
    data: callouts
  } = await useAsyncData('callouts', () => {
    return $directus.request($readItem('callouts', '2'))
  })

if (errorData || errorBest || errorLatest || errorEvents) {
  console.error('GraphQL Error:', errorData || errorBest || errorLatest || errorEvents);
}

  useHead({
    title: computed(() => result.value?.categories?.items[0]?.name || 'Department Page')
  });
</script>