<template>
  <div class="cartPage">
    <form action="">
      <v-row>
        <v-col cols="8">
          <v-row>
            <v-col cols="12">
              <productListing />
            </v-col>

            <v-col cols="12">
              <v-text-field clearable label="Add Coupon"></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-card style="padding-left: 15px; padding-bottom: 15px;">
                <v-tabs v-model="tab" bg-color="transparent">
                  <v-tab value="one">Billing Address</v-tab>
                  <v-tab value="two">Shipping Address</v-tab>
                </v-tabs>

                <v-card-text>
                  <v-window v-model="tab">
                    <v-window-item value="one">
                      <billingaddress />
                    </v-window-item>

                    <v-window-item value="two">
                      <shippingaddress />
                    </v-window-item>
                  </v-window>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="4">
          <v-row>
            <v-card min-width="500px" style="padding-left: 15px; padding-bottom: 15px;">
              <v-col cols="12">
                <orderSummary />
              </v-col>

              <v-col cols="12">
                <checkout />
              </v-col>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </form>
  </div>
</template>

<script>
  import billingaddress from '../../../components/commerce/addresses/billingAddress.vue'
  import shippingaddress from '../../../components/commerce/addresses/shippingAddress.vue'
  import orderSummary from '../../../components/commerce/cart/orderSummary.vue'
  import checkout from '../../../components/commerce/cart/checkout.vue'
  import productListing from '../../../components/commerce/cart/productListing.vue'
  import paymentMethods from '../../../components/commerce/cart/paymentMethods.vue'
  import shippingMethods from '../../../components/commerce/cart/shippingMethods.vue'
  
  export default {
    components: {
      billingaddress,
      shippingaddress,
      orderSummary,
      checkout,
      productListing,
      paymentMethods,
      shippingMethods
    }
  }
</script>

<script setup>
  definePageMeta({
    layout: 'nolive',
  });
  
  useHead({
    title: 'Shopping Cart',
  })
</script>