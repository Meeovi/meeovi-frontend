import { useRuntimeConfig } from '#imports';

export const getTransactions = async () => {
  const config = useRuntimeConfig();
  try {
    const transactions = await $fetch(`${config.public.commerceUrl}/rest/default/V1/transactions`, {
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      }
    });
    return transactions;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized: Check your API token.');
    }
    return [];
  }
};

export const getTransactionById = async (id) => {
  const config = useRuntimeConfig();
  try {
    const transaction = await $fetch(`${config.public.commerceUrl}/rest/default/V1/transactions/${id}`, {
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      }
    });
    return transaction;
  } catch (error) {
    console.error(`Error fetching transaction with ID ${id}:`, error);
    return null;
  }
};