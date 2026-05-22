<template>
  <v-responsive>
    <v-app :theme="theme.change.value">
      <v-app-bar id="topnav">
        <template v-slot:prepend>
          <v-btn variant="flat" color="transparent" @click="drawer = !drawer">
            <v-icon start icon="fas:fa fa-bars"></v-icon> Menu
          </v-btn>
        </template>

        <logo />

        <search />
        <!--<SearchHeader v-model="searchInputValue" @submit="handleFormSubmit" />-->
        <v-spacer></v-spacer>

        <div class="d-flex align-center flex-column flex-sm-row fill-height">
          <v-col class="notificationsHeader">
            <LayoutNotifications />
          </v-col>

          <v-col class="ecosystemMenuIcon">
            <ecosystemmenu />
          </v-col>

          <v-col id="minSearch">
            <mobilesearch />
          </v-col>

          <v-col class="myaccounttopmenu">
            <myaccounttopmenu />
          </v-col>

          <v-col class="shoppingCart">
            <cart />
          </v-col>
        </div>
      </v-app-bar>

      <v-main>
        <v-card>
          <v-layout>
            <v-navigation-drawer class="sidebarSection" v-model="drawer" temporary>
              <sidebartop />
              <div class="drawer-content">
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

                  <!--
                  <myaccountmenu />
                  <v-divider></v-divider>

                  <bottomsidebarmenu />-->
                  <v-row>
                    <v-col cols="3">
                      <v-btn variant="text" stacked title="Help" prepend-icon="fas:fa fa-question-circle" size="x-small"
                        href="/help/">Help Center</v-btn>
                    </v-col>
                    <v-col cols="3">
                      <v-btn variant="text" stacked title="Notifications" prepend-icon="fas:fa fa-bell" size="x-small"
                        href="/account/user/notifications">Notify Center</v-btn>
                    </v-col>
                    <v-col cols="3">
                      <v-btn @click="toggleDark()" variant="text">
                        <v-icon>
                          {{ isDark ? 'fas:fa fa-moon' : 'fas:fa fa-sun' }}
                        </v-icon>
                      </v-btn>
                    </v-col>
                    <v-col cols="3">
                      <!--<logout />-->
                    </v-col>
                  </v-row>
                </v-list>
              </div>
            </v-navigation-drawer>

            <v-main id="sidebarNav"></v-main>
            <main id="mainSection">
              <!--<announcements />-->
              <LowerBar />
              <v-row>
                <v-col>
                  <live />
                </v-col>
              </v-row>
              <div class="contentPage">
                <slot />
              </div>
            </main>
          </v-layout>
        </v-card>
        <!--<aboveFooter />-->
        <BottomFooter />
        <FooterNav />
        <!---->
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup>
  //import SearchHeader from '../components/search/SearchHeader.vue'
  import sidebartop from '../components/menus/sidebar/sidebartop.vue'
  import logo from '../components/blocks/logo.vue'
  import search from '../components/search/search.vue'
  import ecosystemmenu from '../components/menus/topmenu/ecosystemmenu.vue'
  import topmenu from '../components/menus/sidebar/topmenu.vue'
  import socialmenu from '../components/menus/sidebar/socialmenu.vue'
  import departmentsmenu from '#commerce/app/components/menus/departmentsmenu.vue'
  import outlets from '#commerce/app/components/menus/outletsmenu.vue'
  import myaccountmenu from '../components/menus/sidebar/myaccountmenu.vue'
  import LayoutNotifications from '../components/menus/topmenu/LayoutNotifications.vue'
  import mobilesearch from '../components/menus/topmenu/mobilesearch.vue'
  import myaccounttopmenu from '../components/menus/topmenu/myaccounttopmenu.vue'
  import bottomsidebarmenu from '../components/menus/sidebar/bottomsidebarmenu.vue'
  import LowerBar from '#social/app/components/menus/lowerbar.vue'
  import FooterNav from '../components/menus/FooterNav.vue'
  import cart from '#commerce/app/components/menus/cart.vue'
  import BottomFooter from '#social/app/components/menus/BottomFooter.vue'
  import live from '#social/app/components/menus/livebar/live.vue'

  import {
    ref
  } from 'vue';
  //import logout from '~/components/authentication/logout'
  import {
    useDark  } from '@vueuse/core'
  import {
    useTheme
  } from 'vuetify'

  const drawer = ref(null);
  const isDark = useDark();

  const theme = useTheme()

  // Local storage key
  const STORAGE_KEY = 'elite-theme'

  // Determine initial mode
  onMounted(() => {
    const stored = localStorage.getItem(STORAGE_KEY)

    if (stored) {
      // Use saved preference
      theme.global.name.value = stored
    } else {
      // No preference — follow system
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      theme.change.value = prefersDark ? 'dark' : 'light'
    }
  })

  // Toggle between themes
  const toggleDark = () => {
    theme.change.value =
      theme.global.current.value.dark ? 'light' : 'dark'
  }

  // Save preference whenever theme changes
  watch(
    () => theme.change.value,
    (val) => {
      localStorage.setItem(STORAGE_KEY, val)
    }
  )

useHead({
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'icon', href: '/favicon.ico' }]
})

useSeoMeta({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  title: 'Meeovi',
  description:
    'Meeovi is a social marketplace for customers and sellers to engage and build communities around their products and ideas.',
  ogImage: '/images/logo.png',
  twitterImage: '/images/logo.png',
  twitterCard: 'summary_large_image'
})
</script>