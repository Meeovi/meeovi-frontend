<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <div ref="paymentElement"></div>
            <button type="submit">Pay now</button>
        </form>
    </div>
</template>

<script setup>
    const {
        $stripe
    } = useNuxtApp()
    const paymentElement = ref(null)
    let elements = null

    onMounted(async () => {
        // Get clientSecret from your server
        const response = await fetch('/api/create-payment-intent')
        const {
            clientSecret
        } = await response.json()

        elements = $stripe.elements({
            clientSecret
        })
        const paymentElementInstance = elements.create('payment')
        paymentElementInstance.mount(paymentElement.value)
    })

    const handleSubmit = async () => {
        const {
            error
        } = await $stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/payment-complete`,
            },
        })

        if (error) {
            console.error('Payment error:', error)
        }
    }
</script>