<template>
  <div>
    <section data-bs-version="5.1" class="features19 cid-tAGUZsWaoz mbr-parallax-background" id="features12-62">
      <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(255, 255, 255);">
      </div>
      <div class="container">
        <h2 class="mbr-section-title align-left mbr-fonts-style mbr-bold display-2">Spotlight</h2>
        <v-sheet class="mx-auto" elevation="0" color="transparent">
          <v-slide-group v-model="model" class="pa-4" prev-icon="fas fa-arrow-left" next-icon="fas fa-arrow-right"
            selected-class="bg-primary">
            <v-slide-group-item v-for="products in data.products" :key="products.id"
              v-slot="{ isSelected, toggle, selectedClass }">
              <v-card :class="['ma-4', selectedClass]" height="580" width="250" @click="toggle"
                :href="`/product/${products.id}`">
                <NuxtImg loading="lazy" class="align-end text-white" height="280" :src="`${url}assets/${products.image.filename_disk}`"
                  :alt="products.name" cover />

                <v-card-title class="pt-4">
                  {{ products.name }}
                </v-card-title>

                <v-card-text>
                  <div>Sku: {{ products.sku }}</div>
                  <div v-for="categories_id in data.products.categories" :key="categories_id">
                    <div>Category: {{ categories_id.name }}</div>
                    <div>Seller: {{ customers_id.username }}</div>
                  </div>
                </v-card-text>

                <div class="productcardrating">
                  <v-rating hover :length="5" :size="32" :model-value="products.rating" active-color="orange" />
                </div>

                <v-card-actions>
                  <v-card-title>Price: $ {{ products.price }}</v-card-title>
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
  })
}
</script>

<script setup>
  const query = gql `
query {
  products (limit: 12) {
    id
    name
    price
    sku
    image {
      filename_disk
    }
    rating
    tax_class
    stock_status
    websites {
      websites_id {
        name
        url
      }
    }
    weight
    height
    content
    part_number
    format
    file {
      filename_disk
    }
    type
    visibility
    size
    attributes {
      attributes_id {
        id
        default_label
      }
    }
    categories {
      categories_id {
        id
        name
      }
    }
    customers {
      customers_id {
        id
        username
      }
    }
    shops {
      shops_id {
        id
        name
      }
    }
  }
}
`
  const {
    data
  } = await useAsyncQuery(query)
</script>