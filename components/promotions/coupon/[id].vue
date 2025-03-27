<template>
    <div>
        <!---->
        <section data-bs-version="5.1" class="features07 scalem5 cid-uhB4hw1yxB mbr-fullscreen" id="features07-9l">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-10 card">
                        <div class="title-wrapper">
                            <h2 class="mbr-section-title mbr-fonts-style display-5">
                                View Coupon</h2>
                        </div>
                    </div>
                    <div class="col-12 col-lg-12">
                        <div class="items-wrapper">
                            <div class="item features-without-image item-mb">
                                <div class="item-wrapper">
                                    <div class="card-box">
                                        <div class="icon-wrapper">
                                            <span class="mbr-iconfont mobi-mbri-growing-chart mobi-mbri"></span>
                                        </div>
                                        <h4 class="card-title mbr-fonts-style display-7">
                                            Coupon Information
                                        </h4>
                                        <p class="card-text mbr-fonts-style display-7">Coupon #: {{ coupon?.coupon_id }}</p>
                                        <p class="card-text mbr-fonts-style display-7">Type: {{ coupon?.type }}</p>
                                        <p class="card-text mbr-fonts-style display-7">How many times coupon can be used per customer: {{ coupon?.usage_per_customer }}</p>
                                        <p class="card-text mbr-fonts-style display-7">Coupon Code: {{ coupon?.code }}</p>    
                                        <p class="card-text mbr-fonts-style display-7">Coupon Date:
                                            {{ new Date(coupon?.created_at).toLocaleDateString() }}</p>
                                        <p class="card-text mbr-fonts-style display-7">Usage Limit: {{ coupon?.usage_limit }}</p>
                                        <p class="card-text mbr-fonts-style display-7">Times Used: {{ coupon?.times_used }}</p>
                                        <p class="card-text mbr-fonts-style display-7">Expiration Date: {{ new Date(coupon?.expiration_date).toLocaleDateString() }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NuxtImg loading="lazy" src="~/~/assets/images/background2.jpg" alt="Coupons">
        </section>
    </div>
</template>

<script>
    

    export default {
        components: {
            profilebar
        },
        data: () => ({
            model: null,
        }),
    }
</script>

<script setup>
    import {
        ref,
        onMounted
    } from 'vue';
    import {
        getCouponById
    } from '~/composables/commerce/marketing/getCoupons';

    const coupon = ref([]);

    onMounted(async () => {
        coupon.value = await getCouponById();
    });
    /*  const {
        getItems
      } = useDirectusItems()

      const coupons = await getItems({
        collection: "coupons",
      });*/

    useHead({
        title: 'Coupons',
    })

    definePageMeta({
        middleware: ['auth'],
    })
</script>