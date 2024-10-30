// composables/updateList.js
import { updateItem } from '@directus/sdk';

export default async function updateList(listId, listData) {
    const { $directus } = useNuxtApp();
  
    try {
      const list = await $directus.request(updateItem('lists', listId, listData));
      return list;
    } catch (error) {
      console.error('Error updating list:', {
        error: error.message,
        statusCode: error.status,
        data: error.data,
        listId,
        listData
      });
      throw error;
    }    
  }
