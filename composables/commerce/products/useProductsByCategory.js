// /composables/commerce/products/useProductsByCategory.js
import { useRuntimeConfig } from '#imports';

export const useProductsByCategory = (categoryId) => {
  const config = useRuntimeConfig();

  return useFetch(`${config.public.commerceUrl}/rest/default/V1/products`, {
    headers: {
      'Authorization': `Bearer ${config.public.commerceApiToken}`,
    },
    params: {
      'searchCriteria[filterGroups][0][filters][0][field]': 'category_id',
      'searchCriteria[filterGroups][0][filters][0][value]': categoryId,
      'searchCriteria[filterGroups][0][filters][0][condition_type]': 'eq',
    },
  });
};
