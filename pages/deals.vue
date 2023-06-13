<template>
    <div class="contentPage" v-for="cmspage in data" :key="cmspage">
       <div v-html="cmspage.content"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<script setup>
    useHead({
        title: 'Deals',
    })

    const query = gql `
    query {
    cmsPage(identifier: "deals") {
        title
        content
        relative_url
    }
    }`


    const {
        data
    } = useAsyncQuery(query);
</script>