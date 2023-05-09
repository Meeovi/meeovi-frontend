<template>
    <v-sheet class="mx-auto sliderProducts">
        <h4>Featured Products</h4>
        <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="products in data.products" :key="products.id"
                v-slot="{ isSelected, toggle }">
                <a :href="`/product/${products.id}`">
                    <v-card class="ma-4" height="380" width="250" @click="toggle">
                        <v-img class="align-end text-white" height="200" :src="`${url}assets/${products.image.filename_disk}`" cover>
                        </v-img>

                        <v-card-title class="pt-4">
                            {{ products.name }}
                        </v-card-title>

                        <v-card-text>
                            <div>By: {{ products.id }}</div>
                            <div>Category: </div>
                        </v-card-text>

                        <v-card-actions>
                            <v-card-title>$ {{ products.price }}</v-card-title>
                        </v-card-actions>
                        <div class="d-flex fill-height align-center justify-center">
                            <v-scale-transition>
                                <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline">
                                </v-icon>
                            </v-scale-transition>
                        </div>
                    </v-card>
                </a>
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>

<script>
    export default {
        data: () => ({
            model: null,
            url: process.env.DIRECTUS_URL
        }),
    }
</script>

<script setup>
    const query = gql `
    query {
        products {
            id
            name
            image {
                filename_disk
            }
            price
        } 
    }`


    const {
        data
    } = useAsyncQuery(query);
</script>