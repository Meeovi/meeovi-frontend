import { useRuntimeConfig } from '#imports';

export const getDeals = (maxPrice) => {
  const config = useRuntimeConfig();

  return useFetch(`${config.public.commerceUrl}/rest/default/V1/products`, {
    headers: {
      'Authorization': `Bearer ${config.public.commerceApiToken}`,
    },
    params: {
      'searchCriteria[filterGroups][0][filters][0][field]': 'price',
      'searchCriteria[filterGroups][0][filters][0][value]': maxPrice,
      'searchCriteria[filterGroups][0][filters][0][condition_type]': 'lteq',
    },
  });
};