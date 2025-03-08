export function usePagination(fetchFunction) {
    const items = ref([]);
    const page = ref(1);
    const isLoading = ref(false);
    const hasMore = ref(true);
  
    async function loadMore() {
      if (!hasMore.value || isLoading.value) return;
  
      isLoading.value = true;
  
      try {
        const newItems = await fetchFunction(page.value);
        if (newItems.length === 0) {
          hasMore.value = false;
        } else {
          items.value.push(...newItems);
          page.value++;
        }
      } catch (error) {
        console.error('Failed to fetch items:', error);
      } finally {
        isLoading.value = false;
      }
    }
  
    return { items, loadMore, isLoading, hasMore };
  }
  