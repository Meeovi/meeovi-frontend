<template>
    <div>
        <form @submit.prevent="handlePayment">
            <div ref="cardElement"></div>
            <button type="submit">Pay</button>
        </form>
    </div>
</template>

<script setup>
    const {
        $stripe
    } = useNuxtApp()
    const cardElement = ref(null)
    let card = null

    onMounted(() => {
        const elements = $stripe.elements()
        card = elements.create('card')
        card.mount(cardElement.value)
    })

    onUnmounted(() => {
        if (card) {
            card.destroy()
        }
    })

    const handlePayment = async () => {
        try {
            const {
                error,
                paymentMethod
            } = await $stripe.createPaymentMethod({
                type: 'card',
                card: card,
            })

            if (error) {
                console.error('Error:', error)
                return
            }

            // Send paymentMethod.id to your server for processing
            console.log('PaymentMethod:', paymentMethod)
        } catch (e) {
            console.error('Error:', e)
        }
    }
</script>

<style>
    .StripeElement {
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 4px;
    }
</style>