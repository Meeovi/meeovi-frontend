<template>
  <div>
    <v-card elevation="0">
      <v-tabs v-model="tab" align-tabs="center">
        <div v-for="(menu, index) in settings?.menus" :key="index">
          <v-tab :value="menu?.value">{{ menu?.name }}</v-tab>
        </div>
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item :value="settings?.menus[0]?.value">
            <account />
          </v-tabs-window-item>

          <v-tabs-window-item :value="settings?.menus[1]?.value">
            <communication />
          </v-tabs-window-item>

          <v-tabs-window-item :value="settings?.menus[2]?.value">
            <payments />
          </v-tabs-window-item>

          <v-tabs-window-item :value="settings?.menus[3]?.value">
            <personalization />
          </v-tabs-window-item>

          <v-tabs-window-item :value="settings?.menus[4]?.value">
            <security />
          </v-tabs-window-item>

          <v-tabs-window-item :value="settings?.menus[5]?.value">
            <language />
          </v-tabs-window-item>

          <v-tabs-window-item :value="settings?.menus[6]?.value">
            <accessibility />
          </v-tabs-window-item>

          <v-tabs-window-item :value="settings?.menus[7]?.value">
            <privacy />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
  import account from '~/components/account/setting/account.vue'
  import communication from '~/components/account/setting/communications.vue'
  import payments from '~/components/account/setting/payments.vue'
  import personalization from '~/components/account/setting/personalization.vue'
  import security from '~/components/account/setting/security.vue'
  import language from '~/components/account/setting/language.vue'
  import accessibility from '~/components/account/setting/accessibility.vue'
  import privacy from '~/components/account/setting/privacy.vue'
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
    return $directus.request($readItem('navigation', '25', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
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