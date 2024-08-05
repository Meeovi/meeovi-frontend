import { useRuntimeConfig } from '#imports';

export const getInvoices = async () => {
  const config = useRuntimeConfig();
  try {
    const invoices = await $fetch(`${config.public.commerceUrl}/rest/default/V1/invoices`, {
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      }
    });
    return invoices;
  } catch (error) {
    console.error('Error fetching invoices:', error);
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized: Check your API token.');
    }
    return [];
  }
};

export const getInvoiceById = async (id) => {
  const config = useRuntimeConfig();
  try {
    const invoice = await $fetch(`${config.public.commerceUrl}/rest/default/V1/invoices/${id}`, {
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      }
    });
    return invoice;
  } catch (error) {
    console.error(`Error fetching invoice with ID ${id}:`, error);
    return null;
  }
};