<template>
    <div class="contentPage" v-for="legal in legal" :key="legal.id">
        <v-card :title="legal.name" :subtitle="legal.date_created" :text="legal.description" variant="tonal"></v-card>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>
    useHead({
        title: 'Press',
    })

    const {
        getItems
    } = useDirectusItems()

    const legal = await getItems({ collection: "legal", params: {filter: {name: {_eq: "Press"}}}});
</script>