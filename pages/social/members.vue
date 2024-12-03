<template>
  <div class="contentPage">
    <v-card elevation="0">
      <v-toolbar :title="mynetwork?.name" color="info"><createcontact /></v-toolbar>
      <v-tabs v-model="tab" bg-color="info">
        <div v-for="(menu, index) in mynetwork?.menus" :key="index">
          <v-tab :value="menu?.value">{{ menu?.name }}</v-tab>
        </div>

      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one">
            <contacts />
          </v-tabs-window-item>

          <v-tabs-window-item value="two">
            <mycontacts />
          </v-tabs-window-item>

          <v-tabs-window-item value="three">
            <contacts />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
  import {
    useQuery
  } from '@vue/apollo-composable'
  import createcontact from '~/components/crud/create/add-contact.vue'
  import contacts from '~/components/pages/contacts/contacts.vue'
  import mycontacts from '~/components/pages/contacts/mycontacts.vue'
  //import customers from '~/graphql/commerce/queries/customers'
  import {
    ref
  } from 'vue'

  /*const {
    result
  } = useQuery(customers)*/

  const tab = ref(null);

  const {
    $directus,
    $readItem
  } = useNuxtApp()
  const route = useRoute()

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