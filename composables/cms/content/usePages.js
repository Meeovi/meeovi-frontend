// composables/usePages.js
import { ref } from 'vue';
import { useRuntimeConfig } from '#imports';

export function usePages() {
  const config = useRuntimeConfig();
  const pages = ref({});

  const fetchPages = async (pageSlugsOrIds) => {
    try {
      const allPages = await $fetch(`${config.public.wordpressUrl}/wp-json/wp/v2/pages`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.public.wordpressToken}`
        }
      });

      pageSlugsOrIds.forEach(slugOrId => {
        const specificPage = allPages.find(page => page.slug === slugOrId || page.id === slugOrId);

        if (specificPage) {
          pages.value[slugOrId] = specificPage;
        } else {
          console.warn(`Page "${slugOrId}" not found`);
        }
      });
    } catch (error) {
      console.error('Error fetching pages:', error);
    }
  };

  return {
    pages,
    fetchPages,
  };
}
