// composables/updateChart.js
import { updateItem } from '@directus/sdk';

export default async function updateChart(chartId, chartData) {
    const { $directus } = useNuxtApp();
  
    try {
      const chart = await $directus.request(updateItem('musicchart', chartId));
      return chart;
    } catch (error) {
      console.error('Error updating chart:', error);
      throw error;
    }
  }
  