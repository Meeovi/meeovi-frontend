<template>
    <div class="d-flex justify-space-around">
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props">
                    {{ legalMenu?.name || 'Legal' }}
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in legalMenuMenus" :key="index" :value="index">
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

    const { $sdk } = useNuxtApp()

    const {
        data: legalMenu
    } = await useAsyncData('legalMenu', async () => {
        const item = await $sdk.content.getItem('navigation', '121', {
            fields: ['*', {
                '*': ['*'],
            }],
        })
        return item || {
            menus: []
        }
    })

    const legalMenuMenus = computed(() => Array.isArray(legalMenu.value?.menus) ? legalMenu.value.menus : [])
</script>