<template>
    <v-sheet class="mx-auto sliderProducts">
        <h4>Recently Viewed</h4>
        <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
                    <v-slide-group-item v-for="products in data.products.items" :key="products.id"
                      v-slot="{ isSelected, toggle }">
                      <a :href="`/product/${products.id}`">
                            <v-card class="ma-4" height="380" width="250" @click="toggle">
                                <img class="align-end text-white" height="200" :src="`${products.featuredAsset.preview}`" :alt="products.name" cover />
  
                                <v-card-title class="pt-4">
                                    {{ products.name }}
                                </v-card-title>
  
                                <v-card-text>
                                    <div>Sku: {{ products.variants.sku }}</div>
                                </v-card-text>
  
                                <v-card-actions>
                                    <v-card-title>$ {{ products.variants.price }}
                                    </v-card-title>
                                </v-card-actions>
                                <div class="d-flex fill-height align-center justify-center">
                                    <v-scale-transition>
                                        <v-icon v-if="isSelected" color="white" size="48"
                                            icon="mdi-close-circle-outline"></v-icon>
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
          url: 'http://meeovicms.com:8011'
      }),
  }
</script>

<script setup>
const query = gql`
 query {
  products (options: {take: 6}) {
    items {
      id
      name
      featuredAsset {
        id
        preview
      }
      variants {
        price
        sku
      }
    }
  }
}
`
const { data } = await useAsyncQuery(query)

/*
const { getItems } = useDirectusItems()

const products = await getItems({ collection: "products"});
const departments = await getItems({ collection: "departments", params: {filter: {name: {_eq: "Yardsale"}}}, limit: 6 });*/
</script>