<template>
  <div>
    <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
      <h4>Related Articles</h4>
      <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }" v-for="(news, index) in result?.blogPosts?.items" :key="index">
          <news :news="news" />
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import news from '~/components/blocks/news.vue'
  import {
    useQuery
  } from '@vue/apollo-composable'
    import blogPosts from '~/graphql/commerce/queries/news'  

    const tab = ref(null);
   /* const news = ref([]); 

    onMounted(async () => {
        news.value = await getPosts();
    }); */

    const {
    result
  } = useQuery(blogPosts)
</script>