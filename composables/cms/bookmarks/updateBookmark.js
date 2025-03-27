// composables/updatePost.js
import { updateItem } from '@directus/sdk';

export default async function updatePost(websiteId, websiteData) {
    const { $directus } = useNuxtApp();
  
    try {
      const website = await $directus.request(updateItem('websites', websiteId));
      return website;
    } catch (error) {
      console.error('Error updating bookmark:', error);
      throw error;
    }
  }
  