<template>
  <div class="contentPage">
    <v-card variant="text">
      <v-sheet class="mx-auto">
        <v-slide-group show-arrows>
          <h5 style="padding: 15px">Meeovi <a :href="`/departments/${data?.productCategory?.parent?.node?.id}`">{{ data?.productCategory?.parent?.node?.name }}</a> - {{ data?.productCategory?.name }}</h5>
          <v-slide-group-item v-slot="{ isSelected, toggle }">
            <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle" :href="`/departments/categories/${data.productCategory?.id}`">
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
    </v-card>

    <v-row class="departmentRow">
      <!--Best Seller Product Slider-->
      <v-col cols="12">
        <bestsellers /> 
      </v-col>
      
      <!--List of products in the category-->
      <v-col cols="12">
        <latestproducts /> 
      </v-col>

      <!--List of products in the category-->
      <v-col cols="12">
        <productCard /> 
      </v-col>

      <v-col cols="12">
        <relatedevents /> 
      </v-col>
      <!---->

      <!--List of spaces in the category-->
      <v-col cols="12">
        <relatedspaces /> 
      </v-col>
    </v-row>
    <relatedcreators />
  </div>
</template>

<script>
  import latestproducts from '../../components/related/latestproducts.vue'
  import relatedevents from '../../components/related/relatedevents.vue'
  import bestsellers from '../../components/related/bestsellers.vue'
  import relatedcreators from '../../components/related/relatedcreators.vue'
  import shorts from '../../components/related/shorts.vue'
  import relatedspaces from '../../components/related/relatedspaces.vue'
  import productCard from '../../components/commerce/product/productCard.vue'

  export default {
    components: {
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
    title: data?.value?.productCategory?.name,
  })
</script>