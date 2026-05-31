<template>
    <div>
        <section data-bs-version="5.1" class="pricing8 shopm5 cid-tZPDxCnUYR" id="apricing8-6a"
            data-sortbtn="btn-primary">


            <div class="container-fluid">
                <div class="row align-items-stretch items-row justify-content-center">

                    <div class="item features-image item-long col-12 col-md-12 col-lg-8">
                        <div class="item-wrapper">
                            <div class="mbr-section-head">
                                <h4 class="mbr-section-title mbr-fonts-style mb-0 display-7">
                                    {{ departmentYardsale?.name }}
                                </h4>
                                <h5 class="mbr-section-subtitle mbr-fonts-style mb-0 display-2">
                                    <strong>{{ departmentYardsale?.description }}</strong>
                                </h5>

                                <div class="mbr-section-btn item-footer">
                                    <NuxtLink :to="toDepartmentPath(departmentYardsale?.id)"
                                        class="btn btn-black-outline item-btn display-7" target="_blank">
                                        <span
                                            class="mobi-mbri mobi-mbri-arrow-next mbr-iconfont mbr-iconfont-btn"></span>
                                        Read More
                                    </NuxtLink>
                                </div>
                            </div>
                            <div class="item-img">
                                <NuxtImg loading="lazy" :src="getAssetUrl(departmentYardsale?.image)"
                                    :alt="departmentYardsale?.name" />
                            </div>
                        </div>
                    </div>

                    <div class="item features-image col-12 col-md-12 col-lg-4">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <NuxtImg loading="lazy" src="assets/images/022.jpg" alt="" />
                                <div class="mbr-section-btn">
                                    <NuxtLink :to="product?.id" class="btn btn-danger item-btn display-7"
                                        target="_blank">
                                        Read More
                                    </NuxtLink>
                                </div>
                            </div>
                            <div class="item-content">
                                <h5 class="item-title mbr-fonts-style mb-0 display-7">
                                    <strong>
                                        {{ product?.name }}
                                    </strong>
                                </h5>
                                <v-rating class="item-subtitle mbr-fonts-style mb-0 display-7" size="xs"
                                    :model-value="product?.rating" :max="5" />
                                <p class="mbr-text mbr-fonts-style mb-0 display-7">
                                    <strong>
                                        <div style="display: inline-block;" v-for="currency in product?.currency"
                                            :key="currency">{{ currency?.currency_id?.symbol }}</div>
                                        {{ product?.price }}
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import { useRoutePath } from '#shared/app/composables/routing/useRoutePath'

    const gateway = useGateway()
    const content = gateway.content
    const { joinRoutePath } = useRoutePath()
    const toDepartmentPath = (slug) => joinRoutePath('/departments', slug)
    const getAssetUrl = (file) => content.getAssetUrl(file)

    const {
        data: departmentYardsale
    } = await useAsyncData('departmentYardsale', async () => {
        try {
            return await content.readItem('departments', '31', {
                fields: ['*',
                    'products.products_id.*',
                    'products.products_id.image.*',
                    'image.*'
                ],
                limit: 2
            })
        } catch {
            return null
        }
    })
</script>