// composables/deleteStation.js
import { deleteItem } from '@directus/sdk';

export default async function deleteStation(stationId) {
    const { $directus } = useNuxtApp();
  
    try {
      $directus.request(deleteItem('radios', stationId));
      console.log('Station deleted successfully');
    } catch (error) {
      console.error('Error deleting station:', error);
      throw error;
    }
  }
  