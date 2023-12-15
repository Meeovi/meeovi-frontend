<template>
  <v-sheet class="mx-auto sliderProducts">
    <h4>Featured Products</h4>
    <v-sheet class="mx-auto" elevation="0" color="transparent">
          <v-slide-group v-model="model" class="pa-4" prev-icon="fas fa-arrow-left" next-icon="fas fa-arrow-right"
            selected-class="bg-primary" show-arrows>
            <v-slide-group-item v-for="collection in data.collections.products" :key="collection.id"
              v-slot="{ isSelected, toggle, selectedClass }">
              <v-card :class="['ma-4', selectedClass]" height="580" width="250" @click="toggle"
                :href="`/product/${collection.id}`">
                <img class="align-end text-white" height="280" :src="`${url}assets/${collection.image.filename_disk}`"
                  :alt="collection.name" cover />

                <v-card-title class="pt-4">
                  {{ collection.name }}
                </v-card-title>

                <v-card-text>
                  <div>Sku: {{ collection.sku }}</div>
                  <div v-for="categories_id in data.collections.categories" :key="categories_id">
                    <div>Category: {{ categories_id.name }}</div>
                    <div>Seller: {{ customers_id.username }}</div>
                  </div>
                </v-card-text>

                <div class="productcardrating">
                  <v-rating hover :length="5" :size="32" :model-value="collection.rating" active-color="orange" />
                </div>

                <v-card-actions>
                  <v-card-title>Price: $ {{ collection.price }}</v-card-title>
                </v-card-actions>

                <div class="align-center">
                  <v-btn class="align-center" color="orange" href="">Add to Cart</v-btn>
                </div>

                <div class="d-flex fill-height align-center justify-center">
                  <v-scale-transition>
                    <v-icon v-if="isSelected" color="white" size="48" icon="fas fa-circle-xmark"></v-icon>
                  </v-scale-transition>
                </div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      model: null,
      url: process.env.DIRECTUS_URL,
    }),
  }
</script>

<script setup>
const query = gql `
query {
  collections(search: "Featured") {
    id
    name
    description
    type
    image {
      filename_disk
    }
    products {
      products_id {
        id
        name
        price
        rating
        sku
        customers {
          customers_id {
            id
            username
            image {
              filename_disk
            }
          }
        }
      }
    }
  }
}
`
  const {
    data
  } = await useAsyncQuery(query)

  /*
  const { getItems } = useDirectusItems()

  const products = await getItems({ collection: "products"});
  const departments = await getItems({ collection: "departments", params: {filter: {name: {_eq: "Yardsale"}}}, limit: 6 });*/
</script>