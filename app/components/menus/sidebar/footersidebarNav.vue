<template>
    <div>
        <v-row>
            <v-col cols="3" v-for="item in footerSidebarnav?.submenus" :key="item">
                <v-btn variant="text" stacked :title="item?.name" :value="item?.name" :prepend-icon="item?.icon"
                    :href="item?.url" size="x-small">{{ footerSidebarnav?.name }}</v-btn>
            </v-col>
            <v-col cols="3">
                <v-btn @click="toggleDark()" variant="text">
                    <v-icon>
                        {{ isDark ? 'fas fa-moon' : 'fas fa-sun' }}
                    </v-icon>
                </v-btn>
            </v-col>
            <v-col cols="3">
                <!--<logout />-->
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
  import {
    useTheme
  } from 'vuetify'
    const {
        $directus,
        $readItem,
    } = useNuxtApp()

    const {
        data: footerSidebarnav
    } = await useAsyncData('footerSidebarnav-sidebar-navigation', async () => {
        const item = await $directus.request($readItem('navigation', '87'))
        return item?.data || item || {
            menus: []
        }
    })


  // Drawer state is now controlled by the layout
  let theme = null
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