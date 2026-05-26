import { defineStore } from '#imports'

export const useSearchStore = defineStore('search', {
  state: () => ({
    query: '',
    results: [],
    isLoading: false,
  }),
  actions: {
    setQuery(query) {
      this.query = query
    },
    setResults(results) {
      this.results = results
    },
    setLoading(isLoading) {
      this.isLoading = isLoading
    },
  },
})
