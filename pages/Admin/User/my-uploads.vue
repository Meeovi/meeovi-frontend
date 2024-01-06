<template>
    <div class="contentPage">
        <profilebar />
        <section data-bs-version="5.1" class="info1 cid-tuzvvh2C2A" id="info1-3m">


            <div class="align-center container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-8">
                        <h3 class="mbr-section-title mb-4 mbr-fonts-style display-1">
                            <strong>My Uploads</strong></h3>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="features10 cid-twaJZmEpe9" id="features10-4d">
            <div class="container">
                <h3>My Products</h3>
                <v-row class="pa-4" v-if="products">
                    <v-col cols="3" v-for="(product, productIndex) in products" :key="productIndex">
                        <v-card class="ma-4" height="580" width="250" :href="`/product/${product.id}`">
                            <img class="align-end text-white" height="280"
                                :src="`${url}assets/${product.image.filename_disk}`" :alt="product.name" cover />

                            <v-card-title class="pt-4">
                                {{ product.name }}
                            </v-card-title>

                            <v-card-text>
                                <div>Sku: {{ product.sku }}</div>
                                <!-- <div v-for="(customer, productIndex) in product.products.product_id" :key="productIndex">
                            Category:
                            {{ customer.customers.customers_id.name }}</div> -->
                            </v-card-text>

                            <div class="productcardrating">
                                <v-rating hover :length="5" :size="32" :model-value="product.rating"
                                    active-color="orange" />
                            </div><!-- -->

                            <v-card-actions>
                                <v-card-title>
                                    $ {{ product.price }}
                                </v-card-title>
                            </v-card-actions>

                            <div class="align-center">
                                <v-btn class="align-center" color="orange">Add to Cart</v-btn>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </div>

            <!--   <h3>My Videos</h3>
        <div class="row justify-content-center align-items-start">
            
            <div class="card px-3 py-4 col-md-4" v-for="products in video" :key="products.id">
                <div class="card-wrapper flip-card">
                    <div class="card-img">
                        <img :src="`${url}assets/${products.image.filename_disk}`" :alt="products.name" />
                        <div class="img-text mbr-text mbr-fonts-style align-center mbr-white display-4">{{ products.type }}</div>
                    </div>
                    <div class="card-box">
                        <h3 class="mbr-title mbr-fonts-style align-center display-2">{{ products.name }}</h3>
                        <p class="mbr-card-text mbr-fonts-style align-center display-7">
                            {{ products.price }}
                        </p>
                        <div class="mbr-section-btn align-center pt-3">
                            <a :href="`/product/video/${products.id}`" class="btn btn-md btn-info display-4">View</a>
                        </div>
                    </div>
                </div>
            </div>  
        </div>-->
        </section>
    </div>
</template>

<script>
    import profilebar from '../../../components/Menus/profilebar.vue'

    const productModel = ref(null)
    export default {
        components: {
            profilebar
        },
        data: () => ({
            tab: null,
            url: process.env.DIRECTUS_URL,
        }),
    }
</script>

<script setup>
const {
        getItems
    } = useDirectusItems()

    const products = await getItems({
        collection: "products"
    });    

 /*   import product from '../../../apollo/queries-mutations_subscriptions/queries/products.gql'

    const {
        data
    } = useAsyncQuery(product);*/

    useHead({
        title: 'My Uploads',
    })
</script>