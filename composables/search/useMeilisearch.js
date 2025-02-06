import { ref, computed } from 'vue'

export const useSearch = () => {
  const searchQuery = ref('')
  const searchResults = ref([])
  const isLoading = ref(false)
  const currentPage = ref(1)
  const totalResults = ref(0)
  const itemsPerPage = ref(10)

  const totalPages = computed(() => Math.ceil(totalResults.value / itemsPerPage.value))

  const search = async (type = 'all') => {
    if (!searchQuery.value) return

    isLoading.value = true
    try {
      const params = new URLSearchParams({
        q: searchQuery.value,
        type,
        page: currentPage.value,
        limit: itemsPerPage.value
      })

      const response = await $fetch(`/api/search/search?${params}`)
      
      searchResults.value = response.hits
      totalResults.value = response.estimatedTotalHits
    } catch (error) {
      console.error('Search failed:', error)
    } finally {
      isLoading.value = false
    }
  }

  return {
    searchQuery,
    searchResults,
    isLoading,
    currentPage,
    totalPages,
    search
  }
}
