// composables/deleteSpace.js
import { deleteItem } from '@directus/sdk';

export default async function deleteSpace(spaceId) {
    const { $directus } = useNuxtApp();
  
    try {
      $directus.request(deleteItem('posts', spaceId));
      console.log('Space deleted successfully');
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  }
  