<template>
  <div>
    <NuxtLoadingIndicator />
    <v-responsive class="border rounded">
      <v-app :theme="theme?.global?.name?.value" class="auto-text">
        <ClientOnly>
          <Header :drawer="drawer" @toggle-drawer="drawer = !drawer" />
        </ClientOnly>
        <OfflineAlert />
        <LowerBar />
        
        <v-main>
          <div class="page-wrapper">
              <v-navigation-drawer v-model="drawer" temporary>
                  <sidebarnav />
                <v-spacer />
              </v-navigation-drawer>

              <div id="sidebarNav"></div>
              <div id="mainSection">
                <!--<announcements />-->
                
                <v-container class="contentPage">
                  <slot />
                </v-container>
              </div>
          </div>
          <!--<aboveFooter />-->
          <FooterNav />
          <!---->
        </v-main>
      </v-app>
    </v-responsive>
  </div>
</template>

<script setup lang="ts">
  //import SearchHeader from '../components/search/SearchHeader.vue'
  import Header from '../components/menus/Header.vue'
  import sidebarnav from '../components/menus/sidebar/sidebarnav.vue'
  import logo from '../components/blocks/logo.vue'
  import search from '../components/search/search.vue'
  import ecosystemmenu from '../components/menus/topmenu/ecosystemmenu.vue'
  import myaccountmenu from '../components/menus/sidebar/myaccountmenu.vue'
  import LayoutNotifications from '../components/menus/topmenu/LayoutNotifications.vue'
  import mobilesearch from '../components/menus/topmenu/mobilesearch.vue'
  import myaccounttopmenu from '../components/menus/topmenu/myaccounttopmenu.vue'
  import LowerBar from '../components/menus/lowerbar.vue'
  import FooterNav from '../components/menus/FooterNav.vue'
  import OfflineAlert from '#shared/app/components/alerts/OfflineAlert.vue'

  import {
    ref,
    watch
  } from 'vue'
  import {
    useTheme
  } from 'vuetify'

  const drawer = ref(false)
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

  useHead({
    htmlAttrs: {
      lang: 'en'
    },
    link: [{
      rel: 'icon',
      href: '/favicon.ico'
    }]
  })

  useSeoMeta({
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    title: 'Meeovi',
    description: 'Meeovi is a social marketplace for customers and sellers to engage and build communities around their products and ideas.',
    ogImage: '/images/logo.png',
    twitterImage: '/images/logo.png',
    twitterCard: 'summary_large_image'
  })
</script>