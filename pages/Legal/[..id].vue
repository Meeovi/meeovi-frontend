<template>
    <div class="contentPage">
        <v-card :title="pages.name" :subtitle="pages.date_created" :text="pages.description" variant="tonal"></v-card>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>
    useHead({
        title: pages.name,
    })

    const {
        getItems
    } = useDirectusItems()

    const pages = await getItems({ collection: "pages", id: 4});
</script>