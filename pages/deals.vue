<template>
    <div>
        <div class="contentPage" v-for="cmspage in data" :key="cmspage">
            <div v-html="cmspage.content"></div></div>
        <v-row>
            <v-col v-for="products in data.products.items" :key="products.uid" cols="2">
                <a :href="`/product/${products.uid}`">
                    <v-card class="ma-4" height="380" width="250" @click="toggle">
                        <v-img class="align-end text-white" height="200" :src="products.image.url" cover></v-img>

                        <v-card-title class="pt-4">
                            {{ products.name }}
                        </v-card-title>

                        <v-card-text>
                            <div>By: {{ products.uid }}</div>
                            <div>Category: {{ products.categories.name }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-card-title>$ {{ products.price_range.maximum_price.regular_price.value }}</v-card-title>
                        </v-card-actions>
                        <div class="d-flex fill-height align-center justify-center">
                            <v-scale-transition>
                                <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
                            </v-scale-transition>
                        </div>
                    </v-card>
                </a>
            </v-col>
        </v-row>
        
        <!---->
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>
    useHead({
        title: 'Deals',
    })

    const query = gql `
    query {
    cmsPage(identifier: "deals") {
        title
        content
        relative_url
    }
    products(filter: {price: {to: "50"}}){
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