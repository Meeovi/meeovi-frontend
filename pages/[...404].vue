<template>
    <div v-for="pages in pages" :key="pages">
        <div class="contentPage" v-html="pages.content"></div>
        <v-row>
            <h3>However, since you are here</h3>
            <v-col cols="3" v-for="products in data.products.items" :key="products.id">
                <a :href="`/product/${products.id}`">
                    <v-card class="ma-4" height="380" width="250">
                        <img class="align-end text-white" height="200" :src="`${products.featuredAsset.preview}`"
                            :alt="products.name" cover />

                        <v-card-title class="pt-4">
                            {{ products.name }}
                        </v-card-title>

                        <v-card-text>
                            <div>Sku: {{ products.variants[0].sku }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-card-title>$ {{ products.variants[0].price }}
                            </v-card-title>
                        </v-card-actions>
                    </v-card>
                </a></v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        data: () => ({
            //model: null,
            url: 'http://meeovicms.com:3000'
        }),
    }
</script>

<script setup>
    const query = gql `
   query {
    products (options: {take: 10}) {
        items {
        id
        name
        featuredAsset {
            id
            preview
        }
        variants {
            price
            sku
        }
        }
    }
    }`

    const {
        data
    } = await useAsyncQuery(query)

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
    /* const products = await getItems({
         collection: "products",
         limit: 6
     }); */
</script>