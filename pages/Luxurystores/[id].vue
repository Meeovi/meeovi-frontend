<template>
    <div>
        <live />
        <v-card class="lowerbar">
            <v-tabs :style="`background-color:${data.department.data.attributes.color}; color:${data.department.data.attributes.colortext};`" center-active>
                <h5>{{ data.department.data.attributes.Name }}</h5>
                <v-tab><a :href="`/departments/${data.department.data.attributes.id}`">All</a></v-tab>
                <v-tab><a :href="`/categories/${data.department.data.attributes.categories}`">{{ data.department.data.attributes.categories }}</a></v-tab>
            </v-tabs>
        </v-card>

        <v-carousel>
            <v-carousel-item :src="data.department.data.attributes.media" cover></v-carousel-item>
        </v-carousel>

        <v-row class="categoryPage" :style="`background-color:${data.department.data.attributes.color};`">
            <v-col cols="12">
                <h4 :style="`color:${data.department.data.attributes.colortext};`">Popular Content</h4>
                <v-sheet class="mx-auto categorySheet">
                    <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
                        <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle }">
                            <v-card :color="isSelected ? 'primary' : 'grey-lighten-1'" class="ma-4" height="200"
                                width="100" @click="toggle">
                                <v-img class="align-end text-white" height="200"
                                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                                </v-img>
                                <div class="d-flex fill-height align-center justify-center">
                                    <v-scale-transition>
                                        <v-icon v-if="isSelected" color="white" size="48"
                                            icon="mdi-close-circle-outline"></v-icon>
                                    </v-scale-transition>
                                </div>
                            </v-card>
                        </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </v-col>
        </v-row>

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
                model: null,
            }
        },
    }
</script>

<script setup>
const route = useRoute()

const query = gql`
    query getDepartment($id: ID!) {
    department(id: $id){
        data {
        id
        attributes {
            Name
            color
            colortext
            categories {
            data {
                attributes {
                Name
                }
            }
            }
            products {
            data {
                attributes {
                Name
                price
                media {
                    data {
                    attributes {
                        name
                    }
                    }
                }
                }
            }
            }
            
        }
        }
    }
    }`

const { data } = useAsyncQuery(query);

    useHead({
        title: 'Meeovi ' + route.params.id,
    })
</script>