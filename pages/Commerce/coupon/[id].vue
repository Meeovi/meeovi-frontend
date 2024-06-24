<template>
    <div class="contentPage">
        <profilebar />
        <section data-bs-version="5.1" class="features14 cid-u3U56NDZtd" id="features15-7o" data-sortbtn="btn-primary">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="card col-12 col-md-6 col-lg-4">
                        <div class="card-wrapper">
                            <span class="mbr-iconfont mobi-mbri-protect mobi-mbri m-auto"></span>
                            <div class="card-box">
                                <h4 class="card-title mbr-fonts-style mb-2 display-7"><strong>Use By</strong></h4>
                                <h5 class="card-text mbr-fonts-style display-4">{{ new Date(coupon?.date_expires).toLocaleDateString() }}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="card col-12 col-md-6 col-lg-4">
                        <div class="card-wrapper">
                            <span class="mbr-iconfont m-auto mobi-mbri-website-theme-2 mobi-mbri"></span>
                            <div class="card-box">
                                <h4 class="card-title mbr-fonts-style mb-2 display-7"><strong>Coupon Code</strong></h4>
                                <h5 class="card-text mbr-fonts-style display-4">{{ coupon?.code}}</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="contacts2 cid-u3U5tKf7Hq" id="contacts2-7p" data-sortbtn="btn-primary">
            <div class="container">

                <div class="row justify-content-center mt-4">
                    <div class="card col-12 col-md-12">
                        <div class="card-wrapper">
                            <div class="image-wrapper">
                                <span class="mbr-iconfont mobi-mbri-home mobi-mbri"></span>
                            </div>
                            <div class="text-wrapper">
                                <h6 class="card-title mbr-fonts-style mb-1 display-5">
                                    <strong>Coupon Details</strong></h6>
                                <p class="mbr-text mbr-fonts-style display-7">
                                    <div>Amount: {{ coupon?.amount }}</div>
                                    <br>
                                    <div>Date Created: {{ new Date(coupon?.date_created).toLocaleDateString() }}</div>
                                    <br>
                                    <div>Date Modified: {{ new Date(coupon?.date_modified).toLocaleDateString() }}</div>
                                    <br>
                                    <div>Categories that can use this coupon: {{ coupon?.product_categories }}</div>
                                    <br>
                                    <div>Free Shipping? {{ coupon?.free_shipping }}</div>
                                    <br>
                                    <div>Usage Limit: {{ coupon?.usage_limit }}</div>
                                    <br>
                                    <div>Usage Count: {{ coupon?.usage_count }}</div>
                                    <br>
                                    <div>Discount Type: {{ coupon?.discount_type }}</div>
                                    <br>
                                    Description: <div v-html="coupon?.description"></div>
                                    <br>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import profilebar from '../../../components/menus/profilebar.vue'

    export default {
        components: { profilebar},
        data: () => ({
            model: null,
            //url: process.env.DIRECTUS_URL,
        }),
    }
</script>

<script setup>
import { getCouponById } from '~/composables/read/getCoupons';

const coupon = ref(null);
const route = useRoute();

onMounted(async () => {
  const id = route.params.id;
  coupon.value = await getCouponById(id);
});

/*const {
    getItemById
  } = useDirectusItems()
  const route = useRoute();

  const coupon = await getItemById({
    collection: "coupons",
    id: route.params.id,
  }); */

    useHead({
        title: coupon?.code,
    })  

	definePageMeta({
	  //middleware: ['auth-logged-in'],
	})
</script>~/server/api/read/getCoupons