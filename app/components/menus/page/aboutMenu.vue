<template>
    <div class="d-flex justify-space-around">
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props">
                    {{ companyMenu?.name || 'Company' }}
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in companyMenuMenus" :key="index" :value="index">
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
        data: companyMenu
    } = await useAsyncData('companyMenu', async () => {
        const item = await $directus.request($readItem('navigation', '57', {
            fields: ['*', {
                '*': ['*'],
            }],
        }))
        return item?.data || item || {
            menus: []
        }
    })

    const companyMenuMenus = computed(() => Array.isArray(companyMenu.value?.menus) ? companyMenu.value.menus : [])
</script>