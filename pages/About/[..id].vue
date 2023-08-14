<template>
    <div class="contentPage" v-for="pages in pages" :key="pages">
       <h2>{{ pages.title }}</h2>
       <div v-html="pages.content"></div>
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