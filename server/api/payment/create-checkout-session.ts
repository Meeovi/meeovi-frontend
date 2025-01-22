// server/api/create-checkout-session.ts
import Stripe from 'stripe';

export default defineEventHandler(async (event) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2023-10-16' // Use latest API version
  });

  const body = await readBody(event)

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Your Product',
            },
            unit_amount: 2000, // $20.00
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.APP_URL}/success`,
      cancel_url: `${process.env.APP_URL}/cancel`,
    });

    return { id: session.id };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Error creating checkout session'
    })
  }
})
