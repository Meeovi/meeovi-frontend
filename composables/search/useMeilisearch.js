import { useRuntimeConfig } from '#imports';
import MeiliSearch from 'meilisearch';

const meilisearchClient = new MeiliSearch({
  host: useRuntimeConfig().public.meilisearch.host, // Use your .env configuration
  apiKey: useRuntimeConfig().public.meilisearch.searchApiKey,
});

export const useSearch = () => {
  const searchIndex = meilisearchClient.index('meeovi'); // Replace with your Meilisearch index

  const search = async (query, options = {}) => {
    try {
      const response = await searchIndex.search(query, {
        // Default search options
        limit: options.limit || 20,
        offset: options.offset || 0,
        sort: options.sort || undefined, // Example: ['price:asc']
        filter: options.filters || undefined, // Example: 'category="electronics"'
        facets: options.facets || undefined, // Example: ['category', 'brand']
        attributesToRetrieve: options.attributes || ['*'], // Define specific fields to retrieve
      });
      return response;
    } catch (error) {
      console.error('Meilisearch Error:', error);
      throw new Error('Failed to fetch search results.');
    }
  };

  return {
    search,
  };
};
