<template>
  <div class="drawer-content">
    <sidebartop />
    <v-list nav>
      <v-divider></v-divider>
      <departmentsmenu />
      <v-divider></v-divider>
      <outlets />
      <v-divider></v-divider>
      <socialmenu />
      <v-divider></v-divider>
      <topmenu />
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

<script setup lang="ts">
  import {
    useAuth
  } from '#auth/app/composables/useAuth'
  import {
    ref,
    watch,
    computed
  } from 'vue'
  import {
    useTheme
  } from 'vuetify'
  import sidebartop from './sidebartop.vue'
  import departmentsmenu from '#commerce/app/components/menus/departmentsmenu.vue'
  import outlets from '#commerce/app/components/menus/outletsmenu.vue'
  import socialmenu from './socialmenu.vue'
  import topmenu from './topmenu.vue'
  import accountMenu from './myaccountmenu.vue'
  import logout from '#auth/app/components/blocks/logoutButton.vue'
  import UserAvatar from '#social/app/components/user/UserAvatar.vue'

  const auth = useAuth()
  const user = auth.user

  const isLoggedIn = computed(() => auth.loggedIn.value)
  const userName = computed(() => user.value?.name || 'Guest')
  const userEmail = computed(() => user.value?.email || 'Not logged in')
  const userAvatar = computed(() => user.value?.image || user.value?.avatar || '')



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