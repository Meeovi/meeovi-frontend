<template>
    <div>
        <NuxtLinkge-verification />
        <section data-bs-version="5.1" class="formulam5 header1 cid-uwd6B8oI8u mbr-parallax-background" id="header1-a7">

            <div class="mbr-overlay"></div>
            <div class="container-fluid">
                <div class="row">
                    <div class="content-wrap col-12 col-md-12 col-lg-12">
                        <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1"><strong>{{ adult?.name }}</strong>
                        </h1>

                        <p class="mbr-fonts-style mbr-text mbr-white mb-4 display-7">
                            {{ adult?.description }}
                        </p>
                        <div class="mbr-section-btn"><NuxtLink class="btn btn-white display-4" href="#"><span
                                    class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>START
                                SHOPPING</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="formulam5 features4 cid-uwd7HtZZXP" id="features4-a9">


            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 content-head">

                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="item features-image col-12 col-md-6 col-lg-4">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <img src="assets/images/features2.jpg" alt="">
                                <div class="item-content">
                                    <h5 class="item-title mbr-fonts-style display-2">
                                        <strong>Сream</strong>
                                    </h5>


                                    <div class="mbr-section-btn item-footer"><NuxtLink to=""
                                            class="btn item-btn btn-white display-4"><span
                                                class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>Learn
                                            More</NuxtLink></div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div class="item features-image col-12 col-md-6 col-lg-4">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <img src="assets/images/features1.jpg" alt="">
                                <div class="item-content">
                                    <h5 class="item-title mbr-fonts-style display-2">
                                        <strong>Soap</strong>
                                    </h5>


                                    <div class="mbr-section-btn item-footer"><NuxtLink to=""
                                            class="btn item-btn btn-white display-4"><span
                                                class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>Learn
                                            More</NuxtLink></div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div class="item features-image col-12 col-md-6 col-lg-4">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <img src="assets/images/features4.jpg" alt="">
                                <div class="item-content">
                                    <h5 class="item-title mbr-fonts-style display-2">
                                        <strong>Lotion</strong>
                                    </h5>


                                    <div class="mbr-section-btn item-footer"><NuxtLink to=""
                                            class="btn item-btn btn-white display-4"><span
                                                class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn"></span>Learn
                                            More</NuxtLink></div>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import AgeVerification from '~/components/partials/globals/ageverification.vue'

    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: adult
    } = await useAsyncData('adult', () => {
        return $directus.request($readItem('departments', '64'))
    })

    const props = defineProps({
        category: {
            type: String,
            required: true,
        },
    });
</script>