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
        title: 'Careers',
    })

    const query = gql `
    query {
    cmsPage(identifier: "careers") {
        title
        content
        relative_url
    }
    }`


    const {
        data
    } = useAsyncQuery(query);
</script>