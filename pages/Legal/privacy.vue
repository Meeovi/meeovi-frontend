<template>
    <div class="contentPage" v-for="pages in pages" :key="pages.id">
        <v-card :title="pages.name" :subtitle="pages.date_created" :text="pages.description" variant="tonal"></v-card>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>
    useHead({
        title: 'Privacy Policies',
    })

    const {
        getItems
    } = useDirectusItems()

    const pages = await getItems({ collection: "pages", params: {filter: {name: {_eq: "Privacy Policies"}}}});
</script>