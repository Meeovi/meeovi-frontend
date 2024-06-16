<template>
  <div class="departmentPage">
    <v-card variant="text">
      <v-sheet class="mx-auto">
        <v-slide-group show-arrows>
          <h5 style="padding: 15px">Meeovi {{ data?.productCategory?.name }}</h5>
          <v-slide-group-item v-slot="{ isSelected, toggle }">
            <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle" :href="`/departments/${data.productCategory?.id}`">
              All
            </v-btn>
          </v-slide-group-item>

          <v-slide-group-item v-for="categories in data?.productCategory?.children?.nodes" :key="categories" v-slot="{ isSelected, toggle }">
            <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle" :href="`/departments/categories/${categories.id}`">
              {{ categories.name }}
            </v-btn>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>

      <!--Department Banner Slider
      <img :src="`${data?.productCategory?.image?.sourceUrl}`" :alt="data?.productCategory?.name" cover />-->
      <!--Department Creators Slider-->
      <shorts />
    </v-card>

    <v-row class="departmentRow">
      <!--Best Seller Product Slider-->
      <v-col cols="12">
        <bestsellers /> 
      </v-col>
      
      <!--List of products in the department-->
      <v-col cols="12">
        <latestproducts /> 
      </v-col>

      <!--List of products in the department-->
      <v-col cols="12">
        <productCard /> 
      </v-col>
      
      <!--List of events in this department-->
      <v-col cols="12">
        <relatedevents /> 
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

<script>
  //import videobar from '../../components/menus/videobar.vue'
  import latestproducts from '../../components/related/latestproducts.vue'
  import relatedevents from '../../components/related/relatedevents.vue'
  import bestsellers from '../../components/related/bestsellers.vue'
  import relatedcreators from '../../components/related/relatedcreators.vue'
  import productCard from '../../components/commerce/product/productCard.vue'

  export default {
    components: {
      //videobar,
      //live,
      latestproducts,
      relatedevents,
      bestsellers,
      relatedcreators,
      productCard,
    },
    data() {
      return {
        model: null,
        url: process.env.DIRECTUS_URL,
      }
    },
  }
</script>

<script setup>
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
  }); */

const route = useRoute();
const query = gql `
query NewQuery ($id: ID!) {
  productCategory(id: $id) {
    children {
      nodes {
        id
        name
      }
    }
    description
    image {
      sourceUrl
    }
    name
    slug
    uri
    products {
      nodes {
        content
        excerpt
        id
        image {
          sourceUrl
        }
        name
        sku
        slug
        status
        title
        type
        uri
      }
    }
    id
  }
}
`

  const {
    data, error, loading
  } = useAsyncQuery(query, {
    id: route.params.id
  });

if (error) {
  console.error('GraphQL Error:', error);
}

  console.log(data);
  console.log(error);
  console.log(loading);

  definePageMeta({
    layout: 'nolive',
  });

  useHead({
    title: data?.value?.productCategory?.name
  })
</script>