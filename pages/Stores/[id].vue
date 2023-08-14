<template>
    <div>
        <v-card class="lowerbar">
            <v-tabs center-active>
                <h5>Meeovi {{ meeovistores.name }}</h5>
                <v-tab><a :href="`/meeovistores/${meeovistores.id}`">All</a></v-tab>
                <v-tab><a :href="`/categories/${meeovistores.categories}`">{{ meeovistores.categories }}</a></v-tab>
            </v-tabs>
        </v-card>

        <v-carousel>
            <img :src="`${url}/assets/${meeovistores.image}`" :alt="meeovistores.name" cover />
        </v-carousel>

        <v-row class="productPage">
            <v-col cols="3" v-for="products in products" :key="products.id">
                <a href="">
                    <v-card class="ma-4" height="380" width="250" @click="toggle">
                        <img class="align-end text-white" height="200" :src="products.image" cover />

                        <v-card-title class="pt-4">
                            {{ products.name }}
                        </v-card-title>

                        <v-card-subtitle>
                            Format: <div v-html="products.format"></div>
                            Category: <div v-html="products.categories"></div>
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-card-title>$ {{ products.price }}</v-card-title>
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
                url: 'http://meeovicms.com:8011'
            }
        },
    }
</script>

<script setup>
    useHead({
        title: meeovistores.name,
    })

    const {
        getItems
    } = useDirectusItems()

    const meeovistores = await getItems({ collection: "Meeovistores", id: 1});
    const products = await getItems({ collection: "products"});
</script>