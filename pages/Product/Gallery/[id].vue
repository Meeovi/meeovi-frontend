<template>
    <div class="contentPage">
        <v-row>
            <v-col cols="12">
                <v-toolbar color="orange">
                    <v-avatar image="https://cdn.vuetifyjs.com/images/john.jpg" rounded="0" size="70"></v-avatar>

                    <v-list-item>By: John Doe</v-list-item>
                    <v-list-item>(123,456) Views</v-list-item>
                </v-toolbar>
                <v-carousel>
                    <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

                    <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

                    <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
                </v-carousel>

                <v-toolbar color="transparent">
                    <v-list-item>Showcase Name</v-list-item>

                    <v-spacer></v-spacer>

                    <v-btn icon="fas fa-thumbs-up"></v-btn>
                    <v-btn icon="fas fa-bookmark"></v-btn>
                </v-toolbar>
            </v-col>

            <v-col cols="12">
                <v-expansion-panels>
                    <v-expansion-panel title="Comments ()" color="orange">
                        <v-expansion-panel-text><comments /></v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>

            <v-col cols="4">
                <!--<a :href="`/product/${products.id}`">
                    <v-card class="ma-4" height="380" width="250" @click="toggle">
                        <img class="align-end text-white" height="200" :src="`${products.featuredAsset.preview}`"
                            :alt="products.name" cover />

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
                                <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline">
                                </v-icon>
                            </v-scale-transition>
                        </div>
                    </v-card>
                </a>-->
            </v-col>
        </v-row>
        <!--<recentlyviewed />-->
    </div>
</template>

<script>
    import recentlyviewed from '../../../components/Related/recentlyviewed.vue'
    import comments from '../../../components/user/comments.vue'

    export default {
        components: {
            recentlyviewed,
            comments
        },
    }
</script>

<script setup>
    useHead({
        title: '',
    })
</script>