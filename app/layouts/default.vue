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
            <!-- SSR renders this drawer without knowing the real viewport,
                 so Vuetify's client-side mobile-breakpoint detection adds
                 v-navigation-drawer--mobile after hydration; the class (and
                 accompanying width) mismatch was severe enough that Vue
                 mounted a second, un-hydrated copy alongside the original
                 instead of patching it in place — two overlapping drawers,
                 neither one closing all the way. It only opens on user
                 interaction anyway, so there's nothing worth rendering
                 server-side here. -->
            <ClientOnly>
              <Teleport to="body">
                <v-navigation-drawer v-model="drawer" temporary>
                  <sidebarnav />
                  <v-spacer />
                </v-navigation-drawer>
              </Teleport>
            </ClientOnly>

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
        content: useRuntimeConfig().public.appThemeColor || '#ffffff'
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

  // process.env is not populated in the browser bundle — these were always
  // undefined client-side and silently fell back to the literals below.
  // runtimeConfig.public.siteName/siteDescription are Nuxt's own public
  // config (see layers/shared/nuxt.config.ts) and are readable everywhere.
  const runtimeConfig = useRuntimeConfig()
  const title = runtimeConfig.public.siteName || 'Meeovi Template'
  const description = runtimeConfig.public.siteDescription ||
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