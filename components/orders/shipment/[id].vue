<template>
    <div>
        <!---->
        <section data-bs-version="5.1" class="features07 scalem5 cid-uhB4hw1yxB mbr-fullscreen" id="features07-9l">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-10 card">
                        <div class="title-wrapper">
                            <h2 class="mbr-section-title mbr-fonts-style display-5">
                                View Shipment</h2>
                        </div>
                    </div>
                    <div class="col-12 col-lg-8">
                        <div class="items-wrapper">
                            <div class="item features-without-image item-mb">
                                <div class="item-wrapper">
                                    <div class="card-box">
                                        <div class="icon-wrapper">
                                            <span class="mbr-iconfont mobi-mbri-growing-chart mobi-mbri"></span>
                                        </div>
                                        <h4 class="card-title mbr-fonts-style display-7">
                                            Order Information
                                        </h4>
                                        <NuxtLink class="card-text mbr-fonts-style display-7" :href="`/account/user/orders/my-order/${shipment?.order_id}`">Order #:
                                            {{ shipment?.order_id }}</NuxtLink>
                                        <p class="card-text mbr-fonts-style display-7">Order Date:
                                            {{ new Date(shipment?.created_at).toLocaleDateString() }}</p>
                                        <p class="card-text mbr-fonts-style display-7">Order Status:
                                            {{ shipment?.shipment_status }}</p>
                                        <p class="card-text mbr-fonts-style display-7">Purchased From: {{ shipment?.store_id }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item features-without-image item-mb">
                                <div class="item-wrapper">
                                    <div class="card-box">
                                        <div class="icon-wrapper">
                                            <span class="mbr-iconfont mobi-mbri-globe-2 mobi-mbri"></span>
                                        </div>
                                        <h4 class="card-title mbr-fonts-style display-7">
                                            Account Information
                                        </h4>
                                        <p class="card-text mbr-fonts-style display-7">Customer Name: {{ shipment?.customer_id }}</p>
                                        <p class="card-text mbr-fonts-style display-7">Email: {{ shipment?.email_sent }}</p>
                                        <p class="card-text mbr-fonts-style display-7">Customer Group: </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item features-without-image item-mb">
                                <div class="item-wrapper">
                                    <div class="card-box">
                                        <div class="icon-wrapper">
                                            <span class="mbr-iconfont mobi-mbri-delivery mobi-mbri"></span>
                                        </div>
                                        <h4 class="card-title mbr-fonts-style display-7">
                                            Billing Address
                                        </h4>
                                        <p class="card-text mbr-fonts-style display-7">{{ shipment?.billing_address_id }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item features-without-image item-mb">
                                <div class="item-wrapper">
                                    <div class="card-box">
                                        <div class="icon-wrapper">
                                            <span class="mbr-iconfont mobi-mbri-refresh mobi-mbri"></span>
                                        </div>
                                        <h4 class="card-title mbr-fonts-style display-7">
                                            Shipping Address
                                        </h4>
                                        <p class="card-text mbr-fonts-style display-7">{{ shipment?.shipping_address_id }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item features-without-image item-mb">
                                <div class="item-wrapper">
                                    <div class="card-box">
                                        <div class="icon-wrapper">
                                            <span class="mbr-iconfont mobi-mbri-responsive-2 mobi-mbri"></span>
                                        </div>
                                        <h4 class="card-title mbr-fonts-style display-7">
                                            Payment Information
                                        </h4>
                                        <p class="card-text mbr-fonts-style display-7">The order was placed using
                                            {{ shipment?.order_currency_code }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item features-without-image item-mb">
                                <div class="item-wrapper">
                                    <div class="card-box">
                                        <div class="icon-wrapper">
                                            <span class="mbr-iconfont mobi-mbri-cash mobi-mbri"></span>
                                        </div>
                                        <h4 class="card-title mbr-fonts-style display-7">
                                            Shipping and Tracking Information
                                        </h4>
                                        <p class="card-text mbr-fonts-style display-7">Carrier: {{ shipment?.tracks?.carrier_code }}</p>
                                        <p class="card-text mbr-fonts-style display-7">Title: {{ shipment?.tracks?.title }}</p>
                                        <p class="card-text mbr-fonts-style display-7">Weight: {{ shipment?.tracks?.weight }}</p>
                                        <p class="card-text mbr-fonts-style display-7">Description: {{ shipment?.tracks?.description }}</p>
                                        <p class="card-text mbr-fonts-style display-7">Tracking #: {{ shipment?.tracks?.track_number }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <NuxtImg loading="lazy" src="~/~/assets/images/background2.jpg" alt="Shipments">
        </section>

        <v-card title="Shipment Items" flat>
            <div class="container">
                <v-data-table :headers="headers" :items="shipment?.items" :items-per-page="5" class="elevation-1">
                    <template v-slot:[`item.name`]="{ item }">
                        <strong>{{ item.name }}</strong>
                    </template>
                    <template v-slot:[`item.qty`]="{ item }">
                        {{ item.qty }}
                    </template>
                </v-data-table>
            </div>
        </v-card>
    </div>
</template>

<script>
    

    export default {
        components: {
            profilebar
        },
        data: () => ({
            model: null,
            headers: [{
                    text: 'Product',
                    value: 'name'
                },
                {
                    text: 'Quantity',
                    value: 'qty'
                }
            ],
        }),
    }
</script>

<script setup>
    import {
        ref,
        onMounted
    } from 'vue';
    import {
        getShipmentById
    } from '~/composables/commerce/sales/getShipments';

    const shipment = ref([]);

    onMounted(async () => {
        shipment.value = await getShipmentById();
    });
    /*  const {
        getItems
      } = useDirectusItems()

      const coupons = await getItems({
        collection: "coupons",
      });*/

    useHead({
        title: 'Shipments',
    })

    definePageMeta({
        middleware: ['auth'],
    })
</script>