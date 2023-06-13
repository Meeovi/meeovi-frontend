<template>
    <div class="contentPage" v-for="cmspage in data" :key="cmspage">
       <h2>{{ cmspage.title }}</h2>
       <div v-html="cmspage.content"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<script setup>
    useHead({
        title: 'Investors',
    })

    const query = gql `
    query {
    cmsPage(identifier: "investors") {
        title
        content
        relative_url
    }
    }`


    const {
        data
    } = useAsyncQuery(query);
</script>