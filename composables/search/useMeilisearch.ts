import { MeiliSearch } from 'meilisearch'
import { ref, computed } from 'vue'

export function useMeilisearch() {
  const client = new MeiliSearch({
    host: useRuntimeConfig().public.meilisearch.host,
    apiKey: useRuntimeConfig().public.meilisearch.searchApiKey
  })

  const searchQuery = ref('')
  const searchResults = ref([])
  const filters = ref({})
  const selectedFilters = ref({})
  const isLoading = ref(false)

  const activeFilters = computed(() => {
    return Object.entries(selectedFilters.value).reduce((acc, [key, value]) => {
      if (value) acc[key] = value
      return acc
    }, {})
  })

  async function search(indexName: string) {
    isLoading.value = true
    try {
      const index = client.index(indexName)
      const results = await index.search(searchQuery.value, {
        facets: ['category', 'brand', 'price_range'],
        filter: formatFilters(activeFilters.value)
      })

      searchResults.value = results.hits
      filters.value = results.facetDistribution || {}
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      isLoading.value = false
    }
  }

  function formatFilters(filters: Record<string, any>) {
    return Object.entries(filters)
      .map(([key, value]) => `${key}:${value}`)
      .join(' AND ')
  }

  function updateFilter(filterName: string, value: any) {
    selectedFilters.value = {
      ...selectedFilters.value,
      [filterName]: value
    }
  }

  return {
    searchQuery,
    searchResults,
    filters,
    selectedFilters,
    isLoading,
    search,
    updateFilter
  }
}
