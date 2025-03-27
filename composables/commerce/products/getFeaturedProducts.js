// /composables/commerce/products/useFeaturedProducts.js
import { useRuntimeConfig } from '#imports';

export const getFeaturedProducts = (pageSize = 10) => {
  const config = useRuntimeConfig();

  return useFetch(`${config.public.commerceUrl}/rest/default/V1/products`, {
    headers: {
      'Authorization': `Bearer ${config.public.commerceApiToken}`,
    },
    params: {
      'searchCriteria[filterGroups][0][filters][0][field]': 'is_featured',
      'searchCriteria[filterGroups][0][filters][0][value]': true,
      'searchCriteria[filterGroups][0][filters][0][condition_type]': 'eq',
      'searchCriteria[pageSize]': pageSize, // Limit the number of products
    },
  });
};
