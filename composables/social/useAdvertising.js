export function useAdvertising() {
    const ads = ref([]);
  
    async function fetchAds() {
      try {
        const response = await $fetch('/api/ads'); // Replace with your API endpoint
        ads.value = response;
      } catch (error) {
        console.error('Failed to fetch ads:', error);
      }
    }
  
    return { ads, fetchAds };
  }
  