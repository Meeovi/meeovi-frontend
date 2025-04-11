<template>
    <div class="accountDashboard">
        <v-toolbar :color="integration?.color" :style="`color: ${integration?.colortext}`">
            <v-toolbar-title>{{ integration?.name }}</v-toolbar-title>
        </v-toolbar>

        <div></div>
    </div>
</template>

<script setup>
    const route = useRoute();
    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: integration
    } = await useAsyncData('integration', () => {
        return $directus.request($readItem('integrations', route.params.id, {
            fields: ['*', '*', '*'],
        }))
    })

    definePageMeta({
        layout: "nolive",
        middleware: ['authenticated'],
    });

    useHead({
        title: computed(() => integration?.name || 'Integration Page')
    })
</script>