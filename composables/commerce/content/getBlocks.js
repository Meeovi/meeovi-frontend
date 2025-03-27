import { useRuntimeConfig } from '#imports';

export const getBlockById = async (id) => {
  const config = useRuntimeConfig();
  try {
    const block = await $fetch(`${config.public.commerceUrl}/rest/default/V1/cmsBlock/${id}`, {
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      }
    });
    return block;
  } catch (error) {
    console.error(`Error fetching block with ID ${id}:`, error);
    return null;
  }
};