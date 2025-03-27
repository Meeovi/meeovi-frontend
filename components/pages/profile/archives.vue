<template>
  <v-row>
    <v-toolbar :title="archivebar?.name" color="transparent"></v-toolbar>
    <v-col cols="12">
      <h5 class="archiveh5">{{ archivebar?.submenus[0]?.name }}</h5>
      <v-row>
        <div v-if="listsarchive">
          <v-col cols="3" v-for="archive in listsarchive" :key="archive">
            <list :list="archive" />
          </v-col>
        </div>
        <div v-else><p>{{ archivebar?.menus[0].name }}</p></div>
      </v-row>
    </v-col>

    <v-col cols="12">
      <h5 class="archiveh5">{{ archivebar?.submenus[1]?.name }}</h5>
      <v-row>
        <div v-if="myposts">
          <v-col cols="4" v-for="(posts, index) in myposts" :key="index" style="margin: 8px;">
            <post :post="posts" />
          </v-col>
        </div>
        <div v-else><p>{{ archivebar?.menus[1].name }}</p></div>
      </v-row>
    </v-col>

    <v-col cols="12">
      <h5 class="archiveh5">{{ archivebar?.submenus[2]?.name }}</h5>
      <v-row style="padding-top: 15px;">
        <div v-if="myvibez">
          <v-col cols="4" v-for="(shorts, index) in myvibez" :key="index">
            <shorts :short="shorts" />
          </v-col>
        </div>
        <div v-else><p>{{ archivebar?.menus[2].name }}</p></div>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
  import {
    useUserStore
  } from '~/stores/user'
  import list from '~/components/lists/lists.vue'
  import post from '~/components/feeds/posts.vue'
  import shorts from '~/components/vibez/shorts.vue'

  const userStore = useUserStore()

  const {
    $directus,
    $readItem,
    $readItems
  } = useNuxtApp()

  const userDisplayName = computed(() => {
    return userStore.name || userStore.username || 'User'
  })

  const tab = ref(null);
  const route = useRoute()

  const {
    data: archivebar
  } = await useAsyncData('archivebar', () => {
    return $directus.request($readItem('navigation', '47', {
      fields: ['*', {
        '*': ['*']
      }]
    }))
  })

  const {
    data: myvibez
  } = await useAsyncData('myvibez', () => {
    return $directus.request($readItems('shorts', {
      filter: {
        creator: {
          _eq: `${userDisplayName.value}`
        },
        status: {
          _eq: 'Archived'
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
          _eq: `${userDisplayName.value}`
        },
        status: {
          _eq: 'archived'
        }
      },
      fields: ['*', {
        '*': ['*']
      }]
    }))
  })

  const {
    data: listsarchive
  } = await useAsyncData('listsarchive', () => {
    return $directus.request($readItems('lists', {
      filter: {
        status: {
          _eq: 'Archived'
        }
      },
      fields: ['*', {
        '*': ['*']
      }]
    }))
  })

  useHead({
    title: 'Bookmarks'
  })
</script>