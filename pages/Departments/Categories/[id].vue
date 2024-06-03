<template>
  <div class="contentPage">
    <v-card variant="text">
      <v-tabs center-active>
        <h5 style="padding: 15px">Meeovi <a :href="`/departments/${data?.productCategory?.parent?.node?.id}`"></a>{{ data?.productCategory?.parent?.node?.name }} - {{ data?.productCategory?.name }}</h5>
        <v-tab><a :href="`/categories/${data?.productCategory?.id}`">All</a></v-tab>
          <v-tab v-for="(categories, index) in productCategory?.children?.nodes" :key="index"><a :href="`/departments/categories/${categories?.id}`">{{ categories?.name }}</a>
          </v-tab>
      </v-tabs>
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

  export default {
    components: {
      //videobar,
      //live,
      latestproducts,
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
const route = useRoute();
const query = gql`
query NewQuery ($id: ID!) {
  productCategory(id: $id) {
    parent {
      node {
        id
        name
      }
    }
    products {
      nodes {
        averageRating
        date
        description
        id
        image {
          sourceUrl
        }
        name
        sku
        status
        type
      }
    }
    children {
      nodes {
        id
        name
      }
    }
    id
    name
  }
}
`

  const {
    data
  } = useAsyncQuery(query, { id: route.params.id });

/*  const {
    getItems
  } = useDirectusItems()

  const {
    getItemById
  } = useDirectusItems()
  const route = useRoute();

  const category = await getItemById({
    collection: "categories",
    id: route.params.id,
    filter: {
      products: {
        products_id: {
          visibility: {
            _eq: true,
          }
        }
      }
    }
  }); */

  useHead({
    title: data?.productCategory?.name,
  })
</script>