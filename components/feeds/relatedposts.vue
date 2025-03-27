<template>
  <div>
    <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
      <h4>Related Posts</h4>
      <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }" v-for="(posts, index) in posts" :key="index">
          <post :post="posts" />
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import post from '~/components/feeds/posts.vue'
  import {
    useQuery
  } from '@vue/apollo-composable'
    //import {posts} from '~/graphql/cms/queries/posts'  

    const tab = ref(null);
    const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: posts
    } = await useAsyncData('posts', () => {
        return $directus.request($readItems('posts', {
            fields: ['*', { '*': ['*'] }]
        }))
    })
</script>