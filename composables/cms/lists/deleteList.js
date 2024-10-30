// composables/cms/lists/deleteList.js
import { deleteItem } from '@directus/sdk';

export default async function deleteList(listId) {
    const { $directus } = useNuxtApp();
  
    try {
        await $directus.request(deleteItem('lists', listId));
        return true;
    } catch (error) {
        console.error('Error deleting list:', error);
        throw error;
    }
}
