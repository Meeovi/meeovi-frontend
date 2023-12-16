<template>
  <div>
    <a v-for="meeovistores in data.meeovistores" :key="meeovistores.id" :href="`/meeovistores/${meeovistores.id}`">
      <section data-bs-version="5.1" class="features19 cid-tAGUZsWaoz mbr-parallax-background" id="features12-62"
        :style="`background-image: url(${url}assets/${meeovistores.image.filename_disk}); background-size: 50%; background-color: #1C3B2A !important;`">

        <!--<div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(255, 255, 255);">
      </div>
      <div class="container">
        <h2 class="mbr-section-title align-left mbr-fonts-style mbr-bold display-2">
          <strong>Checkout these images with {{ meeovistores.name }}</strong></h2>
        <v-sheet class="mx-auto" elevation="0" color="transparent">
          <v-slide-group v-model="model" class="pa-4">
            <v-slide-group-item v-for="meeovistores in data.meeovistores" :key="meeovistores.id"
              v-slot="{ toggle }">
              <v-card @click="toggle">
                <v-slide-group class="pa-4">
                  <v-slide-group-item v-for="(product, productIndex) in data.meeovistores.products" :key="product.id"
                    v-slot="{ isSelected, toggle }">
                    <v-card class="ma-4" height="580" @click="toggle">
                      <img class="align-end text-white" height="280"
                        :src="`${url}assets/${product.products_id.image.filename_disk}`" :alt="product.products_id.name"
                        cover />

                      <v-card-title class="pt-4">
                        {{ product.products_id.name }}
                      </v-card-title>

                      <v-card-text>
                        <div>Sku: {{ product.products_id.sku }}</div>
                        <div>Category: {{ meeovistores.categories[0].categories_id.name }}</div>
                      </v-card-text>

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
      </div>-->
    </section>
    </a>
  </div>
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
  meeovistores (search: "pixanomy"){
    id
    name
    color
    colortext
    content
    image {
      filename_disk
    }
    customers {
      customers_id {
        id
        first_name
        last_name
        image {
          filename_disk
        }
      }
    }
    categories {
      categories_id {
        id
        name
        image {
          filename_disk
        }
      }
    }
    products {
      id
      products_id {
        id
        name
        price
        image {
          filename_disk
        }
        sku
        Space {
          id
          Space_id {
            id
            Name
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
  const meeovistores = await getItems({ collection: "meeovistores", params: {filter: {name: {_eq: "Yardsale"}}}, limit: 6 });*/
</script>