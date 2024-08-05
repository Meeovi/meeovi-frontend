<template>
  <div>
    <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
      <h4>Related Products</h4>
      <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }" v-for="products in data?.products?.items" :key="products.id">
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

<script setup>
  import productCard from '../commerce/product/productCard.vue'
  import bestsellers from '~/graphql/Commerce/queries/bestsellers.gql'

  const model = ref(null);

  const {
    data
  } = useAsyncQuery(bestsellers);
const query = gql`
query {
  products (search: "Featured") {
    items {
      uid
      name
      rating_summary
      description {
        html
      }
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
      categories {
        name
      }
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);
</script>