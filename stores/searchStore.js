import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchQuery: '',
    searchResults: [],
    isLoading: false,
    currentPage: 1,
    totalPages: 1,
    activeTab: 'one'
  }),

  actions: {
    async performSearch(query) {
      this.isLoading = true
      this.searchQuery = query
      
      try {
        const response = await $fetch('/api/search/search', {
          params: {
            q: query,
            page: this.currentPage,
            limit: 10
          }
        })
        
        this.searchResults = response.hits
        this.totalPages = Math.ceil(response.estimatedTotalHits / 10)
      } catch (error) {
        console.error('Search error:', error)
      } finally {
        this.isLoading = false
      }
    },

    setPage(page) {
      this.currentPage = page
      this.performSearch(this.searchQuery)
    },

    setActiveTab(tab) {
      this.activeTab = tab
    }
  }
})
