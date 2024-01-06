<template>
    <div class="contentPage">
        <section v-for="departments in departments" :key="departments" data-bs-version="5.1"
            class="header3 cid-sqn8aWIxpX" id="header3-15"
            :style="`background-image: url(${url}assets/${departments.image.filename_disk});`">
            <div class="mbr-overlay" style="opacity: 0.3; background-color: rgb(187, 187, 187);"></div>
            <div class="align-center container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-6">
                        <h1 class="mbr-section-title mbr-fonts-style mb-3 display-1">
                            <strong>{{ departments.name }}</strong>
                        </h1>
                        <p class="mbr-text mbr-fonts-style display-7" style="background-color: transparent;"
                            v-html="departments.content">
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <v-row>
            <v-col v-for="products in products" :key="products.id" cols="2">
                <a :href="`/product/${products.id}`">
                    <v-card class="ma-4" height="580" width="250" @click="toggle">
                        <img class="align-end text-white" height="280"
                            :src="`${url}assets/${products.image.directus_files_id}`" cover />

                        <v-card-title class="pt-4">
                            {{ products.name }}
                        </v-card-title>

                        <v-card-text>
                            <div>Tags: {{ products.tags }}</div>
                            <div>Category: {{ products.categories }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-card-title>$ {{ products.price }}</v-card-title>
                        </v-card-actions>
                    </v-card>
                </a>
            </v-col>
        </v-row>
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
    const {
        getItems
    } = useDirectusItems()

    const departments = await getItems({
        collection: "departments",
        params: {
            filter: {
                name: {
                    _eq: "Deals"
                }
            }
        }
    });
    const products = await getItems({
        collection: "products",
        params: {
            limit: 50,
            filter: {
                price: {
                    _lte: 20
                }
            }
        },
    });

    /*import query from '../apollo/Custom/Queries/deals'

    const {
        data
    } = await useAsyncQuery(query) */

    useHead({
        title: 'Deals'
    })
</script>