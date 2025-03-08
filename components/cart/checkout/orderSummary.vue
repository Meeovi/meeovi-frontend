<template>
    <v-card class="order-summary">
        <v-card-title class="d-flex justify-space-between align-center pa-4">
            <span class="text-h5">Order Summary</span>
            <span class="text-subtitle-1">({{ cartTotals.items_qty }} items)</span>
        </v-card-title>

        <v-card-text>
            <!-- Promo Code Section -->
            <div class="px-4 py-2">
                <!-- Show applied coupon if exists -->
                <template v-if="appliedCoupon">
                    <v-alert type="success" variant="tonal" class="mb-2">
                        <div class="d-flex justify-space-between align-center">
                            <div>
                                <strong>Applied Code:</strong> {{ appliedCoupon }}
                            </div>
                            <v-btn density="comfortable" icon="mdi-close" variant="text" @click="removeCoupon">
                            </v-btn>
                        </div>
                    </v-alert>
                </template>
                <!-- Show coupon input form if no coupon is applied -->
                <template v-else>
                    <v-form @submit.prevent="applyCoupon">
                        <v-row no-gutters>
                            <v-col cols="8" class="pr-2">
                                <v-text-field v-model="couponCode" label="Promo Code" hide-details density="comfortable"
                                    :error="couponError" :loading="loading"></v-text-field>
                            </v-col>
                            <v-col cols="4">
                                <v-btn block color="primary" type="submit" :loading="loading" :disabled="!couponCode">
                                    Apply
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </template>
            </div>

            <v-list>
                <!-- Subtotal -->
                <v-list-item>
                    <v-row>
                        <v-col cols="8">
                            <div class="text-subtitle-1">Items Subtotal</div>
                            <div class="text-caption text-grey">Original Price</div>
                            <template v-if="cartTotals.discount_amount">
                                <div class="text-caption text-success">
                                    Savings
                                </div>
                            </template>
                        </v-col>
                        <v-col cols="4" class="text-right">
                            <div class="text-subtitle-1">{{ formatPrice(cartTotals.subtotal) }}</div>
                            <div class="text-caption text-grey">{{ formatPrice(cartTotals.base_subtotal) }}</div>
                            <template v-if="cartTotals.discount_amount">
                                <div class="text-caption text-success">
                                    -{{ formatPrice(Math.abs(cartTotals.discount_amount)) }}
                                </div>
                            </template>
                        </v-col>
                    </v-row>
                </v-list-item>

                <!-- Shipping -->
                <v-list-item>
                    <v-row>
                        <v-col cols="8">
                            <div class="text-subtitle-1">Delivery</div>
                        </v-col>
                        <v-col cols="4" class="text-right">
                            <div class="text-subtitle-1">
                                {{ cartTotals.shipping_amount ? formatPrice(cartTotals.shipping_amount) : 'Free' }}
                            </div>
                        </v-col>
                    </v-row>
                </v-list-item>

                <!-- Tax -->
                <v-list-item>
                    <v-row>
                        <v-col cols="8">
                            <div class="text-subtitle-1">Estimated Sales Tax</div>
                        </v-col>
                        <v-col cols="4" class="text-right">
                            <div class="text-subtitle-1">{{ formatPrice(cartTotals.tax_amount) }}</div>
                        </v-col>
                    </v-row>
                </v-list-item>
            </v-list>

            <!-- Promo Code Section -->
            <v-expand-transition>
                <div v-if="appliedCoupon" class="px-4 py-2">
                    <v-alert type="success" variant="tonal" class="mb-2">
                        <div class="d-flex justify-space-between align-center">
                            <div>
                                <strong>Applied Code:</strong> {{ appliedCoupon }}
                            </div>
                            <v-btn density="comfortable" icon="mdi-close" variant="text" @click="removeCoupon">
                            </v-btn>
                        </div>
                    </v-alert>
                </div>
            </v-expand-transition>

            <!-- Savings Alert -->
            <template v-if="cartTotals.discount_amount">
                <v-alert color="success" variant="tonal" class="mx-4 my-2">
                    You are saving {{ formatPrice(Math.abs(cartTotals.discount_amount)) }} on your order today!
                </v-alert>
            </template>

            <!-- Total -->
            <v-divider class="my-2"></v-divider>
            <div class="d-flex justify-space-between align-center px-4 py-3">
                <span class="text-h6">Total</span>
                <span class="text-h6">{{ formatPrice(cartTotals.grand_total) }}</span>
            </div>

            <!-- Paypal CC Component-->
            <div id="pp-view-cart"></div>

            <!-- Terms and Conditions -->
            <div class="text-center mt-4 text-caption">
                By placing my order, you agree to our
                <v-btn variant="text" density="compact" class="text-caption pa-0" to="/terms">
                    Terms and Conditions
                </v-btn>
                and our
                <v-btn variant="text" density="compact" class="text-caption pa-0" to="/privacy">
                    Privacy Policy
                </v-btn>
            </div>
        </v-card-text>

        <!-- Alerts -->
        <v-snackbar v-model="showSuccessAlert" color="success">
            {{ alertMessage }}
            <template v-slot:actions>
                <v-btn color="white" variant="text" @click="showSuccessAlert = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>

        <v-snackbar v-model="showErrorAlert" color="error">
            {{ alertMessage }}
            <template v-slot:actions>
                <v-btn color="white" variant="text" @click="showErrorAlert = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-card>
</template>

