<template>
    <div class="contentPage">
        <v-card>
            <v-layout>
                <v-toolbar color="primary" :title="page?.name">
                    <v-toolbar-items>
                        <v-btn prepend-icon="fas fa-th" color="white" @click.stop="drawer = !drawer">
                            Account Menu
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>

                <div class="d-flex flex-row">
                    <v-navigation-drawer v-model="drawer" temporary>
                        <v-tabs v-model="tab" color="primary" direction="vertical">
                            <div v-for="page in page?.repeaterTextBox" :key="page.id">
                                <v-tab prepend-icon="mdi-account" :text="page?.name" :value="page?.subject"></v-tab>
                            </div>
                        </v-tabs>
                    </v-navigation-drawer>

                    <v-main style="height: 100vh">
                        <v-tabs-window v-model="tab" style="width: 100%;">
                            <v-tabs-window-item value="option-1">
                                <v-card flat>
                                    <v-card-text>
                                        <orders />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="option-2">
                                <v-card flat>
                                    <v-card-text>
                                        <invoices />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="option-3">
                                <v-card flat>
                                    <v-card-text>
                                        <shipments />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="option-4">
                                <v-card flat>
                                    <v-card-text>
                                        <creditmemos />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="option-5">
                                <v-card flat>
                                    <v-card-text>
                                        <transactions />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="option-6">
                                <v-card flat>
                                    <v-card-text>
                                        <agreements />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="option-7">
                                <v-card flat>
                                    <v-card-text>
                                        <spaces />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="option-8">
                                <v-card flat>
                                    <v-card-text>
                                        <feed />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="option-9">
                                <v-card flat>
                                    <v-card-text>
                                        <coupons />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="option-10">
                                <v-card flat>
                                    <v-card-text>
                                        <reviews />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="option-11">
                                <v-card flat>
                                    <v-card-text>
                                        <lists />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="option-12">
                                <v-card flat>
                                    <v-card-text>
                                        <showcases />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="option-13">
                                <v-card flat>
                                    <v-card-text>
                                        <subscriptions />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="option-14">
                                <v-card flat>
                                    <v-card-text>
                                        <giftcards />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="option-15">
                                <v-card flat>
                                    <v-card-text>
                                        <settings />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="option-16">
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

<script>
    import orders from './orders/my-orders.vue'
    import invoices from './invoices.vue'
    import shipments from './shipments.vue'
    import creditmemos from './creditmemos.vue'
    import transactions from './transactions.vue'
    import agreements from './agreements.vue'
    import spaces from '../../Social/spaces.vue'
    import feed from '../../Social/newsfeed.vue'
    import coupons from '../../commerce/coupons.vue'
    import subscriptions from '../../commerce/subscriptions.vue'
    import giftcards from '../../commerce/giftcards.vue'
    import reviews from './reviews.vue'
    import lists from './lists.vue'
    import showcases from '../../product/Showcase/showcases.vue'
    import sellerdashboard from './sellerdashboard.vue'
    import settings from './settings.vue'

    export default {
        components: {
            orders,
            invoices,
            shipments,
            creditmemos,
            transactions,
            agreements,
            spaces,
            feed,
            coupons,
            subscriptions,
            giftcards,
            reviews,
            lists,
            showcases,
            sellerdashboard,
            settings
        },
        data: () => ({
            tab: 'option-1',
            drawer: null,
        }),
    }
</script>

<script setup>
    const {
        getItemById,
        getItems
    } = useDirectusItems()

    const page = await getItemById({
        collection: "pages",
        id: 49
    });

    definePageMeta({
        layout: 'nolive',
    });

    useHead({
        title: "Account Dashboard"
    })
</script>