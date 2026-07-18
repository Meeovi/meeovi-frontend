<template>
    <v-card variant="text" class="lowerBar">
        <v-tabs v-model="tab" :bg-color="lowerbar?.color" :color="lowerbar?.colortext" align-tabs="center">
            <v-tab v-if="session">{{ hellobar?.description }} {{ session.user?.name }}</v-tab>
            <v-spacer />
            <div v-for="(menu, index) in lowerbar?.menus" :key="menu?.id || menu?.url || menu?.name || index">
                <v-tab v-if="menu?.active === 'Active'" :value="menu?.value || menu?.url || menu?.name || index" :href="menu?.url || '#'"
                    :style="{ color: lowerbar?.colortext || 'white' }">
                    {{ menu?.name || '' }}
                </v-tab>
            </div>
        </v-tabs>
    </v-card>
</template>

<script setup>
    import {
        computed,
        ref
    } from 'vue'
    import { authClient } from "#auth/lib/auth-client";

    const { data: session } = await authClient.useSession(useFetch);

    const tab = ref(null)

    const {
        $directus,
        $readItem,
    } = useNuxtApp()

    const {
        data: lowerbar
    } = await useAsyncData('lowerbar', () => {
        return $directus.request($readItem('navigation', '51'))
    })

    const {
        data: hellobar
    } = await useAsyncData('hellobar', () => {
        return $directus.request($readItem('navigation', '50'))
    })
</script>