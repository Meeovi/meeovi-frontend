<template>
  <div class="departmentPage">
    <v-card variant="text">
      <v-sheet class="mx-auto">
        <v-slide-group show-arrows>
          <h5 style="padding: 15px">{{ data?.categories?.items[0]?.name }}</h5>
          <v-slide-group-item v-slot="{ isSelected, toggle }">
            <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle"
              :href="`/outlets/${data?.categories?.items[0]?.uid}`">
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

      <!--Department Banner Slider-->
      <img :src="`${data?.categories?.items[0]?.image}`" :alt="data?.categories?.items[0]?.name" cover />
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
    </v-row>
  </div>
</template>

<script>
  //import videobar from '../../components/menus/videobar.vue'
  import latestproducts from '../../components/related/latestproducts.vue'
  import relatedevents from '../../components/related/relatedevents.vue'
  import bestsellers from '../../components/related/bestsellers.vue'
  import productCard from '../../components/commerce/product/productCard.vue'

  export default {
    components: {
      //videobar,
      //live,
      latestproducts,
      relatedevents,
      bestsellers,
      productCard,
    },
    data() {
      return {
        model: null,
        //url: process.env.DIRECTUS_URL,
      }
    },
  }
</script>

<script setup>
  const CATEGORY_QUERY = gql `
  query CategoryQuery($uid: String!) {
    categories (filters: {category_uid: {eq: $uid}}) {
    items {
      uid
      name
      children {
        uid
        name
      }
      image
      products(pageSize: 5, sort: {position: DESC}) {
        items {
          description {
            html
          }
          uid
          name
          image {
            url
          }
          sku
          price_range {
            minimum_price {
              regular_price {
                currency
                value
              }
            }
          }
        }
      }
    }
  }
}
`;

  const BESTSELLER_QUERY = gql `
  query BestsellerQuery($uid: String!) {
    products(filter: {category_uid: {eq: $uid}}, pageSize: 5, sort: {position: DESC}) {
      items {
        uid
        name
        image {
          url
        }
        sku
        price_range {
          minimum_price {
            regular_price {
              currency
              value
            }
          }
        }
      }
    }
  }
`;

  const LATEST_PRODUCTS_QUERY = gql `
  query LatestProductsQuery($uid: String!) {
    products(filter: {category_uid: {eq: $uid}}, pageSize: 5, sort: {position: DESC}) {
      items {
        uid
        name
        image {
          url
        }
        sku
        price_range {
          minimum_price {
            regular_price {
              currency
              value
            }
          }
        }
      }
    }
  }
`;

  // Retrieve the route and extract the UID
  const route = useRoute();

  // Execute the queries with the UID variable
  const {
    data,
    error: errorData
  } = useAsyncQuery(CATEGORY_QUERY, {
    uid: route.params.uid
  });
  const {
    data: best,
    error: errorBest
  } = useAsyncQuery(BESTSELLER_QUERY, {
    uid: route.params.uid
  });
  const {
    data: latest,
    error: errorLatest
  } = useAsyncQuery(LATEST_PRODUCTS_QUERY, {
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

definePageMeta({
    layout: false,
  });
  
  useHead({
    title: data?.categories?.items?.name
  });
</script>