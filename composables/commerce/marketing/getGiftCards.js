import { useRuntimeConfig } from '#imports';

export const getCards = async () => {
  const config = useRuntimeConfig();
    try {
      const cards = await $fetch(`${config.public.wordpressUrl}/wp-json/wc-pimwick/v1`, {
        headers: {
          'Authorization': `Bearer ${config.public.wordpressToken}`
        }
      });
      return cards;
    } catch (error) {
      console.error('Error fetching cards:', error);
      return [];
    }
  };

  export const useCardById = async (id) => {
    try {
      const card = await $fetch(`${config.public.wordpressUrl}/wp-json/wc-pimwick/v1/${id}`, {
        headers: {
          'Authorization': `Bearer ${config.public.wordpressToken}`
        }
      });
      return card;
    } catch (error) {
      console.error(`Error fetching card with ID ${id}:`, error);
      return null;
    }
  };