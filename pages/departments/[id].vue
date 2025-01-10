<template>
  <div class="departmentPage">
    <div v-if="department?.id === 48 && result?.categories?.items[0]?.uid === 'OTM='">
      <v-toolbar :style="`background-color: ${department?.color}; color: ${department?.colortext}`"
        :title="department?.name"></v-toolbar>
      <deals :category="department?.id" />
    </div>
    <v-card variant="text" v-else>
      <v-toolbar :style="`background-color: ${department?.color}; color: ${department?.colortext}`"
        :title="department?.name">
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
                  <v-col cols="3" v-for="categories in department?.categories" :key="categories?.categories_id?.id">
                    <v-list-item>
                      <NuxtLink :to="`/departments/categories/${categories?.categories_id?.id}`">
                        {{ categories?.categories_id?.name }}</NuxtLink>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-list>
            </v-menu>
          </v-slide-group-item>

          <v-slide-group-item v-for="menu in department?.menus" :key="menu" v-slot="{ isSelected, toggle }">
            <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle"
              :href="`/departments/categories/${categories?.id}`">
              {{ menu.name }}
            </v-btn>
          </v-slide-group-item>
        </v-slide-group>
      </v-toolbar>

      <!--Department Banner Slider-->
      <div>
        <div v-if="department?.id === 68">
          <timeBanner :category="department?.id" />
        </div>
        <div v-else-if="department?.id === 67">
          <weather :category="department?.id" />
        </div>
        <div v-else-if="department?.id === 59">
          <travel :category="department?.id" />
        </div>
        <div v-else-if="department?.id === 60">
          <appstore :category="department?.id" />
        </div>
        <div v-else-if="department?.id === 77">
          <adultstore :category="department?.id" />
        </div>
        <div v-else-if="department?.id === 64">
          <health :category="department?.id" />
        </div>
        <div v-else-if="department?.id === 63">
          <realestate :category="department?.id" />
        </div>
        <div v-else-if="department?.id === 37">
          <pantry :category="department?.id" />
        </div>

        <div v-else>
          <NuxtImg :src="`${$directus.url}assets/${department?.image?.filename_disk}`" loading="lazy" :alt="department?.name" cover />
        </div>
      </div>
    </v-card>

    <v-row class="departmentRow">
      <!--Vibez Slider-->
      <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
        <h4 style="left: 15px; position: relative;">{{ callouts?.menus?.[0]?.name }} {{ department?.name }}</h4>
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
      <v-col cols="3" v-for="category in matchedProducts" :key="category.categoryId">
        <h3>{{ category.categoryName }}</h3>
        <div v-for="products in category.products" :key="products.uid">
          <productCard :product="products" />
        </div>
      </v-col>

      <!--List of events in this department-->
      <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
        <h4 style="left: 15px; position: relative;">{{ callouts?.menus?.[3]?.name }} {{ department?.name }}</h4>
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
        <h4 style="left: 15px; position: relative;">{{ callouts?.menus?.[4]?.name }} {{ department?.name }}</h4>
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
        <h4 style="left: 15px; position: relative;">{{ callouts?.menus?.[5]?.name }} {{ department?.name }}</h4>
        <relatedcreators />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  //import videobar from '~/components/menus/videobar.vue'
  import latestproducts from '~/components/commerce/related/latestproducts.vue'
  import relatedevents from '~/components/commerce/related/relatedevents.vue'
  import bestsellers from '~/components/commerce/related/bestsellers.vue'
  import relatedcreators from '~/components/cms/related/relatedcreators.vue'
  import shorts from '~/components/cms/related/shorts.vue'
  import spaces from '~/components/cms/related/spaces.vue'
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
  import adultstore from '~/components/appearance/adultstore.vue'
  import realestate from '~/components/appearance/realestate.vue'
  import health from '~/components/appearance/health.vue'
  import pantry from '~/components/appearance/pantry.vue'
  import deals from '~/components/appearance/deals.vue'

  const model = ref(null)

  // Retrieve the route and extract the UID
  const route = useRoute();
  const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    data: department
  } = await useAsyncData('department', () => {
    return $directus.request($readItem('departments', route.params.id, {
      fields: ['*',
        'categories.categories_id.*',
        'shorts.shorts_id.*',
        'spaces.spaces_id.*',
        'image.*'
      ]
    }))
  })

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

  const matchedProducts = computed(() => {
    if (!result.value || !department.value) return [];

    return department.value.categories.map(category => {
      const magentoProducts = result.value.categories.items.find(
        item => item.name.toLowerCase() === category.categories_id.name.toLowerCase()
      )?.products?.items || [];

      return {
        categoryId: category.categories_id.id,
        categoryName: category.categories_id.name,
        products: magentoProducts
      };
    });
  });

  const {
    data: callouts
  } = await useAsyncData('callouts', () => {
    return $directus.request($readItem('callouts', '2'))
  })

  useHead({
    title: computed(() => department?.value?.name || 'Department Page')
  });
</script>