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

      <!--Department Banner Slider
      <nuxt-img loading="lazy" :src="`${result?.categories?.items[0]?.image}`" :alt="result?.categories?.items[0]?.name" cover />-->
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
  import {
    useQuery
  } from '@vue/apollo-composable'
  import { CategoryQuery } from '~/graphql/commerce/queries/id/department'
  
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

  if (errorData ) {
    console.error('GraphQL Error:', errorData);
  }

  useHead({
    title: computed(() => result.value?.categories?.items[0]?.name || 'Outlet Page')
  });
</script>