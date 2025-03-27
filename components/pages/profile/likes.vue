<template>
  <v-row>
    <v-toolbar :title="likedbar?.name" color="transparent"></v-toolbar>

    <!--Liked Posts-->
    <v-col cols="12">
      <h5 class="archiveh5">{{ likedbar?.menus[0]?.name }}</h5>
      <v-row>
        <div v-if="myposts">
          <v-col cols="4" v-for="(posts, index) in myposts" :key="index" style="margin: 8px;">
            <post :post="posts" />
          </v-col>
        </div>
        <div v-else><p>{{ likedbar?.menus[0].name }}</p></div>
      </v-row>
    </v-col>

    <!--Liked Comments-->
    <v-col cols="12">
      <h5 class="archiveh5">{{ likedbar?.menus[1]?.name }}</h5>
      <v-row>
        <div v-if="comments">
          <v-col cols="3" v-for="archive in comments" :key="archive">
            <list :list="archive" />
          </v-col>
        </div>
        <div v-else><p>{{ likedbar?.menus[1].name }}</p></div>
      </v-row>
    </v-col>

    <!--Liked Products-->
    <v-col cols="12">
      <h5 class="archiveh5">{{ likedbar?.menus[2]?.name }}</h5>
      <v-row>
        <div v-if="products">
          <v-col cols="3" v-for="archive in products" :key="archive">
            <list :list="archive" />
          </v-col>
        </div>
        <div v-else><p>{{ likedbar?.menus[2].name }}</p></div>
      </v-row>
    </v-col>

    <!--Liked Vibez-->
    <v-col cols="12">
      <h5 class="archiveh5">{{ likedbar?.menus[3]?.name }}</h5>
      <v-row style="padding-top: 15px;">
        <div v-if="myvibez">
          <v-col cols="4" v-for="(shorts, index) in myvibez" :key="index">
            <shorts :short="shorts" />
          </v-col>
        </div>
        <div v-else><p>{{ likedbar?.menus[3].name }}</p></div>
      </v-row>
    </v-col>

    <!--Liked Lists-->
    <v-col cols="12">
      <h5 class="archiveh5">{{ likedbar?.menus[4]?.name }}</h5>
      <v-row>
        <div v-if="lists">
          <v-col cols="3" v-for="archive in lists" :key="archive">
            <list :list="archive" />
          </v-col>
        </div>
        <div v-else><p>{{ likedbar?.menus[4].name }}</p></div>
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
    data: likedbar
  } = await useAsyncData('likedbar', () => {
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

  useHead({
    title: 'My Likes'
  })
</script>