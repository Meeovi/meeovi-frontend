<template>
  <div>
    <NuxtPwaManifest />
    <NuxtLoadingIndicator />
    <v-responsive class="border rounded">
          <v-app :theme="theme?.global?.name?.value" class="auto-text">
        <ClientOnly>
          <Header :drawer="drawer" @toggle-drawer="drawer = !drawer" />
        </ClientOnly>
        <OfflineAlert />
        <v-alert v-if="pwa?.offlineReady" type="success" density="compact" class="mb-2">
          App ready to work offline
        </v-alert>
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

              <v-row>
                <v-col>
                  <live />
                </v-col>
              </v-row>
              <div class="contentPage">
                <slot />
              </div>
            </div>
          </div>
          <!--<aboveFooter />-->

          <FooterNav />
          <!---->
        </v-main>
      </v-app>
      
      <mobileNav />      
    </v-responsive>
  </div>
</template>

<script setup lang="ts">
  import Header from '../components/menus/Header.vue'
  import sidebarnav from '../components/menus/sidebar/sidebarnav.vue'
  import LowerBar from '../components/menus/LowerBar.vue'
  import FooterNav from '../components/menus/FooterNav.vue'
  import live from '#social/app/components/menus/livebar/live.vue'
  import mobileNav from '../components/menus/mobile/mobileNav.vue'
  import OfflineAlert from '#shared/app/components/alerts/OfflineAlert.vue'
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
  const pwa = usePWA()

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
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        key: 'theme-color',
        name: 'theme-color',
        content: process.env.NUXT_PUBLIC_APP_THEME_COLOR || '#ffffff'
      }
    ],
    link: [{
      rel: 'icon',
      href: '/favicon.ico'
    }],
    htmlAttrs: {
      lang: 'en'
    }
  })

  const title = process.env.NUXT_PUBLIC_APP_NAME || 'Nuxt AI Chatbot Template'
  const description = process.env.NUXT_PUBLIC_APP_DESCRIPTION ||
    'A full-featured, hackable Nuxt AI chatbot template made with Nuxt UI.'


  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: process.env.NUXT_PUBLIC_APP_OG_IMAGE || 'https://ui.nuxt.com/assets/templates/nuxt/chat-light.png',
    twitterCard: 'summary_large_image'
  })
</script>