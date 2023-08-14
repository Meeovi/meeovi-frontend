<template>
    <div>
        <section data-bs-version="5.1" class="header7 cid-skeQvIFMjk mbr-fullscreen" id="header7-l">



            <div class="mbr-overlay" style="opacity: 0.8; background-color: rgb(53, 53, 53);"></div>

            <div class="text-right container">
                <div class="row justify-content-center" v-for="pages in pages" :key="pages.id">
                    <div class="col-12 col-lg-5">
                        <h1 class="mbr-section-title mbr-fonts-style mb-3 display-1"><strong>{{ pages.name }}</strong>
                        </h1>

                        <p class="mbr-text mbr-fonts-style display-7">{{ pages.content }}
                            <br></p>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="features1 cid-skeQyeLeZS" id="features2-m">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <span class="mbr-iconfont mobi-mbri-devices mobi-mbri"></span>
                                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                                    <strong>Audio &amp; Video Ads</strong></h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <span class="mbr-iconfont mobi-mbri-sale mobi-mbri"></span>
                                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                                    <strong>Offer Discounts</strong></h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <span class="mbr-iconfont mobi-mbri-bulleted-list mobi-mbri"></span>
                                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                                    <strong>Groups &amp; Newsfeed</strong></h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <span class="mbr-iconfont mobi-mbri-sites mobi-mbri"></span>
                                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                                    <strong>Live Streaming</strong></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="features1 cid-skeWbJy9yT" id="features1-t">



            <div class="container-fluid">
                <div class="row">

                </div>
                <div class="row">
                    <div class="card col-12 col-md-6 col-lg-3">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <div class="iconfont-wrapper">
                                    <span class="mbr-iconfont mobi-mbri-cart-full mobi-mbri"></span>
                                </div>
                                <h5 class="card-title mbr-fonts-style display-7"><strong>Sell Your Way</strong></h5>
                                <p class="card-text mbr-fonts-style display-7">Create shops that is design by you. With
                                    your own banners, images, information, products, links to your site, and more.
                                    <br></p>
                            </div>
                        </div>
                    </div>
                    <div class="card col-12 col-md-6 col-lg-3">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <div class="iconfont-wrapper">
                                    <span class="mbr-iconfont mobi-mbri-browse mobi-mbri"></span>
                                </div>
                                <h5 class="card-title mbr-fonts-style display-7"><strong>Your Control</strong></h5>
                                <p class="card-text mbr-fonts-style display-7">You choose where you want your products
                                    to sell across the world. Rather its only for your local community, a specific
                                    country, city, state, or continent. You are in control.
                                    <br></p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="features4 cid-skeQz2DDoa" id="features4-n">

            <div class="mbr-overlay"></div>
            <div class="container">
                <div class="mbr-section-head">
                    <h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong>Oh My Meeovi!!
                        </strong></h4>
                    <h5 class="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 display-5">Simple to get
                        started, Simple Transactions, Simple Everything
                    </h5>
                </div>
                <div class="row mt-4">
                    <div class="item features-image сol-12 col-md-6 col-lg-4" v-for="pages in pages" :key="pages.id">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <img :src="`${url}/assets/${pages.media}`" :alt="pages.name" />
                            </div>
                            <div class="item-content">
                                <h5 class="item-title mbr-fonts-style display-5"><strong>{{ pages.list.name }}</strong>
                                </h5>

                                <p class="mbr-text mbr-fonts-style mt-3 display-7">{{ pages.list.description }}
                                    <br>
                                    <br></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

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
        title: 'Sellers',
    })

    const {
        getItems
    } = useDirectusItems()

    const pages = await getItems({
        collection: "pages",
        params: {
            filter: {
                name: {
                    _eq: "Sellers"
                }
            }
        }
    });
    const products = await getItems({
        collection: "products",
        limit: 6
    });
</script>