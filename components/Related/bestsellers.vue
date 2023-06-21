<template>
    <v-sheet class="mx-auto sliderProducts">
        <h4>Best Sellers</h4>
        <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="products in data.products.items" :key="products.uid" v-slot="{ isSelected, toggle }">
                <a :href="`/product/${products.uid}`">
                    <v-card class="ma-4" height="380" width="250" @click="toggle">
                        <img class="align-end text-white" height="200" :src="products.image.url" cover />

                        <v-card-title class="pt-4">
                            {{ products.name }}
                        </v-card-title>

                        <v-card-text>
                            <div># of Ratings: {{ products.rating_summary }}</div>
                            <div>Category: {{ products.categories.name }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-card-title>$ {{ products.price_range.maximum_price.regular_price.value }}</v-card-title>
                        </v-card-actions>
                        <div class="d-flex fill-height align-center justify-center">
                            <v-scale-transition>
                                <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
                            </v-scale-transition>
                        </div>
                    </v-card>
                </a>
            </v-slide-group-item>
        </v-slide-group>
      <!--  <div class="contentPage" v-for="cmsblock in data" :key="cmsblock">
            <div v-html="cmsblock.content"></div>
        </div>-->
    </v-sheet>
</template>

<script>
    export default {
        data: () => ({
            model: null,
        }),
    }
</script>

<script setup>
const query = gql `
query {
    products(filter: {price: {to: "999.99"}}){
    items {
      uid
      name
      rating_summary
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
    }
  }
}`


    const {
        data
    } = useAsyncQuery(query);
</script>