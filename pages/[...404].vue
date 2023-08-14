<template>
    <div v-for="pages in pages" :key="pages">
       <div class="contentPage" v-html="pages.content"></div>
       <v-sheet class="mx-auto sliderProducts">
            <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
                <v-slide-group-item v-for="products in products" :key="products.id" v-slot="{ isSelected, toggle }">
                    <a :href="`/product/${products.id}`">
                        <v-card class="ma-4" height="380" width="250" @click="toggle">
                            <v-img class="align-end text-white" height="200" :src="products.image.directus_files_id"
                                cover></v-img>

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
                                    <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline">
                                    </v-icon>
                                </v-scale-transition>
                            </div>
                        </v-card>
                    </a>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>

<script>
    export default {
        data: () => ({
            model: null,
            url: 'http://meeovicms.com:8011'
        }),
    }
</script>

<script setup>
    useHead({
        title: '404, Error Page',
    })

    const {
        getItems
    } = useDirectusItems()

    const pages = await getItems({
        collection: "pages",
        params: {
            filter: {
                name: {
                    _eq: "404"
                }
            }
        }
    });
    const products = await getItems({
        collection: "products",
        limit: 6
    });
</script>