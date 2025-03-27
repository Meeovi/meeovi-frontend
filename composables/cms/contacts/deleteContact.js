// composables/deleteContact.js
import { deleteItem } from '@directus/sdk';

export default async function deleteContact(contactId) {
    const { $directus } = useNuxtApp();
  
    try {
      $directus.request(deleteItem('contacts', contactId));
      console.log('Contact deleted successfully');
    } catch (error) {
      console.error('Error deleting contact:', error);
      throw error;
    }
  }
  