// composables/updateContact.js
import { updateItem } from '@directus/sdk';

export default async function updateContact(contactId, contactData) {
    const { $directus } = useNuxtApp();
  
    try {
      const contact = await $directus.request(updateItem('contacts', contactId));
      return contact;
    } catch (error) {
      console.error('Error updating contact:', error);
      throw error;
    }
  }
  