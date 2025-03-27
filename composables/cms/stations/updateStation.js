// composables/updateStation.js
import { updateItem } from '@directus/sdk';

export default async function updateStation(stationId, stationData) {
    const { $directus } = useNuxtApp();
  
    try {
      const station = await $directus.request(updateItem('radios', stationId));
      return station;
    } catch (error) {
      console.error('Error updating station:', error);
      throw error;
    }
  }
  