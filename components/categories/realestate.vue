<template>
    <div>
        <section data-bs-version="5.1" class="buildm5 header4 cid-uwdijQUiGl mbr-fullscreen" id="header4-af"
            data-sortbtn="btn-primary">

            <div class="mbr-overlay" style="opacity: 0.2; background-color: rgb(0, 0, 0);"></div>

            <div class="container">
                <div class="row">
                    <div class="content-wrap col-12 col-md-12">
                        <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1">{{ realestate?.name }}</h1>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="features06 photom4_features06 cid-uwdiCl2VuY mbr-parallax-background"
            id="features06-ag" data-sortbtn="btn-primary">
            <div class="container">
                <div class="row">
                    <div class="card p-3 col-12 col-md-8 col-lg-4">
                        <div class="card-wrapper card1">
                            <div class="card-box">
                                <div class="card-img">
                                    <span class="mbr-iconfont mobi-mbri-preview mobi-mbri"></span>
                                </div>

                                <h4 class="card-title align-center mbr-bold mbr-white mbr-fonts-style display-5">
                                    Showcases
                                </h4>
                                <p class="mbr-text align-center mbr-white mbr-fonts-style display-7">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac feugiat neque.</p>
                                <div class="mbr-section-btn align-center"><NuxtLink to="#"
                                        class="btn btn-md btn-white-outline display-4">View More</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card p-3 col-12 col-md-8 col-lg-4">
                        <div class="card-wrapper card2">
                            <div class="card-box">
                                <div class="card-img">
                                    <span class="mbr-iconfont mobi-mbri-globe mobi-mbri"></span>
                                </div>
                                <h4 class="card-title align-center mbr-bold mbr-white mbr-fonts-style display-5">
                                    Coverage</h4>
                                <p class="mbr-text align-center mbr-white mbr-fonts-style display-7">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac feugiat neque.</p>
                                <div class="mbr-section-btn align-center"><NuxtLink to="#"
                                        class="btn btn-md btn-white-outline display-4">View More</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card p-3 col-12 col-md-8 col-lg-4">
                        <div class="card-wrapper card3">
                            <div class="card-box">
                                <div class="card-img">
                                    <span class="mbr-iconfont mobi-mbri-camera mobi-mbri"></span>
                                </div>
                                <h4 class="card-title align-center mbr-bold mbr-white mbr-fonts-style display-5">
                                    Photography</h4>
                                <p class="mbr-text align-center mbr-white mbr-fonts-style display-7">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac feugiat neque.</p>
                                <div class="mbr-section-btn align-center"><NuxtLink to="#"
                                        class="btn btn-md btn-white-outline display-4">View More</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="features3 homem5 cid-uwdjtIKvAZ" id="afeatures3-ah"
            data-sortbtn="btn-primary">

            <div class="mbr-overlay"></div>
            <div class="container-fluid">
                <div class="row">
                    <div class="item-img item-img-1">
                        <img src="assets/images/features5.jpg" alt="">
                    </div>
                    <div class="item-text">
                        <h5 class="item-title mbr-fonts-style mb-0 align-center display-1">
                            HOMEM5
                        </h5>


                    </div>
                    <div class="item-img item-img-2">
                        <img src="assets/images/features6.jpg" alt="">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const { $directus, $readItem } = useNuxtApp()

const { data: realestate } = await useAsyncData('realestate', () => {
  return $directus.request($readItem('departments', '63'))
})

const props = defineProps({
        category: {
            type: String,
            required: true,
        },
    });
</script>