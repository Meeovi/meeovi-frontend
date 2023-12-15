<template>
  <div>
    <section v-for="departments in data.departments" :key="departments.id" data-bs-version="5.1"
      class="features19 cid-tAGUZsWaoz mbr-parallax-background" id="features12-62"
      :style="`background-image: url(${departments.image.filename_disk});`">

      <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(255, 255, 255);">
      </div>
      <div class="container">
        <h2 class="mbr-section-title align-left mbr-fonts-style mbr-bold display-2">
          <strong>What's On in Meeovi {{ departments.name }}</strong></h2>
          <v-sheet class="mx-auto" elevation="0" color="transparent">
          <v-slide-group v-model="model" class="pa-4" prev-icon="fas fa-arrow-left" next-icon="fas fa-arrow-right"
            selected-class="bg-primary" show-arrows>
            <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"
              v-for="products in data.departments.products" :key="products.id">
              <v-card :class="['ma-4', selectedClass]" height="580" width="250" @click="toggle"
                :href="`/product/${products.products_id.id}`">
                <img class="align-end text-white" height="280" :src="`${url}assets/${products.products_id.image.filename_disk}`"
                  :alt="products.products_id.name" cover />

                <v-card-title class="pt-4">
                  {{ products.products_id.name }}
                </v-card-title>

                <v-card-text>
                  <div>Sku: {{ products.products_id.sku }}</div>
                  <div>Category: {{ products.products_id.categories.name }}</div>
                  <div>Seller: {{ products.products_id.customers.username }}</div>
                </v-card-text>

                <div class="productcardrating">
                  <v-rating hover :length="5" :size="32" :model-value="products.products_id.rating" active-color="orange" />
                </div>

                <v-card-actions>
                  <v-card-title>Price: $ {{ products.products_id.price }}</v-card-title>
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
      </div>
    </section>
  </div>
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
  departments (search: "theater"){
    id
    Active
    name
    color
    colortext
    description
    content
    brands {
      id
      brands_id {
        name
        image
      }
    }
    articles {
      articles_id {
        id
        name
        excerpt
        content
        categories {
          categories_id {
            id
            name
          }
        }
      }
    }
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
    shorts {
      shorts_id {
        id
        name
        video {
          filename_disk
        }
      }
    }
    shops {
      shops_id {
        id
        name
      }
    }
    collections {
      collections_id {
        id
        name
      }
    }
    websites
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