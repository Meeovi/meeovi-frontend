import { useRuntimeConfig } from '#imports';

export const getShipments = async () => {
  const config = useRuntimeConfig();
  try {
    const shipments = await $fetch(`${config.public.commerceUrl}/rest/default/V1/shipments`, {
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      }
    });
    return shipments;
  } catch (error) {
    console.error('Error fetching shipments:', error);
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized: Check your API token.');
    }
    return [];
  }
};

export const getShipmentById = async (id) => {
  const config = useRuntimeConfig();
  try {
    const shipment = await $fetch(`${config.public.commerceUrl}/rest/default/V1/shipments/${id}`, {
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      }
    });
    return shipment;
  } catch (error) {
    console.error(`Error fetching shipment with ID ${id}:`, error);
    return null;
  }
};