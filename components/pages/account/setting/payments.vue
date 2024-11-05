<template>
  <v-card>
    <v-card-title>Payment Methods</v-card-title>
    <v-card-text>
      <v-alert v-if="error" type="error">{{ error }}</v-alert>
      <v-progress-circular v-if="loading" indeterminate color="primary"></v-progress-circular>
      <v-list v-else>
        <v-list-item v-for="(method, index) in paymentMethods" :key="index">
          <v-list-item-title>{{ method.type }} ending in {{ method.last4 }}</v-list-item-title>
          <template v-slot:append>
            <v-btn icon @click="removePaymentMethod(method.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-list-item>
      </v-list>
      <div ref="paypalButtonContainer"></div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { useRuntimeConfig } from 'nuxt/app'

const config = useRuntimeConfig()
const paymentMethods = ref([]);
const loading = ref(false);
const error = ref(null);
const paypalButtonContainer = ref(null);

const fetchPaymentMethods = async () => {
  loading.value = true;
  error.value = null;
  try {
    const response = await $fetch('/api/customers/me/payment-methods', {
      method: 'GET',
      headers: {
        // Include any necessary authentication headers
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      }
    });
    
    console.log('API Response:', response);
    
    if (typeof response === 'string' && response.startsWith('<!DOCTYPE html>')) {
      throw new Error('Received HTML response instead of JSON. This might indicate an authentication issue or incorrect API endpoint.');
    }
    
    if (Array.isArray(response)) {
      paymentMethods.value = response.map(method => ({
        id: method.id || '',
        type: method.type || '',
        last4: method.last4 || ''
      }));
    } else if (response && typeof response === 'object') {
      // If the response is an object, it might contain a data property with the array
      const methodsArray = response.data || [];
      if (Array.isArray(methodsArray)) {
        paymentMethods.value = methodsArray.map(method => ({
          id: method.id || '',
          type: method.type || '',
          last4: method.last4 || ''
        }));
      } else {
        throw new Error(`Unexpected response format: ${JSON.stringify(response)}`);
      }
    } else {
      throw new Error(`Unexpected response format: ${JSON.stringify(response)}`);
    }
    
    console.log('Processed payment methods:', paymentMethods.value);
  } catch (err) {
    error.value = 'Failed to fetch payment methods: ' + (err.message || 'Unknown error');
    console.error('Error fetching payment methods:', err);
  } finally {
    loading.value = false;
  }
};

const initializePayPalButton = () => {
  if (window.paypal) {
    window.paypal.Buttons({
      createOrder: (data, actions) => {
        // This function sets up the details of the transaction
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '0.01' // Set this to the appropriate amount or handle it dynamically
            }
          }]
        });
      },
      onApprove: async (data, actions) => {
        // This function captures the funds from the transaction
        const order = await actions.order.capture();
        console.log('Transaction completed', order);
        
        // Here you would typically send the order details to your server
        // to save the new payment method
        try {
          await fetch('/api/customers/me/payment-methods', {
            method: 'POST',
            body: JSON.stringify({
              paypalOrderId: order.id,
              // Include any other necessary details
            })
          });
          await fetchPaymentMethods(); // Refresh the list of payment methods
        } catch (err) {
          error.value = 'Failed to save new payment method';
          console.error(err);
        }
      }
    }).render(paypalButtonContainer.value);
  } else {
    console.error('PayPal SDK not loaded');
  }
};

onMounted(() => {
  fetchPaymentMethods();
  
  // Load PayPal SDK
  const script = document.createElement('script');
  script.src = `https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID`;
  script.addEventListener('load', initializePayPalButton);
  document.body.appendChild(script);
});
</script>