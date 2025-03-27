<template>
  <div>
      <!---->
      <section data-bs-version="5.1" class="features07 scalem5 cid-uhB4hw1yxB mbr-fullscreen" id="features07-9l">
          <div class="container">
              <div class="row">
                  <div class="col-12 col-lg-10 card">
                      <div class="title-wrapper">
                          <h2 class="mbr-section-title mbr-fonts-style display-5">
                              View Order</h2>
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
                                      <NuxtLink class="card-text mbr-fonts-style display-7" :href="`/account/user/orders/my-order/${order?.order_id}`">Order #:
                                          {{ order?.order_id }}</NuxtLink>
                                      <p class="card-text mbr-fonts-style display-7">Order Date:
                                          {{ new Date(order?.created_at).toLocaleDateString() }}</p>
                                      <p class="card-text mbr-fonts-style display-7">Order Status:
                                          {{ order?.status }}</p>
                                      <p class="card-text mbr-fonts-style display-7">Purchased From: {{ order?.store_id }}</p>
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
                                      <p class="card-text mbr-fonts-style display-7">Customer Name: {{ order?.customer_firstname }} {{ order?.customer_lastname }}</p>
                                      <p class="card-text mbr-fonts-style display-7">Email: {{ order?.customer_email }}</p>
                                      <p class="card-text mbr-fonts-style display-7">Customer Group: {{ order?.customer_group_id }}</p>
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
                                      <p class="card-text mbr-fonts-style display-7">{{ order?.billing_address?.prefix }} {{ order?.billing_address?.street }} {{ order?.billing_address?.suffix }} {{ order?.billing_address?.city }} {{ order?.billing_address?.postcode }} {{ order?.billing_address?.country_code }} {{ order?.billing_address?.telephone }}
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
                                      <p class="card-text mbr-fonts-style display-7">{{ order?.shipping_address?.prefix }} {{ order?.shipping_address?.street }} {{ order?.shipping_address?.suffix }} {{ order?.shipping_address?.city }} {{ order?.shipping_address?.postcode }} {{ order?.shipping_address?.country_code }} {{ order?.shipping_address?.telephone }}
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
                                      <p class="card-text mbr-fonts-style display-7">Paid with {{ order?.cc_type }} {{ order?.cc_last4 }}</p>
                                      <p class="card-text mbr-fonts-style display-7">The order was placed using {{ order?.order_currency_code }}</p>
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
                                      <p class="card-text mbr-fonts-style display-7">{{ order?.shipping_address_id }}
                                      </p>
                                      <p class="card-text mbr-fonts-style display-7">Total Shipping Charges: {{ order?.shipping_amount }}</p>
                                      <p class="card-text mbr-fonts-style display-7">
                                          {{ order?.shipping_discount_tax_compensation_amount }}</p>
                                      <p class="card-text mbr-fonts-style display-7">{{ order?.shipping_incl_tax }}</p>
                                      <p class="card-text mbr-fonts-style display-7">{{ order?.shipping_tax_amount }}
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
          <NuxtImg loading="lazy" src="~/~/assets/images/background2.jpg" alt="Orders">
      </section>

      <v-card title="Order Items" flat>
          <div class="container">
              <v-data-table :headers="headers" :items="order?.items" :items-per-page="5" class="elevation-1">
                  <template v-slot:[`item.name`]="{ item }">
                      <strong>{{ item.name }}</strong>
                  SKU: {{ item?.sku }}
                  </template>
                  <template v-slot:[`item.tax_amount`]="{ item }">
                      <span v-html="item.status"></span>
                  </template>
                  <template v-slot:[`item.original_price`]="{ item }">
                      {{ item.original_price }}
                  </template>
                  <template v-slot:[`item.price_incl_tax`]="{ item }">
                      {{ item.price_incl_tax }}
                  </template>
                  <template v-slot:[`item.qty_ordered`]="{ item }">
                      {{ item.qty_ordered }}
                  </template>
                  <template v-slot:[`item.price`]="{ item }">
                      {{ item.price }}
                  </template>
                  <template v-slot:[`item.tax_amount`]="{ item }">
                      <span v-html="item.tax_amount"></span>
                  </template>
                  <template v-slot:[`item.tax_percent`]="{ item }">
                      <span v-html="item.tax_percent"></span>
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
                              Order Totals</h3>

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
                                      {{ order?.subtotal }}
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
                                      {{ order?.base_shipping_incl_tax }}
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
                                      {{ order?.tax_amount }}
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
                                      <strong>{{ order?.grand_total }}</strong>
                                  </p>
                              </div>
                          </div>
                          <div class="tabl-item-row">
                              <div class="tabl-item-column">
                                  <p class="card-text mbr-fonts-style mb-0 display-7">
                                      <strong>Total Paid</strong>
                                  </p>
                              </div>
                              <div class="tabl-item-column">
                                  <p class="card-text mbr-fonts-style mb-0 display-7">
                                      <strong>{{ order?.total_paid }}</strong>
                                  </p>
                              </div>
                          </div>
                          <div class="tabl-item-row">
                              <div class="tabl-item-column">
                                  <p class="card-text mbr-fonts-style mb-0 display-7">
                                      <strong>Total Refunded</strong>
                                  </p>
                              </div>
                              <div class="tabl-item-column">
                                  <p class="card-text mbr-fonts-style mb-0 display-7">
                                      <strong>{{ order?.total_refunded }}</strong>
                                  </p>
                              </div>
                          </div>
                          <div class="tabl-item-row">
                              <div class="tabl-item-column">
                                  <p class="card-text mbr-fonts-style mb-0 display-7">
                                      <strong>Total Due</strong>
                                  </p>
                              </div>
                              <div class="tabl-item-column">
                                  <p class="card-text mbr-fonts-style mb-0 display-7">
                                      <strong>{{ order?.total_due }}</strong>
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
      getOrderById
  } from '~/composables/commerce/sales/getOrders';

  const order = ref([]);

  onMounted(async () => {
      order.value = await getOrderById();
  });
  /*  const {
      getItems
    } = useDirectusItems()

    const coupons = await getItems({
      collection: "coupons",
    });*/

  useHead({
      title: 'Orders',
  })

  definePageMeta({
      middleware: ['auth'],
  })
</script>