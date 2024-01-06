<template>
  <div>
    <v-card class="lowerbar">
      <v-tabs center-active>
        <h5>Meeovi {{ department.name }}</h5>
        <v-tab><a :href="`/departments/${department.id}`">All</a></v-tab>
        <v-tab><a :href="`/categories/${department.categories.categories_id.id}`">{{ department.categories.categories_id.name }}</a>
        </v-tab>
      </v-tabs>
    </v-card>

    <v-row class="productPage">
      <v-col cols="12">
        <h4>Best Sellers</h4>
        <v-sheet class="mx-auto categorySheet">
          <v-slide-group v-model="model" class="pa-4" center-active="true">
            <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle }">
              <v-card :color="isSelected ? 'primary' : 'grey-lighten-1'" class="ma-4" height="200" width="100"
                @click="toggle">
                <img class="align-end text-white" height="200" :src="`${department.products.products_id.image.filename_disk}`" :alt="department.products.product_id.name" cover />
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
          <a :href="`/product/${department.products.products_id.id}`">
            <v-card class="ma-4" height="380" width="250">
              <img class="align-end text-white" height="200" :src="`${department.products.products_id.image.filename_disk}`" :alt="department.products.product_id.name" cover />

              <v-card-title class="pt-4">
                {{ department.products.products_id.name }}
              </v-card-title>

              <v-card-subtitle>
                Sku: <div v-html="department.products.products_id.sku"></div>
              </v-card-subtitle>

              <v-card-actions>
                <v-card-title>$ {{ department.products.products_id.price }}</v-card-title>
              </v-card-actions>
            </v-card>
          </a>
        </v-col>
      </div><!---->
    </v-row>  
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
  import relatedcreators from '../../components/Related/relatedcreators.vue'

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
const { $directus, $readItem } = useNuxtApp()
const route = useRoute()

const { data: department } = await useAsyncData('departments', () => {
  return $directus.request(
    $readItem('departments', route.params.slug, {
      fields: ['*', { '*': ['*'] }]
    })
  )
})/*; */

  useHead({
    title: 'collection.name',
  })
</script>