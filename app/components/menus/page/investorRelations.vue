<template>
    <div class="d-flex justify-space-around">
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props">
                    {{ investorMenu?.name || 'Investor Relations' }}
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in investorMenuMenus" :key="index" :value="index">
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
        data: investorMenu
    } = await useAsyncData('investorMenu', async () => {
        const item = await $directus.request($readItem('navigation', '71', {
            fields: ['*', {
                '*': ['*'],
            }],
        }))
        return item?.data || item || {
            menus: []
        }
    })

    const investorMenuMenus = computed(() => Array.isArray(investorMenu.value?.menus) ? investorMenu.value.menus : [])
</script>