<template>
  <div class="departmentPage">
    <!--Charts Category-->
    <div v-if="category?.slug === 'charts'">
      <charts />
    </div>

    <!--Radio Station Category-->
    <div v-else-if="category?.slug === 'radio-stations'">
      <stations />
    </div>

    <!--Meeovi Eats Category-->
    <div v-else-if="category?.slug === 'eats'">
      <eats />
    </div>

    <v-card variant="text" v-else>
      <v-toolbar :style="`background-color: ${category?.color}; color: ${category?.colortext}`" :title="category?.name">
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
                  <v-col cols="3" v-for="categories in category?.categories" :key="categories?.categories_id?.id">
                    <v-list-item>
                      <NuxtLink :to="`/departments/categories/${categories?.categories_id?.id}`" />
                        {{ categories?.categories_id?.name }}
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-list>
            </v-menu>
          </v-slide-group-item>

          <v-slide-group-item v-for="menu in category?.menus" :key="menu" v-slot="{ isSelected, toggle }">
            <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle" :href="`${menu?.url}`">
              {{ menu?.name }}
            </v-btn>
          </v-slide-group-item>
        </v-slide-group>
      </v-toolbar>

      <!--Category Banner Slider-->
      <div>
        <NuxtImg class="departmentBanner" loading="lazy"
          :src="`${$directus?.url}assets/${category?.image?.filename_disk}`" :alt="category?.name" cover />
      </div>
    </v-card>

    <v-row>
      <!--List of products in the category-->
      <v-col cols="3" v-for="category in category?.products" :key="category.id">
        <div v-for="products in category?.products_id" :key="products.slug">
          <productCard :product="products" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  import productCard from '~/components/product/productCard.vue'
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
  const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    data: category
  } = await useAsyncData('category', () => {
    return $directus.request($readItem('categories', route.params.id, {
      fields: ['*',
        'categories.categories_id.*',
        'products.products_id.*',
        'products.products_id.image.*',
        'menus.*',
        'image.*'
      ]
    }))
  })

  const {
    data: callouts
  } = await useAsyncData('callouts', () => {
    return $directus.request($readItem('callouts', '2'))
  })

  useHead({
    title: computed(() => category?.value?.name || 'Category Page')
  });
</script>