<template>
    <div class="contentPage">
        <section data-bs-version="5.1" class="slider1 cid-sBY233VxUT" id="slider1-2n">

            <div class="carousel slide carousel-fade" id="uAWPEiemvT" data-ride="carousel" data-bs-ride="carousel"
                data-interval="5000" data-bs-interval="5000">
                <ol class="carousel-indicators">
                    <li data-slide-to="0" data-bs-slide-to="0" class="active" data-target="#uAWPEiemvT"
                        data-bs-target="#uAWPEiemvT"></li>
                    <li data-slide-to="1" data-bs-slide-to="1" data-target="#uAWPEiemvT" data-bs-target="#uAWPEiemvT">
                    </li>
                    <li data-slide-to="2" data-bs-slide-to="2" data-target="#uAWPEiemvT" data-bs-target="#uAWPEiemvT">
                    </li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item slider-image item active">
                        <div class="item-wrapper">
                            <img class="d-block w-100" src="assets/images/mbr-1900x1266.jpg">

                            <div class="carousel-caption">
                                <h5 class="mbr-section-subtitle mbr-fonts-style display-5">
                                    <strong>Clothes-A-Lot</strong>
                                </h5>
                                <p class="mbr-section-text mbr-fonts-style display-7">There are many variations of
                                    passages of Lorem Ipsum available</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item slider-image item">
                        <div class="item-wrapper">
                            <img class="d-block w-100" src="assets/images/mbr-1900x1069.jpg">

                            <div class="carousel-caption">
                                <h5 class="mbr-section-subtitle mbr-fonts-style display-5">
                                    <strong>Cadillac Lounge</strong>
                                </h5>
                                <p class="mbr-section-text mbr-fonts-style display-7">There are many variations of
                                    passages of Lorem Ipsum available</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item slider-image item">
                        <div class="item-wrapper">
                            <img class="d-block w-100" src="assets/images/mbr-1900x1268.jpg">

                            <div class="carousel-caption">
                                <h5 class="mbr-section-subtitle mbr-fonts-style display-5">
                                    <strong>Navy Surplus</strong>
                                </h5>
                                <p class="mbr-section-text mbr-fonts-style display-7">There are many variations of
                                    passages of Lorem Ipsum available</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control carousel-control-prev" role="button" data-slide="prev" data-bs-slide="prev"
                    href="#uAWPEiemvT">
                    <span class="mobi-mbri mobi-mbri-arrow-prev" aria-hidden="true"></span>
                    <span class="sr-only visually-hidden">Previous</span>
                </a>
                <a class="carousel-control carousel-control-next" role="button" data-slide="next" data-bs-slide="next"
                    href="#uAWPEiemvT">
                    <span class="mobi-mbri mobi-mbri-arrow-next" aria-hidden="true"></span>
                    <span class="sr-only visually-hidden">Next</span>
                </a>
            </div>
        </section>

        <section data-bs-version="5.1" class="features19 cid-twaHSeAj36" id="features19-44">
            <div class="container">
                <div class="row justify-content-center align-items-start">
                    <div class="card px-3 py-4 col-md-6 col-lg-3" v-for="(integrations, index) in integrations"
                        :key="index">
                        <NuxtLink :to="`/integrations/integration/${integrations.id}`">
                            <div class="card-wrapper flip-card">
                                <div class="card-img">
                                    <img :src="`${$directus.url}assets/${integrations?.screenshots?.filename_disk}`"
                                        :alt="integrations?.name">
                                    <div class="img-text mbr-text mbr-fonts-style align-left mbr-white display-4">
                                        {{ integrations?.name }}
                                    </div>
                                </div>
                                <div class="card-box">
                                    <h3 class="mbr-title mbr-fonts-style mbr-bold mbr-black display-5">
                                        {{ integrations?.price }}
                                    </h3>
                                    <p class="mbr-card-text mbr-fonts-style align-left display-7">
                                        {{ integrations?.developer }}
                                    </p>

                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const {
        $directus,
        $readItems,
    } = useNuxtApp()

    const {
        data: integrations
    } = await useAsyncData('integrations', () => {
        return $directus.request($readItems('integrations', {
            filter: {
                _and: [{
                        status: {
                            _eq: "Coming Soon"
                        }
                    },
                    {
                        type: {
                            _eq: "Module"
                        }
                    },
                    {
                        platform: {
                            _eq: "Meeovi"
                        }
                    }
                ]
            }
        }))
    })

    definePageMeta({
        layout: "nolive",
        middleware: ['authenticated'],
    });

    useHead({
        title: 'Integrations'
    })
</script>