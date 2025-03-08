<template>
    <div>
        <!---->
        <section data-bs-version="5.1" class="firmm4_features1 features1 cid-uhBuptnWmV" id="features1-9v"
            data-sortbtn="btn-primary">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 title_block">
                        <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                            <strong>Downloads</strong></h3>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="card col-12 col-lg-3 col-md-6 col-sm-6"
                        v-for="(downloads, index) in result?.customerDownloadableProducts?.items" :key="index">
                        <div class="card_wrapper">
                            <div class="card-box">
                                <div class="icon_block">
                                    <div class="iconfont-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-cart-full mobi-mbri"></span>
                                    </div>
                                </div>
                                <p class="card-text mbr-fonts-style display-4">Order Increment ID:
                                    {{ downloads?.order_increment_id }}</p>
                                <p class="card-text mbr-fonts-style display-4">Status:
                                    {{ downloads?.status }}</p>
                                <p class="card-text mbr-fonts-style display-4">Remaining Downloads:
                                    {{ downloads?.remaining_downloads }}</p>
                                <p class="btn_link mbr-fonts-style display-4"><NuxtLink :to="downloads?.download_url"
                                        class="text-secondary">View<span
                                            class="mobi-mbri mobi-mbri-right mbr-iconfont"></span></NuxtLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    //
    import {
        useQuery
    } from '@vue/apollo-composable'
    import downloads from '~/graphql/commerce/queries/downloads.js'
    const route = useRoute();
    const model = ref(null)

    const {
        result
    } = useQuery(downloads);

    useHead({
        title: 'My Downloads',
    })
</script>