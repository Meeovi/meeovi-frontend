<template>
    <div class="contentPage">
        <v-toolbar color="transparent">
            <v-toolbar-title><NuxtLink to="/news/">Meeovi News</NuxtLink></v-toolbar-title>
        </v-toolbar>
        <v-row>
            <v-col cols="4" v-for="(news, index) in result?.blogPosts?.items" :key="index">
                <news :news="news" />
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
    import {
    useQuery
  } from '@vue/apollo-composable'
  import newsPost from '~/graphql/commerce/queries/news'

  const {
    result
  } = useQuery(newsPost);
  
    useHead({
        title: 'Meeovi Notes'
    })
</script>