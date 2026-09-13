<template>
  <div>
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
        <pixBar />
        
        <v-main>
          <div class="page-wrapper">
              <!-- See default.vue for why this is ClientOnly: SSR/CSR class
                   mismatch on this drawer caused Vue to mount a second,
                   un-hydrated copy instead of patching the first. -->
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

<script setup>
  import {
    ref,
    watch,
    onMounted
  } from 'vue'
  import {
    useTheme
  } from 'vuetify'
  import pixBar from '../components/menus/pixBar.vue'
  import Header from '../components/menus/Header.vue'
  import sidebarnav from '../components/menus/sidebar/sidebarnav.vue'
  import FooterNav from '../components/menus/FooterNav.vue'
  import OfflineAlert from '#shared/app/components/alerts/OfflineAlert.vue'
  import mobileNav from '../components/menus/mobile/mobileNav.vue'

  const drawer = ref(null)
  const theme = useTheme()

  const STORAGE_KEY = 'elite-theme'

  // Load saved theme on mount
  onMounted(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      theme.global.name.value = stored
    }
  })

  // Save theme when it changes
  watch(
    () => theme.global.name.value,
    (val) => {
      if (val) localStorage.setItem(STORAGE_KEY, val)
    }
  )
</script>

<style>
  .pwa-toast {
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 16px;
    padding: 12px;
    border: 1px solid #8885;
    border-radius: 4px;
    z-index: 1;
    text-align: left;
    box-shadow: 3px 4px 5px 0 #8885;
  }

  .pwa-toast .message {
    margin-bottom: 8px;
  }

  .pwa-toast button {
    border: 1px solid #8885;
    outline: none;
    margin-right: 5px;
    border-radius: 2px;
    padding: 3px 10px;
  }
</style>