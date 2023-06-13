<template>
    <div v-for="cmspage in data" :key="cmspage">
       <div class="contentPage" v-html="cmspage.content"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<script setup>
    useHead({
        title: 'Customer Service',
    })

    const query = gql `
    query {
    cmsPage(identifier: "customer-service") {
        title
        content
        relative_url
    }
    }`


    const {
        data
    } = useAsyncQuery(query);
</script>