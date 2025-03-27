import { useRuntimeConfig } from '#imports';

export const getOrders = async () => {
  try {
    const orders = await $fetch(`${config.public.wordpressUrl}/wp-json/wc/v3/orders`, {
      params: {
        consumer_key: consumerKey,
        consumer_secret: consumerSecret
      }
    });
    return orders;
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};

export const getOrderById = async (id) => {
  try {
    const orders = await $fetch(`${config.public.wordpressUrl}/wp-json/wc/v3/orders/${id}`, {
      params: {
        consumer_key: consumerKey,
        consumer_secret: consumerSecret
      }
    });
    return orders;
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};