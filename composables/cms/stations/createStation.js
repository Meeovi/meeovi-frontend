// composables/createStation.js
import { createItem } from '@directus/sdk';

export default async function createStation(stationData) {
    const route = useRoute();

    const id = route.params.id;
    const { $directus } = useNuxtApp();
  
    try {
      const station = await $directus.request(createItem('radios', [
        {
          name: stationData.name,
          description: stationData.description,
          status: stationData.status,
          type: stationData.type,
          image: stationData.image,
          media: stationData.media,
          video: stationData.video,
          document: stationData.document,
          color: stationData.color,
          coverFile: null,
          avatarFile: null,
          creator: stationData.creator,
        }
      ]));
      return station;
    } catch (error) {
      console.error('Error creating station:', error);
      throw error;
    }
  }
  