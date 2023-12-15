<template>
    <div>
        <div class="contentPage" v-for="pages in pages" :key="pages.id">
            <div v-html="pages.content"></div>
        <v-row>
            <v-col v-for="products in products" :key="products.id" cols="2">
                <a :href="`/product/${products.id}`">
                    <v-card class="ma-4" height="380" width="250" @click="toggle">
                        <v-img class="align-end text-white" height="200" :src="products.image.directus_files_id" cover></v-img>

                        <v-card-title class="pt-4">
                            {{ products.name }}
                        </v-card-title>

                        <v-card-text>
                            <div>tags: {{ products.tags }}</div>
                            <div>Category: {{ products.categories }}</div>
                        </v-card-text>

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
        </div>
        <!---->
    </div>
</template>

<script>
    export default {
        data: () => ({
            url: process.env.DIRECTUS_URL,
        }),
    }
</script>

<script setup>
const { getItems } = useDirectusItems()

const products = await getItems({ collection: "products", params: {filter: {price: {_between: "19.99"}}, limit: 50 }});
const pages = await getItems({ collection: "pages", params: {filter: {name: "Deals"}}});
</script>