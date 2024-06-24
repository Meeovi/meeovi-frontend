const apiUrl = process.env.API_URL || 'https://meeovi.meeovicms.com'
const consumerKey = 'ck_71513251ef29d6eb34d8e91337e10c5dc29785e9';
const consumerSecret = 'cs_6ab0eaa4c194e84b414cef8a25f7b3324c715b88';

export const getOrders = async () => {
  try {
    const orders = await $fetch(`${apiUrl}/wp-json/wc/v3/orders`, {
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
    const orders = await $fetch(`${apiUrl}/wp-json/wc/v3/orders/${id}`, {
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