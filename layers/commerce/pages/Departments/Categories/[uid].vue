<template>
  <div class="departmentPage">
    <v-card variant="text">
      <v-sheet class="mx-auto">
        <v-slide-group show-arrows>
          <h5 style="padding: 15px">Meeovi {{ data?.categories?.items[0]?.name }}</h5>
          <v-slide-group-item v-slot="{ isSelected, toggle }">
            <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle"
              :href="`/departments/categories/${data?.categories?.items[0]?.uid}`">
              All
            </v-btn>
          </v-slide-group-item>

          <div v-for="categories in data?.categories?.items" :key="categories">
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
      <img :src="`${data?.categories?.image?.sourceUrl}`" :alt="data?.categories?.name" cover />-->
      <!--Department Creators Slider-->
    </v-card>

    <v-row class="departmentRow">
      <!--Best Seller Product Slider-->
      <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
        <h4>Best Sellers</h4>
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <div v-for="category in best?.categories?.items" :key="category">
            <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"
              v-for="products in category?.products?.items" :key="products">
              <productCard :product="category" :class="['ma-4', selectedClass]" @click="toggle" />
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
          <div v-for="category in latest?.categories?.items" :key="category">
            <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"
              v-for="products in category?.products?.items" :key="products">
              <productCard :product="category" :class="['ma-4', selectedClass]" @click="toggle" />
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
      <v-col cols="3" v-for="category in data?.categories?.items" :key="category">
        <div v-for="products in category?.products?.items" :key="products">
          <productCard :product="products" />
        </div>
      </v-col>

      <!--List of events in this department-->
      <v-col cols="3" v-for="category in events?.categories?.items" :key="category">
        <div v-for="products in category?.products?.items" :key="products">
          <relatedevents :events="products" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  //import videobar from '../../components/menus/videobar.vue'
  import latestproducts from '../../components/related/latestproducts.vue'
  import relatedevents from '../../components/related/relatedevents.vue'
  import bestsellers from '../../components/related/bestsellers.vue'
  import productCard from '../../components/commerce/product/productCard.vue'
  import { CategoryQuery, BestsellerQuery, LatestProductsQuery, EventProductsQuery } from '~/graphql/Commerce/queries/id/category.gql'
  
  const model = ref(null)

  // Retrieve the route and extract the UID
  const route = useRoute();

  // Execute the queries with the UID variable
  const {
    data,
    error: errorData
  } = useAsyncQuery(CategoryQuery, {
    uid: route.params.uid
  });

  const {
    data: best,
    error: errorBest
  } = useAsyncQuery(BestsellerQuery, {
    uid: route.params.uid
  });

  const {
    data: latest,
    error: errorLatest
  } = useAsyncQuery(LatestProductsQuery, {
    uid: route.params.uid
  });

  if (errorData || errorBest || errorLatest || errorEvents) {
    console.error('GraphQL Error:', errorData || errorBest || errorLatest || errorEvents);
  }

  /*  const {
    getItemById, getItems
  } = useDirectusItems()
  const route = useRoute();

  const department = await getItemById({
    collection: "departments",
    id: route.params.id,
    filter: {
      categories: {
        categories_id: {
          _eq: route.params.id
        }
      }
    }
  });
*/
  useHead({
    title: data?.categories?.items?.name
  });
</script>