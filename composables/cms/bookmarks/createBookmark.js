// composables/createWebsite.js
import { createItem } from '@directus/sdk';

export default async function createWebsite(websiteData) {
    const route = useRoute();

    const id = route.params.id;
    const { $directus } = useNuxtApp();
  
    try {
      const website = await $directus.request(createItem('websites', [
        {
          name: websiteData.name,
          note: websiteData.note,
          status: websiteData.status,
          type: websiteData.type,
          image: websiteData.image,
          icon: websiteData.icon,
          slug: websiteData.slug,
          coverFile: null,
          username: websiteData.username,
        }
      ]));
      return website;
    } catch (error) {
      console.error('Error creating website:', error);
      throw error;
    }
  }
  