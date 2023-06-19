<template>
  <div>
    <section v-for="categories in data.categories.items" :key="categories" data-bs-version="5.1"
      class="features19 cid-tAGUZsWaoz mbr-parallax-background" id="features12-62"
      :style="`background-image: url(${categories.image});`">



      <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(255, 255, 255);">
      </div>
      <div class="container">
        <h2 class="mbr-section-title align-left mbr-fonts-style mbr-bold display-2">
          <strong>Latest Reads in Meeovi {{ categories.name }}</strong></h2>
        <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
          <v-slide-group-item v-for="products in data.products.items" :key="products.uid"
            v-slot="{ isSelected, toggle }">
            <a :href="`/product/${products.uid}`">
              <v-card class="ma-4" height="380" width="250" @click="toggle">
                <v-img class="align-end text-white" height="200" :src="products.image.url" cover>
                </v-img>

                <v-card-title class="pt-4">
                  {{ products.name }}
                </v-card-title>

                <v-card-text>
                  <div>Country of Manufacture: {{ products.country_of_manufacture }}</div>
                  <div>Category: {{ products.categories.name }}</div>
                </v-card-text>

                <v-card-actions>
                  <v-card-title>$ {{ products.price_range.maximum_price.regular_price.value }}
                  </v-card-title>
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
      </div>
    </section>
  </div>
</template>

<script>
  export default {

  }
</script>

<script setup>
  const query = gql `
query {
    categories (filters: {ids: {in: "41"}}) {
      items {
        name
        image
      }
    }
    products(filter: {category_id: {eq: "41"}}, pageSize: 3){
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
    }
  }
}`

  const {
    data
  } = useAsyncQuery(query);
</script>