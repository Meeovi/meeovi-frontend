<template>
  <div class="drawer-content">
    <sidebartop />
    <v-list nav>
      <trendingMenu />

      <v-divider></v-divider>
      <departmentsmenu />

      <v-divider></v-divider>
      <outlets />

      <v-divider></v-divider>
      <socialmenu />

      <v-divider></v-divider>
      <bottomsidebarmenu />

      <v-divider></v-divider>
      <footersidebarNav />
    </v-list>
  </div>
</template>

<script setup lang="ts">
  import {
    useTheme
  } from 'vuetify'
  import sidebartop from './sidebartop.vue'
  import trendingMenu from './trendingMenu.vue'
  import departmentsmenu from '#commerce/app/components/menus/departmentsmenu.vue'
  import outlets from '#commerce/app/components/menus/outletsmenu.vue'
  import socialmenu from '#social/app/components/menus/socialmenu.vue'
  import bottomsidebarmenu from './bottomsidebarMenu.vue'
  import footersidebarNav from './footersidebarNav.vue'

  // Drawer state is now controlled by the layout
  let theme: any = null
  try {
    theme = useTheme()
  } catch {
    theme = null
  }

  const STORAGE_KEY = 'elite-theme'

  // Theme is now initialized via plugins (server + client)
  // This watcher just ensures persistence when user toggles theme
  watch(
    () => theme?.global?.name?.value,
    (value) => {
      if (typeof localStorage === 'undefined') return
      if (value) {
        localStorage.setItem(STORAGE_KEY, value)
        document.documentElement.setAttribute('data-theme', value)
      }
    },
  )

  // Add theme toggling support for sidebar
  const isDark = computed(() => theme?.global?.name?.value === 'dark')

  function toggleDark() {
    if (!theme) return
    theme.global.name.value = theme.global.name.value === 'dark' ? 'light' : 'dark'
  }
</script>