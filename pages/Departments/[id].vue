<template>
  <div class="departmentPage">
    <v-card variant="text">
      <v-tabs center-active>
        <h5 style="padding: 15px">Meeovi {{ data?.productCategory?.name }}</h5>
        <v-tab><a style="color: black;" :href="`/departments/${data.productCategory?.id}`">All</a></v-tab>
        <v-tab v-for="categories in data?.productCategory?.children?.nodes" :key="categories"><a style="color: black;" :href="`/departments/categories/${categories.id}`">{{ categories.name }}</a>
        </v-tab>
      </v-tabs>
      <!--Department Banner Slider-->
      <img :src="`${data?.productCategory?.image?.sourceUrl}`" :alt="data?.productCategory?.name" cover />
      <!--Department Creators Slider-->
      <shorts />
    </v-card>

    <v-row class="departmentRow">
      <!--Best Seller Product Slider-->
      <h2>Best Sellers in {{ data.productCategory?.name }}</h2>
      <productCard />

      <!--List of products in the category-->
      <h2>Latest in {{ data.productCategory?.name }}</h2>
      <productCard />

      <!--List of products in the category-->
      <h2>Featured in {{ data.productCategory?.name }}</h2>
      <productCard />
      <!---->

       <!--List of spaces in the category-->
       <h2>Spaces about {{ data.productCategory?.name }}</h2>
      <relatedspaces />
    </v-row>
    <latestproducts />
    <bestsellers />
    <relatedcreators />
  </div>
</template>

<script>
  //import videobar from '../../components/menus/videobar.vue'
  import latestproducts from '../../components/related/latestproducts.vue'
  import bestsellers from '../../components/related/bestsellers.vue'
  import relatedcreators from '../../components/related/relatedcreators.vue'
  import productCard from '../../components/commerce/product/productCard.vue'
  import shorts from '../../components/related/shorts.vue'
  import relatedspaces from '../../components/related/relatedspaces.vue'

  export default {
    components: {
      //videobar,
      //live,
      shorts,
      latestproducts,
      bestsellers,
      relatedcreators,
      productCard,
      relatedspaces
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
const query = gql`
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
    data
  } = useAsyncQuery(query, { id: route.params.id });

  definePageMeta({
    layout: 'nolive',
  });

  useHead({
    title: data?.value?.productCategory?.name
  })
</script>