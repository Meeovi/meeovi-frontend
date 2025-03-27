<template>
    <div>
        <section data-bs-version="5.1" class="header1 cid-uwdd60rtVW" id="header1-ab">

            <div class="shape shape_left"></div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-md-3 col-lg-3 offset-lg-1">
                        <div class="image-wrapper image_left">
                            <img src="assets/images/bistrovertical2.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-12 col-md-5 col-lg-5">
                        <div class="content_box text-center">
                            <h1 class="mbr-section-title mbr-fonts-style display-1">{{ pantry?.name }}</h1>
                            <p class="mbr-text mbr-fonts-style display-4">{{ pantry?.description }}</p>
                            <div class="mbr-section-btn"><NuxtLink class="btn btn-lg btn-primary-outline display-4"
                                    href="#">ORDERING</NuxtLink></div>
                        </div>
                    </div>
                    <div class="col-12 col-md-3 col-lg-3">
                        <div class="image-wrapper image_right">
                            <img src="assets/images/bistrovertical1.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="shape shape_right"></div>
        </section>

        <section data-bs-version="5.1" class="header2 cid-uwddzbA7w7" id="header2-ac">

            <div class="image_behind">
                <img src="assets/images/bistrovertical4.jpg" alt="">
            </div>
            <div class="container-fluid">
                <div class="row justify-content-center align-items-center">
                    <div class="col-12 col-md-6 col-lg-6 offset-lg-1">
                        <div class="image_wrapper">
                            <div class="item-img">
                                <img src="assets/images/bistrosq1.jpg" alt="">
                                <div class="image_ahead">
                                    <img src="assets/images/bistrovertical6.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-5 col-lg-4 offset-md-1">
                        <div class="main_header">

                            <h1 class="mbr-section-title mbr-fonts-style display-2">BOOKING</h1>
                            <p class="mbr-text mbr-fonts-style display-4">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Sit ex voluptatem voluptas aut quod, autem obcaecati molestiae optio
                                consequuntur.</p>
                            <div class="mbr-section-btn"><NuxtLink class="btn btn-lg btn-primary-outline display-4"
                                    href="#">VIEW MORE</NuxtLink></div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>

<script setup>
const { $directus, $readItem } = useNuxtApp()

const { data: pantry } = await useAsyncData('pantry', () => {
  return $directus.request($readItem('departments', '37'))
})

const props = defineProps({
        category: {
            type: String,
            required: true,
        },
    });
</script>