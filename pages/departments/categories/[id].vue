<template>
  <div class="departmentPage">
    <v-card variant="text">
      <v-toolbar :style="`background-color: ${categories?.color}; color: ${categories?.colortext}`" :title="categories?.name">
          <v-slide-group show-arrows>
            <v-slide-group-item v-slot="{ isSelected, toggle }">
              <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle"
                :href="`/departments/categories/${categories?.id}`">
                All
              </v-btn>
            </v-slide-group-item>

            <div v-for="categories in categories?.categories" :key="categories?.categories_id?.id">
              <v-slide-group-item v-slot="{ isSelected, toggle }">
                <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle"
                  :href="`/departments/categories/${categories?.categories_id?.id}`">
                  {{ categories?.categories_id?.name }}
                </v-btn>
              </v-slide-group-item>
            </div>
          </v-slide-group>
      </v-toolbar>

      <!--Department Banner Slider
      <img :src="`${result?.categories?.items[0]?.image}`" :alt="result?.categories?.items[0]?.name" cover />-->
    </v-card>

    <v-row>
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
  //import videobar from '~/components/menus/videobar.vue'
  import latestproducts from '~/components/commerce/related/latestproducts.vue'
  import relatedevents from '~/components/commerce/related/relatedevents.vue'
  import bestsellers from '~/components/commerce/related/bestsellers.vue'
  import relatedcreators from '~/components/cms/related/relatedcreators.vue'
  //import shorts from '~/components/cms/related/shorts.vue'
  import relatedspaces from '~/components/cms/related/relatedspaces.vue'
  import productCard from '~/components/commerce/commerce/product/productCard.vue'
  
  // Retrieve the route and extract the UID
  const route = useRoute();

  const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    data: categories
  } = await useAsyncData('categories', () => {
    return $directus.request($readItem('categories', route.params.id, {
      fields: ['*', {
        '*': ['*']
      }]
    }))
  })

  useHead({
    title: computed(() => categories?.value?.name || 'Category Page')
  });
</script>