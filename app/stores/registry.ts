import { defineStore } from '#imports'

export const useRegistryStore = defineStore('registry', {
  state: () => ({
    entries: [],
  }),
  actions: {
    register(entry) {
      this.entries.push(entry)
    },
    unregister(entryId) {
      this.entries = this.entries.filter(e => e.id !== entryId)
    },
  },
})
