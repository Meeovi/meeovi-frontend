<template>
  <div class="contentPage">
    <v-toolbar :title="feedbar?.name" color="transparent" elevation="0"></v-toolbar>
    <v-tabs v-model="tab" bg-color="primary">
      <div v-for="(menu, index) in feedbar?.menus" :key="index">
        <v-tab v-if="menu?.active === 'Active'" :value="menu?.value">{{ menu?.name }}</v-tab>
      </div>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item :value="feedbar?.menus[0]?.value">
          <v-row>
            <v-col cols="4" v-for="(posts, index) in posts" :key="index" style="margin: 8px;">
              <post :post="posts" />
            </v-col>
          </v-row>
        </v-tabs-window-item>

        <v-tabs-window-item :value="feedbar?.menus[1]?.value">
          <v-row>
            <v-col cols="4" v-for="(posts, index) in myposts" :key="index" style="margin: 8px;">
              <post :post="posts" />
            </v-col>
          </v-row>
        </v-tabs-window-item>

        <v-tabs-window-item :value="feedbar?.menus[2]?.value">
          <v-row>
            <v-col cols="4" v-for="(posts, index) in news" :key="index" style="margin: 8px;">
              <post :post="posts" />
            </v-col>
          </v-row>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </div>
</template>

<script setup>
  import {
    ref,
  } from 'vue';
  import post from '~/components/feeds/posts.vue'
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
  const { user } = useSupabaseAuth()

  const {
    data: posts
  } = await useAsyncData('posts', () => {
    return $directus.request($readItems('posts', {
      filter: {
        type: {
          _eq: 'notes'
        }
      },
      fields: ['*', {
        '*': ['*']
      }]
    }))
  })

  const {
    data: myposts
  } = await useAsyncData('myposts', () => {
    return $directus.request($readItems('posts', {
      filter: {
        username: {
          _eq: `${user?.id}`
        }
      },
      fields: ['*', {
        '*': ['*']
      }]
    }))
  })

  const {
    data: circles
  } = await useAsyncData('circles', () => {
    return $directus.request($readItems('circles', {
      fields: ['*', {
        '*': ['*']
      }]
    }))
  })

  const {
    data: feedbar
  } = await useAsyncData('feedbar', () => {
    return $directus.request($readItem('navigation', '32', {
      fields: ['*', {
        '*': ['*']
      }]
    }))
  })

  useHead({
    title: 'Social Feed',
  });

  definePageMeta({
    middleware: ['authenticated'],
  })
</script>