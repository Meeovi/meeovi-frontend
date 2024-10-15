<template>
    <div class="customerDashboard">
        <v-card elevation="0">
            <v-toolbar title="Promotions Center" color="primary"></v-toolbar>
            <v-tabs v-model="tab" bg-color="primary">
                <v-tab value="one">Dashboard</v-tab>
                <v-tab value="two">Coupons</v-tab>
                <v-tab value="three">Gift Cards</v-tab>
                <v-tab value="four">Deals</v-tab>
                <v-tab value="five">Subscriptions</v-tab>
            </v-tabs>

            <v-card-text>
                <v-tabs-window v-model="tab">
                    <v-tabs-window-item value="one">
                        <dashboard />
                    </v-tabs-window-item>

                    <v-tabs-window-item value="two">
                        <coupons />
                    </v-tabs-window-item>

                    <v-tabs-window-item value="three">
                        <giftcards />
                    </v-tabs-window-item>

                    <v-tabs-window-item value="four">
                        <deals />
                    </v-tabs-window-item>

                    <v-tabs-window-item value="five">
                        <subscriptions />
                    </v-tabs-window-item>

                </v-tabs-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>
    import dashboard from '~/components/commerce/pages/promotions/dashboard.vue'
    import coupons from '~/components/commerce/pages/promotions/coupons.vue'
    import giftcards from '~/components/commerce/pages/promotions/giftcards.vue'
    import deals from '~/components/commerce/pages/promotions/deals.vue'
    import subscriptions from '~/components/commerce/pages/promotions/subscriptions.vue'
    //import creditmemos from '~/components/commerce/pages/promotions/creditmemos.vue'

    import { ref } from 'vue'

    const tab = ref(null)

    definePageMeta({
      layout: "nolive",
      middleware: ['authenticated'],
    });

    useHead({
        title: "Promotions Center"
    });
</script>