<template>
    <v-card variant="text" class="lowerBar">
        <v-tabs v-model="tab" :bg-color="lowerbar?.color" :color="lowerbar?.colortext" align-tabs="center">
            <v-tab
                v-for="(menu, index) in lowerbarMenus"
                :key="menu?.id || menu?.url || menu?.name || index"
                :value="menu?.value || menu?.url || menu?.name || index"
                :href="menu?.url || '#'"
                :style="{ color: lowerbar?.colortext || 'white' }"
            >
                {{ menu?.name || '' }}
            </v-tab>
        </v-tabs>
    </v-card>
</template>

<script setup>
    import {
        computed,
        ref
    } from 'vue'

    const tab = ref(null)

    const gateway = useGateway()
    const content = gateway.content

    const { data: lowerbar } = await useAsyncData('lowerbar', async () => {
        const item = await content.readItem('navigation', '51', {
            fields: ['*', {
                '*': ['*'],
            }],
        })
        return item || { menus: [] }
    })

    const lowerbarMenus = computed(() => Array.isArray(lowerbar.value?.menus) ? lowerbar.value.menus : [])
</script>