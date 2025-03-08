import Stripe from 'stripe';
import {
    MeiliSearch
} from 'meilisearch';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const stripe = new Stripe(useRuntimeConfig().stripeSecretKey);
    const sig = getHeader(event, 'stripe-signature');
    const webhookSecret = useRuntimeConfig().stripeWebhookSecret;
    const body = await readRawBody(event);

    let stripeEvent;
    try {
        stripeEvent = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    } catch (err) {
        return {
            error: `Webhook Error: ${err.message}`
        };
    }

    if (stripeEvent.type === 'checkout.session.completed') {
        const session = stripeEvent.data.object;
        const magentoCartId = session.metadata.magento_cart_id;
        const customerEmail = session.customer_email;

        // Create Magento Order
        const magentoOrder = await fetch(`${config.public.commerceUrl}/rest/V1/orders`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${useRuntimeConfig().commerceApiToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cart_id: magentoCartId,
                email: customerEmail,
                payment_method: 'stripe',
            }),
        }).then(res => res.json());

        console.log('Magento Order Created:', magentoOrder);

        // Index order in Meilisearch
        const client = new MeiliSearch({
            host: useRuntimeConfig().meiliHost
        });
        await client.index('orders').addDocuments([magentoOrder]);
    }

    return {
        success: true
    };
});