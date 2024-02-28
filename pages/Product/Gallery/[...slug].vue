<template>
    <div class="contentPage">
        <v-row>
            <v-col cols="12">
                <v-toolbar color="orange">
                    <v-avatar image="https://cdn.vuetifyjs.com/images/john.jpg" rounded="0" size="70"></v-avatar>

                    <v-list-item>By: {{ data?.customer?.firstname }} {{ data?.customer?.lastname }}</v-list-item>
                    <v-list-item>(123,456) Views</v-list-item>
                </v-toolbar>
                <v-carousel>
                    <v-carousel-item :src="data?.customer?.wishlist?.items_v2?.items?.product?.media_gallery?.url" cover></v-carousel-item>
                </v-carousel>

                <v-toolbar color="transparent">
                    <v-list-item>{{ data?.customer?.wishlist?.items_v2?.items?.product?.name }}</v-list-item>

                    <v-spacer></v-spacer>

                    <v-btn icon="fas fa-thumbs-up"></v-btn>
                    <v-btn icon="fas fa-bookmark"></v-btn>
                </v-toolbar>
            </v-col>

            <v-col cols="12">
                <v-expansion-panels>
                    <v-expansion-panel :title="`Comments (${data?.customer?.wishlist?.items_v2?.items?.product?.review_count})`" color="orange">
                        <v-expansion-panel-text>
                            <comments />
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>

            <!--List of products in the Showcase-->
            <div class="productPage">
                <v-col cols="3">
                    <a :href="`/product/${data?.customer?.wishlist?.items_v2?.items?.product?.uid}`">
                        <v-card class="ma-4" height="380" width="250">
                            <img class="align-end text-white" height="200"
                                :src="`${data?.customer?.wishlist?.items_v2?.items?.product?.image?.url}`" :alt="data?.customer?.wishlist?.items_v2?.items?.product?.name"
                                cover />

                            <v-card-title class="pt-4">
                                {{ data?.customer?.wishlist?.items_v2?.items?.product?.name }}
                            </v-card-title>

                            <v-card-subtitle>
                                Sku: <div v-html="data?.customer?.wishlist?.items_v2?.items?.product?.sku"></div>
                            </v-card-subtitle>

                            <v-card-actions>
                                <v-card-title>{{ data?.customer?.wishlist?.items_v2?.items?.product?.price?.regularPrice?.amount?.currency }}
                                    {{ data?.customer?.wishlist?.items_v2?.items?.product?.price?.regularPrice?.amount?.value }}</v-card-title>
                            </v-card-actions>
                        </v-card>
                    </a>
                </v-col>
            </div>
        </v-row>
        <!--<recentlyviewed />-->
    </div>
</template>

<script>
    import recentlyviewed from '../../../components/related/recentlyviewed.vue'
    import comments from '../../../components/user/comments.vue'

    export default {
        components: {
            recentlyviewed,
            comments
        },
    }
</script>

<script setup>
const query = gql `
query {
  customer {
    firstname
    lastname
    wishlist {
      items_v2 {
        items {
          product {
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
            rating_summary
            color
            created_at
            description {
              html
            }
            format
            manufacturer
            media_gallery {
              url
            }
            only_x_left_in_stock
            review_count
            reviews {
              items {
                nickname
                summary
                text
                average_rating
                created_at
                ratings_breakdown {
                  name
                  value
                }
              }
            }
            short_description {
              html
            }
            size
            sku
          }
          description
        }
      }
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);

    useHead({
        title: '',
    })
</script>