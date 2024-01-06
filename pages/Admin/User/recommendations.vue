<template>
    <div class="contentPage">
        <v-row class="pa-4" v-if="products">
            <v-col cols="3" v-for="(product, productIndex) in products" :key="productIndex">
                <v-card class="ma-4" height="580" width="250" :href="`/product/${product.id}`">
                    <img class="align-end text-white" height="280" :src="`${url}assets/${product.image.filename_disk}`"
                        :alt="product.name" cover />

                    <v-card-title class="pt-4">
                        {{ product.name }}
                    </v-card-title>

                    <v-card-text>
                        <div>Sku: {{ product.sku }}</div>
                       <!-- <div v-for="(customer, productIndex) in product.products.product_id" :key="productIndex">
                            Category:
                            {{ customer.customers.customers_id.name }}</div> -->
                    </v-card-text>

                    <div class="productcardrating">
                        <v-rating hover :length="5" :size="32" :model-value="product.rating"
                            active-color="orange" />
                    </div><!-- -->

                    <v-card-actions>
                        <v-card-title>
                           $ {{ product.price }}
                        </v-card-title>
                    </v-card-actions>

                    <div class="align-center">
                        <v-btn class="align-center" color="orange">Add to Cart</v-btn>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        data: () => ({
            tab: null,
            url: process.env.DIRECTUS_URL,
        }),
    }
</script>

<script setup>
const {
        getItems
    } = useDirectusItems()

    const products = await getItems({
        collection: "products",
        limit: 12
    });    

  /*  import products from '../../../apollo/queries-mutations_subscriptions/queries/products.gql'

    const {
        data
    } = useAsyncQuery(products); */

    useHead({
        title: 'Recommendations',
    })
</script>