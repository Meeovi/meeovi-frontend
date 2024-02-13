<template>
  <v-sheet class="mx-auto sliderProducts">
    <h4>Related Charts</h4>
    <v-slide-group v-model="model" class="pa-4" center-active>
      <v-slide-group-item v-slot="{ isSelected, toggle }" v-for="(chart, index) in data?.products?.items" :key="index">
        <v-card width="300px" @click="toggle" :href="`/chart/${chart?.uid}`">
          <img :src="chart?.image?.url" :alt="chart?.name" class="align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover />
          <v-card-title class="text-white">{{ chart?.name }}</v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn size="small" color="surface-variant" variant="text" icon="fas fa-heart"></v-btn>

            <v-btn size="small" color="surface-variant" variant="text" icon="fas fa-bookmark"></v-btn>

            <v-btn size="small" color="surface-variant" variant="text" icon="fas fa-share-variant"></v-btn>
          </v-card-actions>

          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon v-if="isSelected" color="white" size="48" icon="fas fa-circle-xmark"></v-icon>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      model: null,
      //url: process.env.DIRECTUS_URL,
    }),
  }
</script>

<script setup>
  const query = gql `
query{
  products(filter: {price: {from: "0"}, format: {eq: "Music Charts"}}) {
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