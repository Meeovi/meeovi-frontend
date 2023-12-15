<template>
  <div>
    <v-card class="lowerbar">
      <v-tabs center-active>
        <h5>Meeovi {{ data.departments.name }}</h5>
        <v-tab><a :href="`/departments/${data.departments.id}`">All</a></v-tab>
        <v-tab><a :href="`/categories/${data.departments.categories.categories_id.id}`">{{ data.departments.categories.categories_id.name }}</a>
        </v-tab>
      </v-tabs>
    </v-card>

    <v-row class="productPage">
      <v-col cols="12">
        <h4>Best Sellers</h4>
        <v-sheet class="mx-auto categorySheet">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle }">
              <v-card :color="isSelected ? 'primary' : 'grey-lighten-1'" class="ma-4" height="200" width="100"
                @click="toggle">
                <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  cover>
                </v-img>
                <div class="d-flex fill-height align-center justify-center">
                  <v-scale-transition>
                    <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
                  </v-scale-transition>
                </div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>

      <div class="productPage">
        <v-col cols="3">
          <a :href="`/product/${data.departments.products.products_id.id}`">
            <v-card class="ma-4" height="380" width="250">
              <img class="align-end text-white" height="200" :src="`${data.departments.products.products_id.image.filename_disk}`" :alt="data.departments.products.product_id.name" cover />

              <v-card-title class="pt-4">
                {{ data.departments.products.products_id.name }}
              </v-card-title>

              <v-card-subtitle>
                Sku: <div v-html="data.departments.products.products_id.sku"></div>
              </v-card-subtitle>

              <v-card-actions>
                <v-card-title>$ {{ data.departments.products.products_id.price }}</v-card-title>
              </v-card-actions>
            </v-card>
          </a>
        </v-col>
      </div>
    </v-row><!--  -->
    <latestproducts />
    <bestsellers />
    <relatedcreators />
  </div>
</template>

<script>
  //import videobar from '../../components/Menus/videobar.vue'
  import live from '../../components/Catbar/live.vue'
  import latestproducts from '../../components/Related/latestproducts.vue'
  import bestsellers from '../../components/Related/bestsellers.vue'
  import relatedcreators from '../../components/Creators/relatedcreators.vue'

  export default {
    components: {
      //videobar,
      live,
      latestproducts,
      bestsellers,
      relatedcreators
    },
    data() {
      return {
        model: null,
        url: process.env.DIRECTUS_URL,
      }
    },
  }
</script>

<script setup>
  const query = gql `
 query  {
  departments (filter: {id: {_eq: 28}}){
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
  /*  const { getItemById, getItems } = useDirectusItems()

    const collection = await getItemById({ collection: "collection", id: 28});
    const products = await getItems({ collection: "products"}); */

  useHead({
    title: 'data.collection.name',
  })
</script>