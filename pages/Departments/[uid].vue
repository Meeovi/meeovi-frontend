<template>
  <div class="departmentPage">
    <v-card variant="text">
      <v-sheet class="mx-auto">
        <v-slide-group show-arrows>
          <h5 style="padding: 15px">Meeovi {{ data?.categories?.items[0]?.name }}</h5>
          <v-slide-group-item v-slot="{ isSelected, toggle }">
            <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle"
              :href="`/departments/${data?.categories?.items[0]?.uid}`">
              All
            </v-btn>
          </v-slide-group-item>

          <div v-for="categories in data?.categories?.items" :key="categories">
            <v-slide-group-item v-for="categories in categories?.children" :key="categories" v-slot="{ isSelected, toggle }">
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
      <shorts />
    </v-card>

    <v-row class="departmentRow">
      <!--Best Seller Product Slider
      <v-col cols="12" v-for="products in bestSellingProducts" :key="products">
        <productCard :product="products" /> 
      </v-col>-->

      <!--List of latest products in the department-->
      <v-col cols="12" v-for="products in data?.categories?.products?.items" :key="products">
        <latestproducts :product="products" />
      </v-col>

      <!--List of products in the department
      <v-col cols="12" v-for="products in products" :key="products">
        <productCard :product="products" />
      </v-col>-->

      <!--List of events in this department
      <v-col cols="12" v-for="products in eventProducts" :key="products">
        <relatedevents :product="products" />
      </v-col>-->
      <!---->

      <!--List of spaces in the department-->
      <v-col cols="12">
        <relatedspaces />
      </v-col>
    </v-row>
    <relatedcreators />
  </div>
</template>

<script>
  //import videobar from '../../components/menus/videobar.vue'
  import latestproducts from '../../components/related/latestproducts.vue'
  import relatedevents from '../../components/related/relatedevents.vue'
  import bestsellers from '../../components/related/bestsellers.vue'
  import relatedcreators from '../../components/related/relatedcreators.vue'
  import shorts from '../../components/related/shorts.vue'
  import relatedspaces from '../../components/related/relatedspaces.vue'
  import productCard from '../../components/commerce/product/productCard.vue'

  export default {
    components: {
      //videobar,
      //live,
      latestproducts,
      relatedevents,
      bestsellers,
      relatedcreators,
      relatedspaces,
      shorts,
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
  const route = useRoute();
  const query = gql `
query NewQuery ($uid: String!) {
  categories (filters: {category_uid: {eq: $uid}}) {
    items {
      uid
      name
      children {
        uid
        name
      }
      image
      products(pageSize: 5, sort: { position: DESC }) {
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
`

  const {
    data
  } = useAsyncQuery(query, {
    uid: route.params.uid
  });

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

  import {
    useCategoryProducts
  } from '~/composables/categories/useCategoryProducts';
  import {
    getCategoryById,
    getCategoriesByIds
  } from '~/composables/categories/getCategories';
  import {
    useRoute
  } from 'vue-router';

  const config = useRuntimeConfig();
  const route = useRoute();
  const category = ref(null);
  const children = ref([]);
  const {
    products,
    fetchCategoryProducts,
    fetchLatestCategoryProducts,
    fetchProductsByCategory
  } = useCategoryProducts();

  const imageUrl = ref('');
  const latestProducts = ref([]);
  const bestSellingProducts = ref([]);
  const categoryDescription = ref('');
  const eventProducts = ref([]);

  const fetchCategoryDetails = async () => {
    const id = route.params.uid;
    const data = await getCategoryById(id);
    category.value = data;

    if (data) {
      // Get the category image
      const imageAttribute = data.custom_attributes.find(attr => attr.attribute_code === 'image');
      imageUrl.value = imageAttribute ? `${config.public.commerceUrl}/${imageAttribute.value}` : '';

      // Get the category description
      const descriptionAttribute = data.custom_attributes.find(attr => attr.attribute_code === 'description');
      categoryDescription.value = descriptionAttribute ? descriptionAttribute.value : '';

      // Get the child categories
      const childIds = data.children ? data.children.split(',') : [];
      if (childIds.length > 0) {
        children.value = await getCategoriesByIds(childIds);
      }
    }
  };

  // Example usage of fetching products for a specific category
  const fetchEventsCategory = async (specificCategoryId) => {
    eventProducts.value = await fetchProductsByCategory(specificCategoryId);
  };

  onMounted(async () => {
    const id = route.params.uid;
    await fetchCategoryDetails(id);
    await fetchCategoryProducts(id);
    latestProducts.value = await fetchLatestCategoryProducts(id);
    bestSellingProducts.value = await getBestSellingProducts();

    // Fetch products for the "events" category
    const eventsCategoryId = 'NjE='; // Replace with actual "events" category ID
    await fetchEventsCategory(eventsCategoryId);
  });
*/
  useHead({
    title: data?.category?.name
  });
</script>