<template>
    <div>
        <section data-bs-version="5.1" class="pricing6 shopm5 cid-tZPDtxeZjg" id="apricing6-69"
            data-sortbtn="btn-primary">


            <div class="container-fluid">
                <div class="row align-items-stretch items-row justify-content-center">

                    <div class="col-12 col-md-12 col-lg-6">
                        <div class="mbr-section-head">
                            <h4 class="mbr-section-title mbr-fonts-style mb-0 display-7">
                                <strong>Meeovi's</strong>
                            </h4>
                            <h5 class="mbr-section-subtitle mbr-fonts-style mb-0 display-2">
                                <strong>{{ outletPixanomy?.name || 'Featured Picks' }}</strong>
                            </h5>
                            <h5 class="main-text mbr-fonts-style mb-0 display-7" v-dompurify-html="outletPixanomy?.description || ''">
                            </h5>
                            <div class="mbr-section-btn item-footer">
                                <NuxtLink :to="toDepartmentPath(outletPixanomy?.slug || '')"
                                    class="btn btn-danger item-btn display-7" target="_blank">
                                    <span class="mobi-mbri mobi-mbri-arrow-next mbr-iconfont mbr-iconfont-btn"></span>
                                    Shop Now
                                </NuxtLink>
                            </div>
                        </div>
                    </div>


                    <div class="item features-image col-12 col-md-6 col-lg-3">
                        <v-sheet class="mx-auto" style="background-color: transparent; box-shadow: none;">
                            <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                                <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"
                                    v-for="products in (outletPixanomy?.products || [])" :key="products">
                                    <productCard :product="products?.products_id" :class="['ma-4', selectedClass]"
                                        @click="toggle" />
                                    <div class="d-flex fill-height align-center justify-center">
                                        <v-scale-transition>
                                            <v-icon v-if="isSelected" color="white" icon="fas fa-circle-xmark"
                                                size="48"></v-icon>
                                        </v-scale-transition>
                                    </div>
                                </v-slide-group-item>
                            </v-slide-group>
                        </v-sheet>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import { useRoutePath } from '#shared/app/composables/routing/useRoutePath'
    import ProductCard from '#commerce/app/components/catalog/product/productCard.vue'

    const model = ref(null)
    const { joinRoutePath } = useRoutePath()
    const toDepartmentPath = (slug) => joinRoutePath('/departments', slug)

    const { $directus, $readItem, $readItems } = useNuxtApp()

    const {
        data: outletPixanomy
    } = await useAsyncData('outletPixanomy', async () => {
        try {
            const resp = await $directus.request($readItem('departments', '89', {
                fields: [
                    '*',
                    'products.products_id.*',
                    'products.products_id.image.*',
                    'image.*'
                ],
            }))
            return resp?.data || resp || {}
        } catch {
            return null
        }
    })
</script>