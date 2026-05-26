import { defineStore } from '#imports'

export const useUiStore = defineStore('ui', {
  state: () => ({
    darkMode: false,
    sidebarOpen: false,
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },
  },
})
