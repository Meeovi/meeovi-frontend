<template>
    <div class="customerDashboard">
        <v-card elevation="0">
            <v-toolbar :title="promotionbar?.name" color="primary"></v-toolbar>
            <v-tabs v-model="tab" bg-color="primary">
                <div v-for="(menu, index) in promotionbar?.menus" :key="index">
                    <v-tab :value="menu?.value">{{ menu?.name }}</v-tab>
                </div>
            </v-tabs>

            <v-card-text>
                <v-tabs-window v-model="tab">
                    <v-tabs-window-item :value="promotionbar?.menus[0]?.value">
                        <dashboard />
                    </v-tabs-window-item>

                    <v-tabs-window-item :value="promotionbar?.menus[1]?.value">
                        <coupons />
                    </v-tabs-window-item>

                    <v-tabs-window-item :value="promotionbar?.menus[2]?.value">
                        <giftcards />
                    </v-tabs-window-item>

                    <v-tabs-window-item :value="promotionbar?.menus[3]?.value">
                        <subscriptions />
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>
    import dashboard from '~/components/promotions/dashboard.vue'
    import coupons from '~/components/promotions/coupons.vue'
    import giftcards from '~/components/promotions/giftcards.vue'
    import subscriptions from '~/components/promotions/subscriptions.vue'

    import { ref } from 'vue'

    const tab = ref(null)
    const {
        $directus,
        $readItems,
        $readItem
    } = useNuxtApp()

    const {
        data: promotionbar
    } = await useAsyncData('promotionbar', () => {
        return $directus.request($readItem('navigation', '45'))
    })

    definePageMeta({
      layout: "nolive",
      middleware: ['authenticated'],
    });

    useHead({
        title: "Promotions Center"
    });
</script>