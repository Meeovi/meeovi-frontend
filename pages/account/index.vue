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
                    <v-tabs-window-item :value="accountbar?.menus[0]?.value">
                        <dashboard />
                    </v-tabs-window-item>

                    <v-tabs-window-item :value="accountbar?.menus[1]?.value">
                        <orders />
                    </v-tabs-window-item>

                    <v-tabs-window-item :value="accountbar?.menus[2]?.value">
                        <transactions />
                    </v-tabs-window-item>

                    <v-tabs-window-item :value="accountbar?.menus[3]?.value">
                        <shipments />
                    </v-tabs-window-item>

                    <v-tabs-window-item :value="accountbar?.menus[4]?.value">
                        <refunds />
                    </v-tabs-window-item>

                    <v-tabs-window-item :value="accountbar?.menus[5]?.value">
                        <creditmemos />
                    </v-tabs-window-item>

                    <v-tabs-window-item :value="accountbar?.menus[6]?.value">
                        <addresses />
                    </v-tabs-window-item>

                    <v-tabs-window-item :value="accountbar?.menus[7]?.value">
                        <downloads />
                    </v-tabs-window-item>

                    <v-tabs-window-item :value="accountbar?.menus[8]?.value">
                        <reviews />
                    </v-tabs-window-item>

                    <v-tabs-window-item :value="accountbar?.menus[9]?.value">
                        <settings />
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>
    import dashboard from '~/components/account/dashboard.vue'
    import orders from '~/components/orders/orders/my-orders.vue'
    import transactions from '~/components/orders/transactions.vue'
    import shipments from '~/components/orders/shipments.vue'
    import refunds from '~/components/orders/orders/returns.vue'
    import creditmemos from '~/components/orders/creditmemos.vue'
    import addresses from '~/components/account/addresses.vue'
    import downloads from '~/components/account/downloads.vue'
    import reviews from '~/components/account/reviews.vue'
    import settings from '~/components/account/settings.vue'
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
        middleware: ['auth'],
    });

    useHead({
        title: 'Meeovi Accounts',
    });
</script>