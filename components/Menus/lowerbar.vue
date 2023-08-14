<template>
    <v-card class="lowernav">
        <v-tabs center-active>
            <v-tab v-for="departments in departments" :key="departments.id"><a :href="`/departments/${departments.id}`">{{ departments.name }}</a></v-tab>
            <v-tab><a href="/social/newsfeed">Newsfeed</a></v-tab>
            <v-tab><a href="/social/spaces">Spaces</a></v-tab>
            <v-tab><a href="https://www.pixanomy.com">Sell Your Artwork</a></v-tab>
            <v-tab v-for="meeovistores in meeovistores" :key="meeovistores.id"><a :href="`/stores/${meeovistores.id}`">{{ meeovistores.name }}</a></v-tab>
            <v-tab><a href="/commerce/buyagain">Buy Again</a></v-tab>
        </v-tabs>
    </v-card>
</template>

<script setup>
    const {
        getItems
    } = useDirectusItems()

    const departments = await getItems({ collection: "departments" });
    const meeovistores = await getItems({ collection: "meeovistores" });
</script>