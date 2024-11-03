// composables/updatePost.js
import { updateItem } from '@directus/sdk';

export default async function updatePost(spaceId, spaceData) {
    const { $directus } = useNuxtApp();
  
    try {
      const space = await $directus.request(updateItem('spaces', spaceId));
      return space;
    } catch (error) {
      console.error('Error updating space:', error);
      throw error;
    }
  }
  