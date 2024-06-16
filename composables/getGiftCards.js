const apiUrl = process.env.API_URL || 'https://meeovi.meeovicms.com'
const wordpressToken = process.env.WORDPRESS_TOKEN ||
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21lZW92aS5tZWVvdmljbXMuY29tIiwiaWF0IjoxNzE4MjkxMTg0LCJuYmYiOjE3MTgyOTExODQsImV4cCI6MTcxODg5NTk4NCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.pER2LWpuRBgMUqqvD6pcZfb185nULQV_dq-ml67AFZc'

export const getCards = async () => {
    try {
      const cards = await $fetch(`${apiUrl}/wp-json/wc-pimwick/v1`, {
        headers: {
          'Authorization': `Bearer ${wordpressToken}`
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
      const card = await $fetch(`${apiUrl}/wp-json/wc-pimwick/v1/${id}`, {
        headers: {
          'Authorization': `Bearer ${wordpressToken}`
        }
      });
      return card;
    } catch (error) {
      console.error(`Error fetching card with ID ${id}:`, error);
      return null;
    }
  };