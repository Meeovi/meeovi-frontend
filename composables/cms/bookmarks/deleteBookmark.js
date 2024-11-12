// composables/deleteWebsite.js
import { deleteItem } from '@directus/sdk';

export default async function deleteWebsite(websiteId) {
    const { $directus } = useNuxtApp();
  
    try {
      $directus.request(deleteItem('websites', websiteId));
      console.log('Bookmark deleted successfully');
    } catch (error) {
      console.error('Error deleting bookmark:', error);
      throw error;
    }
  }
  