<template>
    <div>
        <button @click="handleCheckout">Checkout</button>
    </div>
</template>

<script setup>
    const {
        $stripe
    } = useNuxtApp()

    const handleCheckout = async () => {
        try {
            // Call your backend to create a Checkout Session
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // Your order details
                }),
            })

            const session = await response.json()

            // Redirect to Stripe Checkout
            const result = await $stripe.redirectToCheckout({
                sessionId: session.id,
            })

            if (result.error) {
                console.error(result.error)
            }
        } catch (e) {
            console.error('Error:', e)
        }
    }
</script>