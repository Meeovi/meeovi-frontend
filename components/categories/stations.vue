<template>
  <div>
      <!---->
      <v-card elevation="0">
          <v-toolbar :title="stationbar?.name" color="#b02564">
              <v-dialog min-width="500">
                  <template v-slot:activator="{ props: activatorProps }">
                      <v-btn v-bind="activatorProps" prepend-icon="fas fa-plus" title="Create a Station"
                          variant="flat">Create a Station
                      </v-btn>
                  </template>

                  <template v-slot:default="{ isActive }">
                      <createstation />
                  </template>
              </v-dialog>
          </v-toolbar>

          <v-tabs v-model="tab" bg-color="#b02564">
              <div v-for="(menu, index) in stationbar?.menus" :key="index">
                  <v-tab :value="menu?.value">{{ menu?.name }}</v-tab>
              </div>
          </v-tabs>

          <v-card-text>
              <v-tabs-window v-model="tab">
                  <v-tabs-window-item value="one">
                      <v-row style="padding-top: 15px;">
                          <v-col cols="6" v-for="(stations, index) in stations" :key="index">
                              <station :radio="stations" />
                          </v-col>
                      </v-row>
                  </v-tabs-window-item>

                  <v-tabs-window-item value="two">
                      <v-row style="padding-top: 15px;">
                          <v-col cols="6" v-for="(stations, index) in livestations" :key="index">
                              <station :radio="stations" />
                          </v-col>
                      </v-row>
                  </v-tabs-window-item>

                  <v-tabs-window-item value="three">
                      <v-row style="padding-top: 15px;">
                          <v-col cols="6" v-for="(stations, index) in mystations" :key="index">
                              <station :radio="stations" />
                          </v-col>
                      </v-row>
                  </v-tabs-window-item>
              </v-tabs-window>
          </v-card-text>
      </v-card>

  </div>
</template>

<script setup>
  import station from '~/components/product/radiostation.vue'
  import createstation from '~/components/product/add-station.vue'
  import { ref } from 'vue'
  import {
      useUserStore
  } from '~/stores/user'
  
  const userStore = useUserStore()

  const tab = ref(null);
  const {
      $directus,
      $readItems,
      $readItem
  } = useNuxtApp()

  const userDisplayName = computed(() => {
      return userStore.user?.name || userStore.user?.username || 'User'
  })

  const {
      data: stations
  } = await useAsyncData('stations', () => {
      return $directus.request($readItems('radios', {
          fields: ['*', { '*': ['*'] }]
      }))
  })

  const {
      data: livestations
  } = await useAsyncData('livestations', () => {
      return $directus.request($readItems('radios', {
          filter: {
              type: {
                  _eq: "Live"
              }
          },
          fields: ['*', { '*': ['*'] }]
      }))
  })

  const {
      data: mystations
  } = await useAsyncData('mystations', () => {
      return $directus.request($readItems('radios', {
          filter: {
              creator: {
                  _eq: `${userDisplayName.value}`
              }
          }
      }))
  })

  const {
      data: stationbar
  } = await useAsyncData('stationbar', () => {
      return $directus.request($readItem('navigation', '34'))
  })

  definePageMeta({
      middleware: ['authenticated'],
  })

  useHead({
      title: 'Radio Stations',
  })
</script>