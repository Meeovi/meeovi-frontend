// composables/createShort.js
import { createItem } from '@directus/sdk';

export default async function createShort(shortData) {
    const { $directus } = useNuxtApp();
  
    try {
      const short = await $directus.request(createItem('shorts', shortData));
      return short;
    } catch (error) {
      console.error('Error creating short:', error);
      throw error;
    }
  }
  