<template>
    <div>
        <profilebar />
        <v-row class="profilePage">
            <section data-bs-version="5.1" class="mbr-section features13 cid-txNjPsul0g mbr-parallax-background"
                id="features13-4p">



                <div class="mbr-overlay" style="opacity: 0.8; background-color: rgb(255, 255, 255);">
                </div>

                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 text-row col-md-6">
                            <h2 class="align-center pb-3 mbr-fonts-style display-2">
                                Coupons</h2>
                        </div>
                        <div class="card px-3 py-4 col-12 col-md-6 col-lg-4 col-xl-3" v-for="coupons in coupons" :key="coupons">
                            <div class="card-wrapper">
                                <div class="card-img">
                                    <img :src="`${url}assets/${coupons.image.filename_disk}`" :alt="coupons.name" />
                                </div>
                                <div class="card-box">
                                    <p class="mbr-text mbr-fonts-style align-center display-7">
                                        {{coupons.excerpt}}
                                    </p>
                                    <div class="mbr-section-btn card-btn align-center">
                                        <a :href="`/lists/${coupons.id}`" class="btn btn-secondary display-4">
                                            BUY
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </v-row>
    </div>
</template>

<script>
    import profilebar from '../../components/Menus/profilebar.vue'

    export default {
        components: {
            profilebar
        },
    }
</script>

<script setup>
const {
        getItems
    } = useDirectusItems()

    const coupons = await getItems({
        collection: "coupons"
    });    

    useHead({
        title: 'Coupons',
    })
</script>