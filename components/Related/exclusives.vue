<template>
  <v-sheet class="mx-auto sliderProducts">
    <h4>Exclusives</h4>
    <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
      <v-slide-group-item v-for="products in data.products" :key="products.id" v-slot="{ isSelected, toggle }">
        <a :href="`/product/${products.id}`">
          <v-card class="ma-4" height="580" width="250" @click="toggle">
            <img class="align-end text-white" height="280" :src="`${products.image.filename_disk}`"
              :alt="products.name" cover />

            <v-card-title class="pt-4">
              {{ products.name }}
            </v-card-title>

            <v-card-text>
              <div>Sku: {{ products.sku }}</div>
            </v-card-text>

            <v-card-actions>
              <v-card-title>$ {{ products.price }}</v-card-title>
              <v-card-title>Category: {{ products.categories.categories_id.name }}</v-card-title>
              <v-card-title>Seller: {{ products.customers.customers_id.name }}</v-card-title>
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
  departments (search: "exclusives"){
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