<template>
    <div class="contentPage">
        <v-toolbar color="transparent">
            <v-toolbar-title><NuxtLink to="/news/">Meeovi News</NuxtLink></v-toolbar-title>
        </v-toolbar>
        <newsbar />
        <v-row>
            <v-col cols="4" v-for="(news, index) in result?.blogPosts?.items" :key="index">
                <news :news="news" />
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
    import newsbar from '~/components/menus/newsbar.vue'
    import news from '~/components/cms/related/news.vue'
    import {
    useQuery
  } from '@vue/apollo-composable'
  import newsPost from '~/graphql/commerce/queries/news'

  const {
    result
  } = useQuery(newsPost);
    useHead({
        title: 'Meeovi News'
    })
</script>