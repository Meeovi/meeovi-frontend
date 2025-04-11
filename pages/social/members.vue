<template>
  <div class="contentPage">
    <v-card elevation="0">
      <v-toolbar :title="mynetwork?.name" color="info">
        <createcontact />
      </v-toolbar>
      <v-tabs v-model="tab" bg-color="info">
        <div v-for="(menu, index) in mynetwork?.menus" :key="index">
          <v-tab :value="menu?.value">{{ menu?.name }}</v-tab>
        </div>

      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item :value="mynetwork?.menus[0]?.value">
            <div v-for="contacts in network" :key="contacts">
              <contacts :contact="contacts?.id" />
            </div>
          </v-tabs-window-item>

          <v-tabs-window-item :value="mynetwork?.menus[1]?.value">
            <div v-for="contacts in following" :key="contacts">
              <contacts :contact="contacts?.id" />
            </div>
          </v-tabs-window-item>

          <v-tabs-window-item :value="mynetwork?.menus[2]?.value">
            <div v-for="contacts in speeddial" :key="contacts">
              <contacts :contact="contacts?.id" />
            </div>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
  import createcontact from '~/components/contacts/add-contact.vue'
  import contacts from '~/components/contacts/contacts.vue'
  import {
    ref
  } from 'vue'

  const tab = ref(null);

  const {
    $directus,
    $readItems,
    $readItem,
    $auth
  } = useNuxtApp()
  const { user } = useSupabaseAuth()

  const {
    data: network
  } = await useAsyncData('network', () => {
    return $directus.request($readItems('directus_users', {
      fields: ['*', {
        '*': ['*']
      }]
    }))
  })

  const {
    data: following
  } = await useAsyncData('following', () => {
    return $directus.request($readItems('contacts', {
      fields: ['*', {
        '*': ['*']
      }],
      filter: {
        directus_users: {
          _eq: user.id
        }
      }
    }))
  })

  const {
    data: mynetwork
  } = await useAsyncData('mynetwork', () => {
    return $directus.request($readItem('navigation', '28'))
  })

  definePageMeta({
    middleware: ['authenticated'],
  })

  useHead({
    title: 'My Network'
  })
</script>