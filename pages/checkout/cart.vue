<template>
    <div class="cartPage">
        <v-row>
            <!--Product List-->
            <v-col cols="8">
                <v-row>
                    <!--Product List-->
                    <v-col cols="12">
                        <cartItems />
                    </v-col>

                    <!--Address List-->
                    <v-col cols="12">
                        <v-card>
                            <v-tabs v-model="tab" bg-color="primary">
                                <v-tab value="one">Billing Address</v-tab>
                                <v-tab value="two">Shipping Address</v-tab>
                            </v-tabs>

                            <v-card-text>
                                <v-tabs-window v-model="tab">
                                    <v-tabs-window-item value="one">
                                        <billingAddress />
                                    </v-tabs-window-item>

                                    <v-tabs-window-item value="two">
                                        <shippingAddress />
                                    </v-tabs-window-item>
                                </v-tabs-window>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="4">
                <v-row>
                    <!--Order Summary-->
                    <v-col cols="12"><orderSummary /></v-col>
                </v-row>
            </v-col>

            <!--Product List-->
            <v-col cols="12">
                <relatedProducts />
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
    import cartItems from '~/components/cart/cartItems.vue'
    import orderSummary from '~/components/cart/orderSummary.vue'
    import billingAddress from '~/components/cart/addressBilling.vue'
    import shippingAddress from '~/components/cart/addressShipping.vue'
    import relatedProducts from '~/components/product/relatedproducts.vue'

    const tab = ref(null);
    definePageMeta({
    layout: 'nolive',
  });

    useHead({
        title: 'Cart'
    })
</script>