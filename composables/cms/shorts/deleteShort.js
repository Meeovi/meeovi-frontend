// composables/deleteShort.js
import { deleteItem } from '@directus/sdk';

export default async function deleteShort(shortId) {
    const { $directus } = useNuxtApp();
  
    try {
      $directus.request(deleteItem('shorts', shortId));
      console.log('Short deleted successfully');
    } catch (error) {
      console.error('Error deleting short:', error);
      throw error;
    }
  }
  