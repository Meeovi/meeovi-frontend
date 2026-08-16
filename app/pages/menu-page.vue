<template>
  <div>
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
      <v-row>
        <v-col cols="3">
          <v-btn variant="text" stacked title="Help" prepend-icon="fas fa-question-circle" size="x-small"
            href="/connect/spaces/meeovi-help/">Help Center</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn variant="text" stacked title="Notifications" prepend-icon="fas fa-bell" size="x-small"
            href="/account/user/notifications">Notify Center</v-btn>
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
    </v-list>
  </div>
</template>

<script setup>
  import sidebartop from '../components/menus/sidebar/sidebartop.vue'
  import trendingMenu from '../components/menus/sidebar/trendingMenu.vue'
  import departmentsmenu from '#commerce/app/components/menus/departmentsmenu.vue'
  import outlets from '#commerce/app/components/menus/outletsmenu.vue'
  import socialmenu from '#social/app/components/menus/socialmenu.vue'

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

  useHead({
    title: 'Meeovi - Browse',
    meta: [{
        name: 'description',
        content: 'Browse Meeovi for movies, TV shows, music, books, and more. Discover new content, read reviews, and find your next favorite entertainment.'
      },
      {
        name: 'keywords',
        content: 'Meeovi, browse, movies, TV shows, music, books, entertainment, reviews, discover, content'
      },
      {
        name: 'author',
        content: 'Meeovi Team'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ]
  })
</script>