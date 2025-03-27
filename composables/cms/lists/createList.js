// composables/createList.js
import { createItem } from '@directus/sdk';

export default async function createList(listData) {
    const { $directus } = useNuxtApp();
  
    try {
      const list = await $directus.request(createItem('lists', listData));
      return list;
    } catch (error) {
      console.error('Error creating list:', error);
      throw error;
    }
  }
  