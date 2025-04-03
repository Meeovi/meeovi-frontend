<template>
    <section data-bs-version="5.1" class="pricing1 cid-twaUcnOkam" id="pricing1-4h" data-sortbtn="btn-primary">
        <div class="mbr-overlay" style="opacity: 1.9; background-color: rgb(255, 255, 255);">
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div v-if="productDetails?.items?.__typename === 'VirtualProduct'">
                        <videoProduct :category="productDetails?.items?.format" />
                    </div>
                    <div v-else-if="productDetails?.items?.__typename === 'DownloadableProduct'">
                        <videoProduct :category="productDetails?.items?.format" />
                    </div>
                    <div v-else>
                        <v-carousel>
                            <v-carousel-item :src="productDetails?.items?.image" cover></v-carousel-item>
                        </v-carousel>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="right">
                        <div class="row align-items-stretch justify-content-center">
                            <div class="col col-6" v-if="productDetails?.stock_status === 'IN_STOCK'">
                                <p class="mbr-fonts-style display-4">Available</p>
                            </div>

                            <div class="col col-6">
                                <share />
                            </div>
                        </div>
                        <h1 class="mb-1 font-bold typography-headline-4"><strong>{{ productDetails?.name }}</strong></h1>

                        <div class="price-line">
                            <p class="desc2 mbr-fonts-style display-5" v-if="productDetails?.special_price">
                                <strong class="block font-bold typography-headline-3">{{ productDetails?.price_range?.minimum_price?.regular_price?.currency }}
                                    {{ productDetails?.special_price }}</strong>
                            </p>

                            <p class="plus1 mbr-fonts-style display-5">
                                {{ productDetails?.price_range?.minimum_price?.regular_price?.currency }} {{ productDetails?.price_range?.minimum_price?.regular_price?.value }}
                            </p>
                        </div>
                        
                        <p class="productRatings">
                            <ratings :rating="productDetails?.rating_summary" />
                            <SfLink href="#" variant="secondary" class="ratingReviews ml-2 text-xs text-neutral-500">
                                {{productDetails?.review_count}} reviews </SfLink>
                            <br />
                        </p>

                        <div class="row align-items-stretch justify-content-center">
                            <div class="col col-6" v-if="productDetails?.custom_attributesV2?.items?.code === 'Color'">
                                <colorOptions :colors="productDetails?.custom_attributesV2?.items?.value" />
                            </div>

                            <div class="col col-6" v-if="productDetails?.custom_attributesV2?.items?.code === 'Size'">
                                <sizeOptions :sizes="productDetails?.custom_attributesV2?.items?.value" />
                            </div>
                        </div>

                        <div class="py-4 mb-4 border-gray-200 border-y">
                            <div class="row items-start xs:flex">
                                <div class="col col-6 flex flex-col items-stretch xs:items-center xs:inline-flex">
                                    <div class="flex border border-neutral-300 rounded-md">
                                        <SfButton variant="tertiary" :disabled="count <= min" square
                                            class="rounded-r-none p-3" :aria-controls="inputId"
                                            aria-label="Decrease value" @click="dec()">
                                            <SfIconRemove />
                                        </SfButton>
                                        <input :id="inputId" v-model="count" type="number"
                                            class="grow appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
                                            :min="min" :max="max" @input="handleOnChange" />
                                        <SfButton variant="tertiary" :disabled="count >= max" square
                                            class="rounded-l-none p-3" :aria-controls="inputId"
                                            aria-label="Increase value" @click="inc()">
                                            <SfIconAdd />
                                        </SfButton>
                                    </div>
                                    <p class="self-center mt-1 mb-4 text-xs text-neutral-500 xs:mb-0">
                                        <strong class="text-neutral-900">{{ productDetails?.only_x_left_in_stock }}</strong>
                                        in stock
                                    </p>
                                </div>

                                <div class="col col-6">
                                    <addToCartBtn :productVariantId="productDetails.sku" />
                                </div>
                            </div>
                        </div>

                        <div class="mbr-section-btn row align-items-stretch justify-content-center">
                            <div class="col col-6">
                                <createListBtn :lists="productDetails?.sku" />
                            </div>

                            <div class="col col-6">
                                <compareProductBtn :product="productDetails?.compare" />
                            </div>
                        </div>
                        <div class="price-line1">
                            <p class="desc mbr-fonts-style display-7"><strong>
                                    Tags:</strong>&nbsp;</p>
                            <p class="plus mbr-fonts-style display-4"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import {
        ref
    } from 'vue';
    import {
        SfButton,
        SfCounter,
        SfLink,
        SfIconAdd,
        SfIconRemove,
        useId,
    } from '@storefront-ui/vue';
    import {
        clamp
    } from '@storefront-ui/shared';
    import {
        useCounter
    } from '@vueuse/core';
    import share from '~/components/partials/globals/share.vue'
    import ratings from '~/components/partials/commerce/ratings.vue'
    import addToCartBtn from '~/components/partials/commerce/addToCartBtn.vue'
    import compareProductBtn from '~/components/partials/commerce/compareBtn.vue'
    import colorOptions from '~/components/product/colorOptions.vue'
    import sizeOptions from '~/components/product/sizeOptions.vue'
    import createListBtn from '~/components/partials/globals/createListBtn.vue';
    import videoProduct from '~/components/blocks/videoproduct.vue'

    const inputId = useId();
    const min = ref(1);
    const max = ref(999);
    const {
        count,
        inc,
        dec,
        set
    } = useCounter(1, {
        min: min.value,
        max: max.value
    });

    function handleOnChange(event: Event) {
        const currentValue = (event.target as HTMLInputElement)?.value;
        const nextValue = Number.parseFloat(currentValue);
        set(clamp(nextValue, min.value, max.value));
    }

    const props = defineProps({
        productDetails: {
            type: Object,
            required: true,
        },
    });
</script>