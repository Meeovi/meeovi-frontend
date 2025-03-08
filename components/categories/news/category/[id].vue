<template>
    <div class="contentPage">
        <v-toolbar color="transparent">
            <v-toolbar-title><NuxtLink to="/news/">Meeovi News</NuxtLink> - {{result?.blogPosts?.items?.title}}</v-toolbar-title>
        </v-toolbar>
        <newsbar />

    </div>
</template>

<script setup>
    import newsbar from '~/components/menus/newsbar.vue'
    import {
        useQuery
    } from '@vue/apollo-composable'
    import news from '~/graphql/commerce/queries/id/blogCategory'

    const route = useRoute();
    const {
        result,
        loading,
        error
    } = useQuery(news, {
        id: `${route.params.id}` // Pass variables inside the 'variables' object
    });
useHead({
    title: computed(() => result.value?.blogPosts?.items?.title || 'Category Page')
})
</script>