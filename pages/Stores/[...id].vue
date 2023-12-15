<template>
    <div>
        <v-card class="lowerbar">
            <v-tabs center-active :style="`background-color: ${data.meeovistores_by_id.color}; color: ${data.meeovistores_by_id.colortext}`">
                <h5>{{ data.meeovistores_by_id.name }}</h5>
                <v-tab><a :href="`/meeovistores/${data.meeovistores_by_id.id}`">All</a></v-tab>
                <v-tab><a :href="`/categories/${data.meeovistores_by_id.categories}`">{{ data.meeovistores_by_id.categories }}</a></v-tab>
            </v-tabs>
        </v-card>

        <v-carousel :show-arrows="false" hide-delimiters>
            <img :src="`${url}assets/${data.meeovistores_by_id.image.filename_disk}`" :alt="data.meeovistores_by_id.name" contain />
        </v-carousel>

        <!--   <v-row class="productPage">
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
        <bestsellers />-->
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
                url: process.env.DIRECTUS_URL,
            }
        },
    }
</script>

<script setup>
  /*  import singleItem from '../../apollo/Queries/Single/meeovistores.js'

    const {
        data
    } = await useAsyncQuery(singleItem)

        const {
            getItems
        } = useDirectusItems()

        const products = await getItems({ collection: "products"}); */

const query = gql`
    query {
        meeovistores_by_id (id: 4) {
            id
            name
            content
            image {
            filename_disk
            }
            categories {
            id
            categories_id {
                id
                name
                content
                image {
                filename_disk
                }
            }
            }
            color
            colortext
        }
    }`

const { data } = await useAsyncQuery(query)

    useHead({
        title: data.name,
    })
</script>