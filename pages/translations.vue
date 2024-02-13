<template>
    <div class="contentPage">
        <section data-bs-version="5.1" class="header7 cid-u4854TEjNF mbr-fullscreen mbr-parallax-background"
            id="header7-81" data-sortbtn="btn-primary">
            <div class="mbr-overlay" style="opacity: 0.1; background-color: rgb(53, 53, 53);"></div>

            <div class="text-right container">
                <div class="row">
                    <div class="col-12 col-lg-5">
                        <h1 class="mbr-section-title mbr-fonts-style mb-3 display-1"><strong>Meeovi Global</strong></h1>

                        <p class="mbr-text mbr-fonts-style display-7">
                            Select your preferred country/region website. This will update the products, layout, and
                            overall content to match that part of the world.</p>
                        <div class="mbr-section-btn mt-3">
                            <v-menu>
                                <template v-slot:activator="{ props }">
                                    <v-btn class="btn btn-primary display-4" color="primary" v-bind="props" size="large">
                                        United Kingdom
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <a class="btn btn-primary display-4" href="/">Cancel</a>
                            <a class="btn btn-primary display-4" href="#">Go To Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="info2 cid-u484XKQJui" id="info2-80" data-sortbtn="btn-primary">
            <div class="align-center container">
                <div class="row justify-content-center">
                    <div class="card col-12 col-lg-6">
                        <div class="wrapper">
                            <h3 class="mbr-section-title mb-4 mbr-fonts-style display-5">
                                <strong>Meeovi Help</strong>
                            </h3>
                            <p class="mbr-text mb-4 mbr-fonts-style display-4">
                                Visit our <a href="/help/" class="text-black" target="_blank">Help Center</a> for more
                                information about switching to a different Meeovi website.</p>

                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="wrapper">
                            <h3 class="mbr-section-title mbr-fonts-style mb-4 display-5">
                                <strong>Changing country/region website</strong></h3>
                            <p class="mbr-text mbr-fonts-style mb-4 display-4">Changing the country/region you shop from
                                may affect factors including price, shipping options and product availability.&nbsp;<br>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import relatedproducts from '../components/Related/relatedproducts.vue'
    import recentlyviewed from '../components/Related/recentlyviewed.vue'
    import relatedcreators from '../components/Related/relatedcreators.vue'

    export default {
        components: {
            relatedproducts,
            recentlyviewed,
            relatedcreators
        },
    }
</script>

<script setup>
    const {
        getItems
    } = useDirectusItems()

    const pages = await getItems({
        collection: "pages",
        params: {
            filter: {
                name: {
                    _eq: "Translations"
                }
            }
        }
    });

    useHead({
        title: 'Change Meeovi to your country'
    })
</script>