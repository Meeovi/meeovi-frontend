<template>
  <div>
    <v-card elevation="0">
      <v-tabs v-model="tab">
        <div v-for="(menu, index) in settings?.menus" :key="index">
          <v-tab :value="menu?.value">{{ menu?.name }}</v-tab>
        </div>
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one">
            <NuxtLinkccount />
          </v-tabs-window-item>

          <v-tabs-window-item value="two">
            <communication />
          </v-tabs-window-item>

          <v-tabs-window-item value="three">
            <payments />
          </v-tabs-window-item>

          <v-tabs-window-item value="four">
            <personalization />
          </v-tabs-window-item>

          <v-tabs-window-item value="five">
            <security />
          </v-tabs-window-item>

          <v-tabs-window-item value="six">
            <language />
          </v-tabs-window-item>

          <v-tabs-window-item value="seven">
            <NuxtLinkccessibility />
          </v-tabs-window-item>

          <v-tabs-window-item value="eight">
            <privacy />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
  import account from '~/components/pages/account/setting/account.vue'
  import communication from '~/components/pages/account/setting/communications.vue'
  import payments from '~/components/pages/account/setting/payments.vue'
  import personalization from '~/components/pages/account/setting/personalization.vue'
  import security from '~/components/pages/account/setting/security.vue'
  import language from '~/components/pages/account/setting/language.vue'
  import accessibility from '~/components/pages/account/setting/accessibility.vue'
  import privacy from '~/components/pages/account/setting/privacy.vue'
  import {
    ref
  } from 'vue'

  const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    data: settings
  } = await useAsyncData('settings', () => {
    return $directus.request($readItem('navigation', '25'))
  })

  const tab = ref(null)

  definePageMeta({
    layout: 'nolive',
    middleware: ['authenticated'],
  });

  useHead({
    title: 'Settings',
  });
</script>