// composables/updateShort.js
import { updateItem } from '@directus/sdk';

export default async function updateShort(shortId, shortData) {
    const { $directus } = useNuxtApp();
  
    try {
      const short = await $directus.request(updateItem('shorts', shortId));
      return short;
    } catch (error) {
      console.error('Error updating short:', error);
      throw error;
    }
  }
  