<template>
    <div class="contentPage">
        <v-card>
            <v-layout>
                <v-toolbar color="primary" :title="page?.name">
                    <v-toolbar-items>
                        <v-btn prepend-icon="fas fa-th" color="white" @click.stop="drawer = !drawer">
                            {{ account?.name }}
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>

                <div class="d-flex flex-row">
                    <v-navigation-drawer v-model="drawer" temporary>
                        <v-tabs v-model="tab" color="primary" direction="vertical">
                            <div v-for="(menu, index) in account?.menus" :key="index">
                                <v-tab :value="menu?.value" v-if="menu?.active === 'Active'">{{ menu?.name }}</v-tab>
                            </div>
                        </v-tabs>
                    </v-navigation-drawer>

                    <v-main style="height: 100vh">
                        <v-tabs-window v-model="tab" style="width: 100%;">
                            <v-tabs-window-item :value="account?.menus[0]?.value">
                                <v-card flat>
                                    <v-card-text>
                                        <orders />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item :value="account?.menus[1]?.value">
                                <v-card flat>
                                    <v-card-text>
                                        <invoices />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item :value="account?.menus[2]?.value">
                                <v-card flat>
                                    <v-card-text>
                                        <shipments />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item :value="account?.menus[3]?.value">
                                <v-card flat>
                                    <v-card-text>
                                        <creditmemos />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item :value="account?.menus[4]?.value">
                                <v-card flat>
                                    <v-card-text>
                                        <transactions />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item :value="account?.menus[5]?.value">
                                <v-card flat>
                                    <v-card-text>
                                        <agreements />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item :value="account?.menus[6]?.value">
                                <v-card flat>
                                    <v-card-text>
                                        <coupons />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item :value="account?.menus[7]?.value">
                                <v-card flat>
                                    <v-card-text>
                                        <subscriptions />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item :value="account?.menus[8]?.value">
                                <v-card flat>
                                    <v-card-text>
                                        <giftcards />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item :value="account?.menus[9]?.value">
                                <v-card flat>
                                    <v-card-text>
                                        <sellerdashboard />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>
                        </v-tabs-window>
                    </v-main>
                </div>
            </v-layout>
        </v-card>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    import invoices from '~/components/orders/invoices.vue'
    import shipments from '~/components/orders/shipments.vue'
    import creditmemos from '~/components/orders/creditmemos.vue'
    import transactions from '~/components/orders/transactions.vue'
    import agreements from '~/components/orders/agreements.vue'
    import coupons from '~/components/promotions/coupons.vue'
    import subscriptions from '~/components/promotions/subscriptions.vue'
    import giftcards from '~/components/promotions/giftcards.vue'
    import sellerdashboard from "../pages/sellerdashboard.vue"

    const tab = ref('option-1');
    const drawer = ref(null);
    const {
        $directus,
        $readItem,
        $readItems
    } = useNuxtApp()

    const {
        data: account
    } = await useAsyncData('account', () => {
        return $directus.request($readItem('navigation', '1', {
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
        title: "Account Dashboard"
    })
</script>