<template>
    <v-card variant="text" class="lowerBar">
        <v-tabs v-model="tab" :bg-color="lowerbar?.color" :color="lowerbar?.colortext" align-tabs="center">
            <v-tab v-if="loggedIn === true">{{ hellobar?.description }} {{ user?.name }}</v-tab>
            <v-spacer />
            <div v-for="(menu, index) in lowerbar?.menus" :key="menu?.id || menu?.url || menu?.name || index">
                <v-tab :value="menu?.value || menu?.url || menu?.name || index" :href="menu?.url || '#'"
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

    const auth = useAuth()
    await auth.fetchSession()

    const loggedIn = computed(() => Boolean(auth.loggedIn.value))
    const user = computed(() => auth.user.value ?? null)

    const tab = ref(null)

    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: lowerbar
    } = await useAsyncData('lowerbar', async () => {
        return $directus.request($readItem('navigation', '51', {
            fields: ['*', {
                '*': ['*'],
            }],
        }))
    })

    const {
        data: hellobar
    } = await useAsyncData('hellobar', () => {
        return $directus.request($readItem('navigation', '50'))
    })
</script>