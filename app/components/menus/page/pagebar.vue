<template>
    <v-toolbar class="pagebar">
        <v-toolbar-title>{{ pageBar?.name }}</v-toolbar-title>

        <v-toolbar-items>
            <v-tabs show-arrows>
                <div class="pagebarTabs" v-for="(menu, index) in pageBarMenus"
                    :key="menu?.id || menu?.url || menu?.name || index">
                    <v-tab v-if="menu?.name === 'About Us'">
                        <aboutMenu />
                    </v-tab>
                    <v-tab v-if="menu?.name === 'Legal'">
                        <legalMenu />
                    </v-tab>
                    <v-tab v-if="menu?.name === 'Press Centre'">
                        <pressCentreMenu />
                    </v-tab>
                    <v-tab v-if="menu?.name === 'Investor Relations'">
                        <investorRelations />
                    </v-tab>
                </div>
            </v-tabs>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script setup>
    import {
        computed,
        ref
    } from 'vue'
    import aboutMenu from './aboutMenu.vue'
    import legalMenu from './legalMenu.vue'
    import pressCentreMenu from './pressCentre.vue'
    import investorRelations from './investorRelations.vue'

    const tab = ref(null)

    const {
        $directus,
        $readItem,
    } = useNuxtApp()

    const {
        data: pageBar
    } = await useAsyncData('pageBar', async () => {
        const item = await $directus.request($readItem('navigation', '123', {
            fields: ['*', {
                '*': ['*'],
            }],
        }))
        return item?.data || item || {
            menus: []
        }
    })

    const pageBarMenus = computed(() => Array.isArray(pageBar.value?.menus) ? pageBar.value.menus : [])
</script>