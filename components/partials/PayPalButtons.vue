<!-- components/PayPalButtons.vue -->
<template>
  <div id="paypal-button-container"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { loadScript } from "@paypal/paypal-js"
import { useCartStore } from '~/stores/cartStore'

const cart = useCartStore()
const emits = defineEmits(['payment-success', 'payment-error'])

onMounted(async () => {
  try {
    const paypal = await loadScript({ 
      "client-id": process.env.PAYPAL_CLIENT_ID,
      currency: "USD"
    })

    paypal.Buttons({
      createOrder: async (data, actions) => {
        // Get final cart totals from Magento
        await cart.calculateTotal()

        return actions.order.create({
          purchase_units: [{
            amount: {
              value: cart.total.toString()
            },
            items: cart.items.map(item => ({
              name: item.name,
              sku: item.sku,
              unit_amount: {
                value: item.price.toString(),
                currency_code: 'USD'
              },
              quantity: item.qty
            }))
          }]
        })
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture()
        
        // Create Magento order
        try {
          const response = await fetch(`${process.env.MAGENTO_API_URL}/carts/mine/payment-information`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${process.env.MAGENTO_ACCESS_TOKEN}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              paymentMethod: {
                method: 'paypal',
                additional_data: {
                  paypal_order_id: order.id
                }
              }
            })
          })

          if (!response.ok) {
            throw new Error('Failed to create Magento order')
          }

          const magentoOrder = await response.json()
          emits('payment-success', { paypal: order, magento: magentoOrder })
          await cart.clearCart()
        } catch (error) {
          emits('payment-error', error)
        }
      },
      onError: (err) => {
        emits('payment-error', err)
      }
    }).render('#paypal-button-container')
  } catch (error) {
    console.error('Failed to load PayPal SDK:', error)
  }
})
</script>
