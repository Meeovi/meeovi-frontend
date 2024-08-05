import { useRuntimeConfig } from '#imports';

export const getCreditMemos = async () => {
  const config = useRuntimeConfig();
  try {
    const memos = await $fetch(`${config.public.commerceUrl}/rest/default/V1/creditmemos`, {
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      }
    });
    return memos;
  } catch (error) {
    console.error('Error fetching memos:', error);
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized: Check your API token.');
    }
    return [];
  }
};

export const getCreditMemoById = async (id) => {
  const config = useRuntimeConfig();
  try {
    const memo = await $fetch(`${config.public.commerceUrl}/rest/default/V1/creditmemo/${id}`, {
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      }
    });
    return memo;
  } catch (error) {
    console.error(`Error fetching memo with ID ${id}:`, error);
    return null;
  }
};