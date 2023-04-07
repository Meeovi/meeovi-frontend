<template>
    <div>
        <v-toolbar title="Exclusives" color="orange"></v-toolbar>
        <v-row class="productPage">
            <v-col cols="3">
                <a href="">
                    <v-card class="mx-auto" max-width="300">
                        <v-img class="align-end text-white" height="200"
                            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                        </v-img>

                        <v-card-title class="pt-4">
                            Product Name
                        </v-card-title>

                        <v-card-text>
                            <div>By: Seller</div>

                            <div>Excerpt</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-card-title>$ 59</v-card-title>
                            <v-btn color="orange">
                                Buy Now
                            </v-btn>

                            <v-btn color="orange">
                                Share
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </a>
            </v-col>
        </v-row>
        <latestproducts />
        <bestsellers />
        <relatedcreators />
    </div>
</template>

<script>
    import latestproducts from '../../components/Related/latestproducts.vue'
    import bestsellers from '../../components/Related/bestsellers.vue'
    import relatedcreators from '../../components/Creators/relatedcreators.vue'

    export default {
        components: {
            latestproducts,
            bestsellers,
            relatedcreators
        },
        data: () => ({
            model: null,
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Exclusives',
    })
</script>