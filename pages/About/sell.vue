<template>
    <div class="contentPage" v-for="(pages, index) in pages" :key="index">
      <div v-html="pages.content"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<script setup>
    useHead({
        title: 'Sellers',
    })

    const {
        getItems
    } = useDirectusItems()

    const pages = await getItems({ collection: "pages", params: {filter: {name: {_eq: "Sellers"}}}});
</script>