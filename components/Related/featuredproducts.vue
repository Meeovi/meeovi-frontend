<template>
  <v-sheet class="mx-auto sliderProducts">
    <h4>Featured Products</h4>
    <v-sheet class="mx-auto" elevation="0" color="transparent">
      <v-slide-group v-model="model" class="pa-4">
        <v-slide-group-item v-for="collection in data.collections" :key="collection.id" v-slot="{ toggle }">
          <v-card @click="toggle" elevation="0" color="transparent">
            <v-slide-group v-model="productModel" class="pa-4">
              <v-slide-group-item v-for="(product, productIndex) in collection.products" :key="product.id"
                v-slot="{ isSelected, toggle }">
                <v-card class="ma-4" height="580" width="350" @click="toggle">
                  <img class="align-end text-white" height="280"
                    :src="`${url}assets/${product.products_id.image.filename_disk}`" :alt="product.products_id.name"
                    cover />

                  <v-card-title class="pt-4">
                    {{ product.products_id.name }}
                  </v-card-title>

                  <v-card-text>
                    <div>Sku: {{ product.products_id.sku }}</div>
                    <div v-for="(customer, productIndex) in collection.products.product_id" :key="customer.id">Category:
                      {{ customer.customers.customers_id.name }}</div>
                  </v-card-text>

                  <div class="productcardrating">
                    <v-rating hover :length="5" :size="32" :model-value="product.products_id.rating" active-color="orange" />
                  </div>

                  <v-card-actions>
                    <v-card-title>$ {{ product.products_id.price }}</v-card-title>
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
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-sheet>
</template>

<script>
  const productModel = ref(null)
  export default {
    data: () => ({
      model: null,
      url: process.env.DIRECTUS_URL,
    }),
    setup() {
      return {
        data,
        error,
        loading,
        productModel,
      }
    },
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
        image {
          filename_disk
        }
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
  const collections = await getItems({ collection: "collections", params: {filter: {name: {_eq: "Yardsale"}}}, limit: 6 });*/
</script>