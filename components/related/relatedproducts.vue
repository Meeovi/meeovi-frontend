<template>
  <div>
    <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
      <h4>Related Products</h4>
      <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }" v-for="products in data?.products?.nodes" :key="products.id">
          <productCard :product="products" :class="['ma-4', selectedClass]" @click="toggle" />

          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
            </v-scale-transition>
          </div>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
  import productCard from '../commerce/product/productCard.vue'

  export default {
    components: {
      productCard
    },
    data: () => ({
      model: null,
      //url: process.env.DIRECTUS_URL,
    }),
  }
</script>

<script setup>
const query = gql`
query NewQuery {
  products(where: {featured: true}) {
    nodes {
      id
      averageRating
      description
      image {
        sourceUrl
      }
      name
      sku
      type
      ... on SimpleProduct {
        id
        name
        price
        type
        productCategories {
          nodes {
            name
          }
        }
      }
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);
</script>