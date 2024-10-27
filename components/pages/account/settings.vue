<template>
  <div>
    <v-card elevation="0">
      <v-tabs v-model="tab">
        <v-tab value="one">Account Information</v-tab>
        <v-tab value="two">Communication</v-tab>
        <v-tab value="three">Payments</v-tab>
        <v-tab value="four">Personalization</v-tab>
        <v-tab value="five">Security</v-tab>
        <v-tab value="six">Language</v-tab>
        <v-tab value="seven">Accessibility</v-tab>
        <v-tab value="eight">Privacy and Data</v-tab>
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one">
            <account />
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
            <accessibility />
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

  const tab = ref(null)

  definePageMeta({
    layout: 'nolive',
    middleware: ['authenticated'],
  });

  useHead({
    title: 'Settings',
  });
</script>