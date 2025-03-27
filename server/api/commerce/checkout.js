import Stripe from 'stripe';

export default defineEventHandler(async (event) => {
  const stripe = new Stripe(useRuntimeConfig().stripeSecretKey);
  const body = await readBody(event);

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: body.successUrl + '?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: body.cancelUrl,
      customer_email: body.customer_email,
      line_items: body.items,
      metadata: body.metadata,
    });

    return { url: session.url };
  } catch (error) {
    return { error: error.message };
  }
});
