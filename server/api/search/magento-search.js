import { defineEventHandler, getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const searchQuery = query.q || '';
  const page = query.page || 1;
  const pageSize = query.pageSize || 10;

  try {
    const config = useRuntimeConfig();

    // Perform search with properly structured request
    const response = await $fetch(`${config.public.commerceUrl}/rest/V1/products`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${config.public.commerceApiToken}`,
        'Content-Type': 'application/json',
      },
      params: {
        'searchCriteria[filterGroups][0][filters][0][field]': 'name', // Search field
        'searchCriteria[filterGroups][0][filters][0][value]': `%${searchQuery}%`, // Search term
        'searchCriteria[filterGroups][0][filters][0][conditionType]': 'like', // Condition type
        'searchCriteria[pageSize]': pageSize, // Number of results per page
        'searchCriteria[currentPage]': page, // Current page
      },
    });

    // Extract product data and calculate total pages
    const products = response.items || [];
    const totalPages = Math.ceil((response.total_count || 0) / pageSize);

    return { results: products, totalPages };
  } catch (error) {
    console.error('Error fetching search results from Magento:', error);
    throw new Error('Failed to fetch search results');
  }
});