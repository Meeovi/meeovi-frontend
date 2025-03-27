import { useRuntimeConfig } from '#imports';

export const getNavigation = async (id) => {
  const config = useRuntimeConfig();
  //const credentials = btoa(`${config.public.WP_API_EMAIL}:${config.public.WORDPRESS_TOKEN}`);
  
  try {
    const navigation = await $fetch(`${config.public.wordpressUrl}/wp-json/wp/v2/navigations/${id}`, {
      headers: {
        'Authorization': `Basic ${config.public.wordpressToken}`,  // Basic Auth Header
        'Content-Type': 'application/json'
      }
    });
    return navigation;
  } catch (error) {
    console.error('Error fetching navigation:', error);
    return [];
  }
};
