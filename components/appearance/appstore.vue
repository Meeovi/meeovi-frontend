<template>
    <div>
        <section data-bs-version="5.1" class="slider02 mbr-embla trustm5 cid-utXctFPaab" id="slider02-a6"
            data-sortbtn="btn-primary">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="content-wrapper">
                            <h2 class="mbr-section-title mbr-fonts-style display-2"><strong>Home</strong></h2>
                            <div class="embla" data-skip-snaps="true" data-align="center"
                                data-contain-scroll="trimSnaps" data-loop="true" data-auto-play="true"
                                data-auto-play-interval="5" data-draggable="true">
                                <div class="embla__viewport">
                                    <div class="embla__container">
                                        <NuxtLink :to="`/product/${product?.sku}`">
                                            <div class="embla__slide slider-image item"
                                                style="margin-left: 2rem; margin-right: 2rem;">
                                                <div class="slide-content">
                                                    <div class="item-wrapper">
                                                        <p class="item-date mbr-fonts-style display-1">
                                                            <strong>{{ product?.categories?.name }}</strong>
                                                        </p>
                                                        <div class="item-img">
                                                            <NuxtImg loading="lazy" :src="`${product?.image?.url}`" :alt="product?.name" />
                                                        </div>
                                                        <div class="item-content">
                                                            <p class="item-text mbr-fonts-style display-7">
                                                                {{ product?.description }}
                                                            </p>
                                                            <p class="item-text mbr-fonts-style display-7">
                                                                {{ product?.price_range?.minimum_price?.regular_price?.currency }}
                                                                {{ product?.price_range?.minimum_price?.regular_price?.value }}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <button class="embla__button embla__button--prev">
                                    <span class="mobi-mbri mobi-mbri-left mbr-iconfont" aria-hidden="true"></span>
                                    <span
                                        class="sr-only visually-hidden visually-hidden visually-hidden">Previous</span>
                                </button>
                                <button class="embla__button embla__button--next">
                                    <span class="mobi-mbri mobi-mbri-right mbr-iconfont" aria-hidden="true"></span>
                                    <span class="sr-only visually-hidden visually-hidden visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="decor-wrap"></div>
        </section>
    </div>
</template>

<script setup>

    const props = defineProps({
        category: {
            type: String,
            required: true,
        },
    });
    const {
        category
    } = props;
</script>