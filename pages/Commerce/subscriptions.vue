<template>
    <div class="contentPage">
        <profilebar />
        <v-row>
            <v-col cols="12">
                <v-toolbar title="Your Subscriptions" subtitle=""></v-toolbar>
                <v-row class="accountRow">
                    <v-col cols="3" v-for="(products, index) in data?.products?.items" :key="index">
                        <v-card class="mx-auto" max-width="400">
                            <v-img class="align-end text-white" height="200"
                            :src="products?.image?.url" :alt="products?.name" cover>
                                <v-card-title>Top 10 Australian beaches</v-card-title>
                            </v-img>

                            <v-card-subtitle class="pt-4">
                                Category: {{ products?.categories?.name }}
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Manufacturer: {{ products?.manufacturer }}</div>

                                <div>{{ products?.regularPrice?.amount?.currency }} {{ products?.regularPrice?.amount?.value }}</div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="orange">
                                    Archive Order
                                </v-btn>

                                <v-btn color="red" href="`/commerce/subscriptions/`">
                                    Manage subscription
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="12">
                <v-toolbar title="Subscriptions" subtitle=""></v-toolbar>
                <v-row class="accountRow">
                    <v-col cols="3" v-for="(products, index) in data?.products?.items" :key="index">
                        <v-card class="mx-auto" max-width="400">
                            <v-img class="align-end text-white" height="200"
                                :src="products?.image?.url" cover>
                                <v-card-title>{{ products?.name }}</v-card-title>
                            </v-img>

                            <v-card-subtitle class="pt-4">
                                Category: {{ products?.categories?.name }}
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Manufacturer: {{ products?.manufacturer }}</div>

                                <div>{{ products?.regularPrice?.amount?.currency }} {{ products?.regularPrice?.amount?.value }}</div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="orange">
                                    Subscribe
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import profilebar from '../../components/Menus/profilebar.vue'
    const productModel = ref(null)

    export default {
        components: {
            profilebar
        },
        data: () => ({
            model: null,
            url: process.env.DIRECTUS_URL,
        }),
        setup() {
            return {
                productModel,
            }
        },
    }
</script>

<script setup>
const query = gql`
query MyQuery {
  products(filter: {price: {from: "0"}, format: {eq: "Subscription"}}) {
    items {
      categories {
        name
        image
      }
      format
      id
      is_featured
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
      sale
      sku
      image {
        url
      }
      manufacturer
      special_price
      size
    }
  }
}

`
  const {
    data
  } = await useAsyncQuery(query)

    useHead({
        title: 'Subscriptions',
    })
</script>