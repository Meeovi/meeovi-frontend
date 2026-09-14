<template>
    <v-card class="lowerBar">
        <v-tabs v-model="tab" :bg-color="lowerbar?.color" :color="lowerbar?.colortext" align-tabs="center">
            <v-tab v-if="session"><NuxtLink :to="`/u/${session.user?.id}`">{{ hellobar?.description }} {{ session.user?.name }}</NuxtLink></v-tab>
            <v-spacer />
            <div v-for="(menu, index) in lowerbar?.menus" :key="menu?.id || menu?.url || menu?.name || index">
                <v-tab v-if="menu?.active === 'Active'" :value="menu?.value || menu?.url || menu?.name || index" :href="menu?.url || '#'" :style="{ color: lowerbar?.colortext || 'white' }">
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

    // lazy: true on all three calls below — this component renders in the
    // default layout on nearly every page, so a blocking fetch here isn't
    // just a homepage problem: it holds up navigation to ANY page using
    // this layout (this is what was actually behind the slow post-login
    // redirect, more than the homepage's own product sections were).
    // `session` keeps its existing v-if="session" guard, so it simply
    // doesn't render the "Hello, {name}" tab until the session resolves.
    const auth = useAuth()
    // auth.getSession() itself resolves to { data, error } — useAsyncData's
    // own `data` ref would otherwise wrap that whole object instead of
    // unwrapping to the actual session, unlike the old `const { data:
    // session } = await auth.getSession()` destructure this replaces.
    const { data: session } = useAsyncData('lowerbarSession', async () => {
        const { data } = await auth.getSession()
        return data
    }, { lazy: true })

    const tab = ref(null)

    const {
        $directus,
        $readItem,
    } = useNuxtApp()

    const {
        data: lowerbar
    } = useAsyncData('lowerbar', () => {
        return $directus.request($readItem('navigation', '51'))
    }, { lazy: true })

    const {
        data: hellobar
    } = useAsyncData('hellobar', () => {
        return $directus.request($readItem('navigation', '50'))
    }, { lazy: true })
</script>
