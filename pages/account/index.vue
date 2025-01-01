<template>
    <div class="accountPage">
        <v-card elevation="0">
            <v-toolbar color="primary">
                <v-toolbar-title>{{ accountbar?.name }}</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon="mdi-magnify"></v-btn>
                <template v-slot:extension>
                    <v-tabs v-model="tab">
                        <div v-for="(menu, index) in accountbar?.menus" :key="index">
                            <v-tab :value="menu?.value">{{ menu?.name }}</v-tab>
                        </div>
                    </v-tabs>
                </template>
            </v-toolbar>

            <v-card-text>
                <v-tabs-window v-model="tab">
                    <v-tabs-window-item value="one">
                        <dashboard />
                    </v-tabs-window-item>

                    <v-tabs-window-item value="two">
                        <addresses />
                    </v-tabs-window-item>

                    <v-tabs-window-item value="three">
                        <downloads />
                    </v-tabs-window-item>

                    <v-tabs-window-item value="four">
                        <reviews />
                    </v-tabs-window-item>

                    <v-tabs-window-item value="five">
                        <settings />
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>
    import dashboard from '~/components/pages/account/dashboard.vue'
    import addresses from '~/components/pages/account/addresses.vue'
    import downloads from '~/components/pages/account/downloads.vue'
    import reviews from '~/components/pages/account/reviews.vue'
    import settings from '~/components/pages/account/settings.vue'
    import {
        ref
    } from 'vue'

    import {
        useUserStore
    } from '~/stores/user'

    const userStore = useUserStore()

    const {
        $directus,
        $readItem,
        $readItems
    } = useNuxtApp()

    const userDisplayName = computed(() => {
        return userStore.name || userStore.username || 'User'
    })

    const tab = ref(null);
    const route = useRoute()

    const {
        data: accountbar
    } = await useAsyncData('accountbar', () => {
        return $directus.request($readItem('navigation', '37', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    definePageMeta({
        layout: 'nolive',
        middleware: ['authenticated'],
    });

    useHead({
        title: 'Meeovi Accounts',
    });
</script>