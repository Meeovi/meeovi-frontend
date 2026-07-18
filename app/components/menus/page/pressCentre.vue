<template>
    <div class="d-flex justify-space-around">
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props">
                    {{ pressCentreMenu?.name || 'Press Centre' }}
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in pressCentreMenuMenus" :key="index" :value="index">
                    <v-list-item-title>
                        <NuxtLink :to="item.url">{{ item.name }}</NuxtLink>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script setup>
    import {
        computed,
        ref
    } from 'vue'

    const {
        $directus,
        $readItem,
    } = useNuxtApp()

    const {
        data: pressCentreMenu
    } = await useAsyncData('pressCentreMenu', async () => {
        const item = await $directus.request($readItem('navigation', '122', {
            fields: ['*', {
                '*': ['*'],
            }],
        }))
        return item?.data || item || {
            menus: []
        }
    })

    const pressCentreMenuMenus = computed(() => Array.isArray(pressCentreMenu.value?.menus) ? pressCentreMenu.value.menus : [])
</script>