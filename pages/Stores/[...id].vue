<template>
    <div class="contentPage">
        <v-card variant="text">
            <v-tabs center-active>
                <h5>{{ data?.categories?.items?.name }}</h5>
                <v-tab><a :href="`/stores/${data?.categories?.items?.uid}`">All</a></v-tab>
                <v-tab><a :href="`/departments/categories/${data?.categories?.items?.children?.path}`">{{ data?.categories?.items?.children?.name }}</a></v-tab>
            </v-tabs>
        </v-card>

        <v-carousel :show-arrows="false" hide-delimiters>
            <img :src="`${data?.categories?.items?.image}`" :alt="data?.categories?.items?.name" contain />
        </v-carousel>

        <v-row class="productPage">
            <v-col cols="3" v-for="(products, index) in data?.categories?.products?.items" :key="index">
                <a href="">
                    <v-card class="ma-4" height="380" width="250" @click="toggle">
                        <img class="align-end text-white" height="200" :src="products?.image?.url" cover />

                        <v-card-title class="pt-4">
                            {{ products?.name }}
                        </v-card-title>

                        <v-card-subtitle>
                            Format: <div v-html="products?.format"></div>
                            Manufacturer: <div v-html="products?.manufacturer"></div>
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-card-title>{{ products?.price?.regularPrice?.amount?.currency }} {{ products?.price?.regularPrice?.amount?.value }}</v-card-title>

                            <v-btn color="orange" variant="outlined" prepend-icon="fas fa-shopping-cart">Add to Cart</v-btn>
                        </v-card-actions>
                    </v-card>
                </a>
            </v-col>
        </v-row><!---->
        <latestproducts />
        <bestsellers />
        <relatedcreators />
    </div>
</template>

<script>
    //import videobar from '../../components/menus/videobar.vue'
    import latestproducts from '../../components/related/latestproducts.vue'
    import bestsellers from '../../components/related/bestsellers.vue'
    import relatedcreators from '../../components/related/relatedcreators.vue'

    export default {
        components: {
            //videobar,
            latestproducts,
            bestsellers,
            relatedcreators
        },
        data() {
            return {
                url: process.env.DIRECTUS_URL,
            }
        },
    }
</script>

<script setup>
import gql from 'graphql-tag'

const query = gql`
query MyQuery {
  categories(filters: {ids: {eq: "83"}}) {
    items {
      id
      description
      image
      name
      products {
        items {
          format
          image {
            url
          }
          is_featured
          manufacturer
          name
          only_x_left_in_stock
          price {
            regularPrice {
              amount {
                currency
                value
              }
            }
          }
          review_count
          rating_summary
          sale
          uid
        }
      }
      children {
        id
        name
        path
      }
    }
  }
}

`

const { data } = await useAsyncQuery(query)

    useHead({
        title: data?.name,
    })
</script>