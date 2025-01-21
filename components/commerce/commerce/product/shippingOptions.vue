<template>
    <v-row>
        <v-col cols="12">
            <h6>Delivery</h6>
        </v-col>

        <v-col cols="12">
            <v-select v-model="selectedOption" :items="shippingOptions" item-text="carrier_title"
                label="Select Delivery Method" single-line variant="solo" :loading="loading"
                :disabled="loading || shippingOptions.length === 0"></v-select>
        </v-col>
    </v-row>
</template>

<script>

    const config = useRuntimeConfig();
    export default {
        props: {
            cartId: {
                type: String,
                required: true, // Ensure the cart ID is provided
            },
        },
        data() {
            return {
                shippingOptions: [], // Stores shipping methods fetched from Magento
                selectedOption: null, // Selected delivery method
                loading: false, // Loading state for API call
            };
        },
        methods: {
            async fetchShippingOptions() {
                this.loading = true;
                try {
                    const response = await $fetch(config.public.commerceGraphql, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            query: `
                    query GetShippingMethods($cartId: String!) {
                        cart(cart_id: $cartId) {
                            shipping_addresses {
                                available_shipping_methods {
                                    carrier_code
                                    carrier_title
                                    method_code
                                    method_title
                                    amount {
                                        value
                                        currency
                                    }
                                }
                            }
                        }
                    }
                `,
                            variables: {
                                cartId: this.cartId,
                            },
                        }),
                    });

                    console.log('Shipping Methods Response:', response); // Debugging
                    const shippingMethods =
                        response?.data?.cart?.shipping_addresses[0]?.available_shipping_methods || [];
                    this.shippingOptions = shippingMethods;
                } catch (error) {
                    console.error('Error fetching shipping methods:', error);
                    this.shippingOptions = [];
                } finally {
                    this.loading = false;
                }
            },
        },
        mounted() {
            // Fetch shipping options when the component is mounted
            this.fetchShippingOptions();
        },
    };
</script>