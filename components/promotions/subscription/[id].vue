<template>
    <div>
        <!---->
        <section data-bs-version="5.1" class="features14 cid-u3U56NDZtd" id="features15-7o" data-sortbtn="btn-primary">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="card col-12 col-md-6 col-lg-4">
                        <div class="card-wrapper">
                            <span class="mbr-iconfont mobi-mbri-protect mobi-mbri m-auto"></span>
                            <div class="card-box">
                                <h4 class="card-title mbr-fonts-style mb-2 display-7"><strong>Subscribed On</strong></h4>
                                <h5 class="card-text mbr-fonts-style display-4">{{ subscription?.start_date}}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="card col-12 col-md-6 col-lg-4">
                        <div class="card-wrapper">
                            <span class="mbr-iconfont m-auto mobi-mbri-website-theme-2 mobi-mbri"></span>
                            <div class="card-box">
                                <h4 class="card-title mbr-fonts-style mb-2 display-7"><strong>Subscription #</strong></h4>
                                <h5 class="card-text mbr-fonts-style display-4">{{ subscription?.id}}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="card col-12 col-md-6 col-lg-4">
                        <div class="card-wrapper">
                            <span class="mbr-iconfont m-auto mobi-mbri-features mobi-mbri"></span>
                            <div class="card-box">
                                <h4 class="card-title mbr-fonts-style mb-2 display-7">
                                    <strong>View or Print Invoice</strong></h4>
                                <h5 class="card-text mbr-fonts-style display-4"></h5>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="contacts2 cid-u3U5tKf7Hq" id="contacts2-7p" data-sortbtn="btn-primary">
            <div class="container">

                <div class="row justify-content-center mt-4">
                    <div class="card col-12 col-md-6">
                        <div class="card-wrapper">
                            <div class="image-wrapper">
                                <span class="mbr-iconfont mobi-mbri-home mobi-mbri"></span>
                            </div>
                            <div class="text-wrapper">
                                <h6 class="card-title mbr-fonts-style mb-1 display-5">
                                    <strong>Shipping Address</strong></h6>
                                <p class="mbr-text mbr-fonts-style display-7">{{ subscription?.customer?.customers_id?.address }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="card col-12 col-md-6">
                        <div class="card-wrapper">
                            <div class="image-wrapper">
                                <span class="mbr-iconfont mobi-mbri-cash mobi-mbri"></span>
                            </div>
                            <div class="text-wrapper">
                                <h6 class="card-title mbr-fonts-style mb-1 display-5">
                                    <strong>Payment Method</strong></h6>
                                <p class="mbr-text mbr-fonts-style display-7">
                                    <NuxtLink to="mailto:info@site.com" class="text-primary">{{ subscription?.customer?.customers_id?.payment }}</NuxtLink>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card col-12 col-md-6">
                        <div class="card-wrapper">
                            <div class="image-wrapper">
                                <span class="mbr-iconfont mobi-mbri-contact-form mobi-mbri"></span>
                            </div>
                            <div class="text-wrapper">
                                <h6 class="card-title mbr-fonts-style mb-1 display-5">
                                    <strong>Order Summary</strong></h6>
                                <p class="mbr-text mbr-fonts-style display-7" v-for="customers in subscription?.customer?.customers_id">Item(s) Subtotal: ${{ customer?.subscription?.orders_id?.total_before_tax }}
                                    <br>Shipping &amp; Handling: ${{ customer?.subscription?.orders_id?.shipping_handling }}
                                    <br>Total before tax: ${{ customer?.subscription?.orders_id?.total_before_tax }}
                                    <br>Estimated tax to be collected: ${{ customer?.subscription?.orders_id?.tax }}
                                    <br>Grand Total: ${{ customer?.subscription?.orders_id?.total_price }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="card col-12 col-md-6">
                        <div class="card-wrapper">
                            <div class="image-wrapper">
                                <span class="mbr-iconfont mobi-mbri-bulleted-list mobi-mbri"></span>
                            </div>
                            <div class="text-wrapper">
                                <h6 class="card-title mbr-fonts-style mb-1 display-5">
                                    <strong>Receipt</strong></h6>
                                <p class="mbr-text mbr-fonts-style display-7" v-for="customers in subscription?.customer?.customers_id">Items shipped: {{ customer?.receipts?.receipts_id?.date_created }} - {{ subscription?.customer?.customers_id?.payment }}: ${{ customer?.receipts?.receipts_id?.total_price }}
                                    <br>
                                    <br>Total: ${{ customer?.receipts?.receipts_id?.total_price }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import productCard from '~/components/product/productCard.vue'


    export default {
        components: { productCard, profilebar},
        data: () => ({
            model: null,
            url: process.env.DIRECTUS_URL,
        }),
    }
</script>

<script setup>
const {
    getItemById
  } = useDirectusItems()
  const route = useRoute();

  const subscription = await getItemById({
    collection: "subscriptions",
    id: route.params.id,
  });

    useHead({
        title: subscription?.name,
    })  

	definePageMeta({
	  middleware: ['authenticated'],
	})
</script>