<template>
    <div>
        
        <section data-bs-version="5.1" class="features07 scalem5 cid-uhB4hw1yxB mbr-fullscreen" id="features07-9l">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-10 card">
                        <div class="title-wrapper">
                            <h2 class="mbr-section-title mbr-fonts-style display-5">
                                View Invoice</h2>
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
                                        <NuxtLink class="card-text mbr-fonts-style display-7" :href="`/account/user/orders/my-order/${invoice?.order_id}`">Order #:
                                            {{ invoice?.order_id }}</NuxtLink>
                                        <p class="card-text mbr-fonts-style display-7">Order Date:
                                            {{ new Date(invoice?.created_at).toLocaleDateString() }}</p>
                                        <p class="card-text mbr-fonts-style display-7">Order Status:
                                            {{ invoice?.state }}</p>
                                        <p class="card-text mbr-fonts-style display-7">Purchased From: {{ invoice?.store_id }}</p>
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
                                        <p class="card-text mbr-fonts-style display-7">Customer Name: </p>
                                        <p class="card-text mbr-fonts-style display-7">Email: {{ invoice?.email_sent }}</p>
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
                                        <p class="card-text mbr-fonts-style display-7">{{ invoice?.billing_address_id }}
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
                                        <p class="card-text mbr-fonts-style display-7">{{ invoice?.shipping_address_id }}
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
                                            {{ invoice?.order_currency_code }}</p>
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
                                            Shipping Information
                                        </h4>
                                        <p class="card-text mbr-fonts-style display-7">{{ invoice?.shipping_address_id }}
                                        </p>
                                        <p class="card-text mbr-fonts-style display-7">Total Shipping Charges: {{ invoice?.shipping_amount }}</p>
                                        <p class="card-text mbr-fonts-style display-7">
                                            {{ invoice?.shipping_discount_tax_compensation_amount }}</p>
                                        <p class="card-text mbr-fonts-style display-7">{{ invoice?.shipping_incl_tax }}</p>
                                        <p class="card-text mbr-fonts-style display-7">{{ invoice?.shipping_tax_amount }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <NuxtImg loading="lazy" src="~/~/assets/images/background2.jpg" alt="Invoices">
        </section>

        <v-card title="Invoice Items" flat>
            <div class="container">
                <v-data-table :headers="headers" :items="invoice?.items" :items-per-page="5" class="elevation-1">
                    <template v-slot:[`item.name`]="{ item }">
                        <strong>{{ item.name }}</strong>
                    </template>
                    <template v-slot:[`item.price_incl_tax`]="{ item }">
                        {{ item.price_incl_tax }}
                    </template>
                    <template v-slot:[`item.qty`]="{ item }">
                        {{ item.qty }}
                    </template>
                    <template v-slot:[`item.price`]="{ item }">
                        {{ item.price }}
                    </template>
                    <template v-slot:[`item.tax_amount`]="{ item }">
                        <span v-html="item.tax_amount"></span>
                    </template>
                    <template v-slot:[`item.discount_amount`]="{ item }">
                        {{ item.discount_amount }}
                    </template>
                    <template v-slot:[`item.row_total`]="{ item }">
                        {{ item.row_total }}
                    </template>
                </v-data-table>
            </div>
        </v-card>
        <section data-bs-version="5.1" class="pricing1 lodgem5 cid-uhBqGPVpcI" id="apricing1-9s">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="mbr-section-head">
                            <h3 class="mbr-section-title mbr-fonts-style mb-0 display-5">
                                Invoice Totals</h3>

                        </div>
                        <div class="tabl-container">
                            <div class="tabl-item-row">
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        Subtotal
                                    </p>
                                </div>
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        {{ invoice?.subtotal }}
                                    </p>
                                </div>

                            </div>

                            <div class="tabl-item-row">
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        Shipping & Handling
                                    </p>
                                </div>
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        {{ invoice?.base_shipping_incl_tax }}
                                    </p>
                                </div>

                            </div>
                            <div class="tabl-item-row">
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        Adjustment Refund
                                    </p>
                                </div>
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        {{ invoice?.adjustment_negative }} {{ invoice?.adjustment }}
                                        {{ invoice?.adjustment_positive }}
                                    </p>
                                </div>

                            </div>
                            <div class="tabl-item-row">
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        Adjustment Fee
                                    </p>
                                </div>
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        {{ invoice?.base_adjustment_negative }} {{ invoice?.base_adjustment }}
                                        {{ invoice?.base_adjustment_positive }}
                                    </p>
                                </div>

                            </div>
                            <div class="tabl-item-row">
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        Tax
                                    </p>
                                </div>
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        {{ invoice?.tax_amount }}
                                    </p>
                                </div>
                            </div>
                            <div class="tabl-item-row">
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        <strong>Grand Total</strong>
                                    </p>
                                </div>
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        <strong>{{ invoice?.grand_total }}</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            headers: [{
                    text: 'Product',
                    value: 'name'
                },
                {
                    text: 'Price',
                    value: 'price_incl_tax'
                },
                {
                    text: 'Quantity',
                    value: 'qty'
                },
                {
                    text: 'Subtotal',
                    value: 'price'
                },
                {
                    text: 'Tax Amount',
                    value: 'tax_amount'
                },
                {
                    text: 'Discount Amount',
                    value: 'discount_amount'
                },
                {
                    text: 'Row Total',
                    value: 'tow_total',
                },
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
        getInvoiceById
    } from '~/composables/commerce/sales/getInvoices';

    const invoice = ref([]);

    onMounted(async () => {
        invoice.value = await getInvoiceById();
    });
    /*  const {
        getItems
      } = useDirectusItems()

      const coupons = await getItems({
        collection: "coupons",
      });*/

    useHead({
        title: 'Invoices',
    })

    definePageMeta({
        middleware: ['authenticated'],
    })
</script>