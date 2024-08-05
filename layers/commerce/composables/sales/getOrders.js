import { useRuntimeConfig } from '#imports';

export const getOrders = async () => {
  const config = useRuntimeConfig();
  try {
    const orders = await $fetch(`${config.public.commerceUrl}/rest/default/V1/orders`, {
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      }
    });
    return orders;
  } catch (error) {
    console.error('Error fetching orders:', error);
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized: Check your API token.');
    }
    return [];
  }
};

export const getOrderById = async (id) => {
  const config = useRuntimeConfig();
  try {
    const order = await $fetch(`${config.public.commerceUrl}/rest/default/V1/orders/${id}`, {
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      }
    });
    return order;
  } catch (error) {
    console.error(`Error fetching order with ID ${id}:`, error);
    return null;
  }
};

export const getOrdersStatuses = async () => {
  const config = useRuntimeConfig();
  try {
    const statuses = await $fetch(`${config.public.commerceUrl}/rest/default/V1/orders/statuses`, {
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      }
    });
    return statuses;
  } catch (error) {
    console.error('Error fetching orders statuses:', error);
    return [];
  }
};

export const getOrdersComments = async (id) => {
  const config = useRuntimeConfig();
  try {
    const comments = await $fetch(`${config.public.commerceUrl}/rest/default/V1/orders/${id}/comments`, {
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      }
    });
    return comments;
  } catch (error) {
    console.error(`Error fetching comments for order with ID ${id}:`, error);
    return [];
  }
};




