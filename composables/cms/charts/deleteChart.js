// composables/deleteChart.js
import { deleteItem } from '@directus/sdk';

export default async function deleteChart(chartId) {
    const { $directus } = useNuxtApp();
  
    try {
      $directus.request(deleteItem('musicchart', chartId));
      console.log('Chart deleted successfully');
    } catch (error) {
      console.error('Error deleting chart:', error);
      throw error;
    }
  }
  