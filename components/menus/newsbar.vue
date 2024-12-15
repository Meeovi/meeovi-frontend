<template>
    <v-card variant="text">
        <v-tabs style="background-color: transparent" center-active>
            <v-tab v-for="(menu, index) in result?.blogCategories?.items" :key="index"><NuxtLink :to="`/news/category/${menu?.category_id}`">{{ menu?.title }}</NuxtLink></v-tab>
        </v-tabs>
    </v-card>
</template>

<script setup>
  import {
    ref,
    onMounted
  } from 'vue';
  import {
    useQuery
  } from '@vue/apollo-composable'
  import news from '~/graphql/commerce/queries/blogCategories'
  
const {
    result
} = useQuery(news);
</script>