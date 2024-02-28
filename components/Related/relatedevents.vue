<template>
  <v-sheet class="mx-auto sliderProducts">
    <h4>Events you may like</h4>
    <v-sheet class="mx-auto" elevation="0" color="transparent">
      <v-slide-group v-model="model" class="pa-4" prev-icon="fas fa-arrow-left" next-icon="fas fa-arrow-right"
        selected-class="bg-primary">
        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }">
          <v-row dense>
            <v-col v-for="(products, index) in data?.products?.items" :key="index" cols="4">
              <v-card>
                <img :src="products?.image?.url" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px" cover />
                  <v-card-title class="text-white" v-text="products?.name"></v-card-title>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn size="small" color="surface-variant" variant="text" icon="fas fa-heart"></v-btn>

                  <v-btn size="small" color="surface-variant" variant="text" icon="fas fa-bookmark"></v-btn>

                  <v-btn size="small" color="surface-variant" variant="text" icon="fas fa-share-variant"></v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-sheet>
</template>

<script>
  import productCard from '../commerce/product/productCard.vue'

  export default {
    components: {
      productCard
    },
    data: () => ({
      model: null,
      url: process.env.DIRECTUS_URL,
    }),
  }
</script>

<script setup>
  const query = gql `
query{
  products(filter: {price: {from: "0"}, format: {eq: "Event"}}) {
    items {
      uid
      name
      categories {
        name
      }
      price_range {
        maximum_price {
          regular_price {
            currency
            value
          }
        }
      }
      image {
        url
      }
      rating_summary
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);
</script>