<script setup>
    import {
        ref,
        onMounted
    } from 'vue';
    import { loadScript } from '@paypal/paypal-js';

    // State management
    const cartTotals = ref({
        items_qty: 0,
        subtotal: 0,
        base_subtotal: 0,
        discount_amount: 0,
        shipping_amount: 0,
        tax_amount: 0,
        grand_total: 0
    });

    const loading = ref(false);
    const couponCode = ref('');
    const appliedCoupon = ref('');
    const couponError = ref(false);
    const showSuccessAlert = ref(false);
    const showErrorAlert = ref(false);
    const alertMessage = ref('');

    // Magento API configuration
    const config = useRuntimeConfig();
    const MAGENTO_API_URL = config.public.commerceUrl;
    const MAGENTO_ACCESS_TOKEN = config.public.commerceApiToken;

    // API Headers
    const headers = {
        'Authorization': `Bearer ${MAGENTO_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
    };

    // Fetch cart totals
    const fetchCartTotals = async () => {
        try {
            loading.value = true;
            const response = await fetch(`${MAGENTO_API_URL}/rest/V1/carts/mine/totals`, {
                method: 'GET',
                headers
            });

            if (!response.ok) throw new Error('Failed to fetch cart totals');
            const data = await response.json();
            cartTotals.value = data;

            // Check for applied coupon
            if (data.coupon_code) {
                appliedCoupon.value = data.coupon_code;
            }
        } catch (error) {
            showError('Failed to load cart totals');
            console.error('Error fetching cart totals:', error);
        } finally {
            loading.value = false;
        }
    };

    // Apply coupon code
    const applyCoupon = async () => {
        try {
            loading.value = true;
            couponError.value = false;

            const response = await fetch(`${MAGENTO_API_URL}/rest/V1/carts/mine/coupons/${couponCode.value}`, {
                method: 'PUT',
                headers
            });

            if (!response.ok) throw new Error('Invalid coupon code');

            const success = await response.json();
            if (success) {
                appliedCoupon.value = couponCode.value;
                couponCode.value = '';
                await fetchCartTotals();
                showSuccess('Promo code applied successfully');
            } else {
                throw new Error('Failed to apply coupon');
            }
        } catch (error) {
            couponError.value = true;
            showError('Invalid promo code');
            console.error('Error applying coupon:', error);
        } finally {
            loading.value = false;
        }
    };

    // Remove coupon code
    const removeCoupon = async () => {
        try {
            loading.value = true;

            const response = await fetch(`${MAGENTO_API_URL}/rest/V1/carts/mine/coupons`, {
                method: 'DELETE',
                headers
            });

            if (!response.ok) throw new Error('Failed to remove coupon');

            appliedCoupon.value = '';
            await fetchCartTotals();
            showSuccess('Promo code removed successfully');
        } catch (error) {
            showError('Failed to remove promo code');
            console.error('Error removing coupon:', error);
        } finally {
            loading.value = false;
        }
    };

    // Place order
    const placeOrder = async () => {
        try {
            loading.value = true;
            // Add your order placement logic here
            // This would typically involve calling the Magento API endpoint for order placement
            // Example: POST /V1/carts/mine/payment-information
        } catch (error) {
            showError('Failed to place order');
            console.error('Error placing order:', error);
        } finally {
            loading.value = false;
        }
    };

    // Helper functions
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
    };

    const showSuccess = (message) => {
        alertMessage.value = message;
        showSuccessAlert.value = true;
    };

    const showError = (message) => {
        alertMessage.value = message;
        showErrorAlert.value = true;
    };

// Initialize PayPal
onMounted(async () => {
  try {
    const config = useRuntimeConfig();
    const paypal = await loadScript({
      'client-id': config.public.paypalClientId,
      'components': 'buttons,cart'
    });

    paypal.Buttons({
      // Create order with actual cart data
      createOrder: async function(data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              currency_code: 'USD',
              value: cartTotals.value.grand_total.toString(),
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: cartTotals.value.subtotal.toString()
                },
                shipping: {
                  currency_code: 'USD',
                  value: cartTotals.value.shipping_amount.toString()
                },
                tax_total: {
                  currency_code: 'USD',
                  value: cartTotals.value.tax_amount.toString()
                },
                discount: {
                  currency_code: 'USD',
                  value: Math.abs(cartTotals.value.discount_amount).toString()
                }
              }
            },
            items: await getCartItems() // You'll need to implement this function
          }]
        });
      },
      onApprove: async function(data, actions) {
        try {
          const order = await actions.order.capture();
          // Here you would integrate with your Magento order placement logic
          await placeOrder(order);
          // Handle successful order placement
        } catch (error) {
          console.error('Payment failed:', error);
          showError('Payment failed. Please try again.');
        }
      },
      onError: function(err) {
        console.error('PayPal error:', err);
        showError('There was an error with PayPal. Please try again.');
      }
    }).render('#pp-view-cart');
  } catch (error) {
    console.error('Failed to load PayPal JS SDK:', error);
    showError('Failed to initialize payment system');
  }
});

// Add this function to fetch cart items
async function getCartItems() {
  try {
    const response = await fetch(`${MAGENTO_API_URL}/rest/V1/carts/mine/items`, {
      method: 'GET',
      headers
    });
    
    if (!response.ok) throw new Error('Failed to fetch cart items');
    
    const cartItems = await response.json();
    return cartItems.map(item => ({
      name: item.name,
      unit_amount: {
        currency_code: 'USD',
        value: item.price.toString()
      },
      quantity: item.qty,
      sku: item.sku
    }));
  } catch (error) {
    console.error('Error fetching cart items:', error);
    throw error;
  }
}
</script>

<style scoped>
    .order-summary {
        position: sticky;
        top: 24px;
    }
</style>