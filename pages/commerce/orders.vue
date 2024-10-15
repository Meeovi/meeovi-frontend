<template>
    <div class="customerDashboard">
        <v-card elevation="0">
            <v-toolbar title="Orders Center" color="orange"></v-toolbar>
            <v-tabs v-model="tab" bg-color="orange">
                <v-tab value="one">Dashboard</v-tab>
                <v-tab value="two">Orders</v-tab>
                <v-tab value="three">Transactions</v-tab>
                <v-tab value="four">Shipments</v-tab>
                <v-tab value="five">Refunds</v-tab>
                <v-tab value="six">Credit Memos</v-tab>
            </v-tabs>

            <v-card-text>
                <v-tabs-window v-model="tab">
                    <v-tabs-window-item value="one">
                        <dashboard />
                    </v-tabs-window-item>

                    <v-tabs-window-item value="two">
                        <orders />
                    </v-tabs-window-item>

                    <v-tabs-window-item value="three">
                        <transactions />
                    </v-tabs-window-item>

                    <v-tabs-window-item value="four">
                        <shipments />
                    </v-tabs-window-item>

                    <v-tabs-window-item value="five">
                        <refunds />
                    </v-tabs-window-item>

                    <v-tabs-window-item value="six">
                        <creditmemos />
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>
    import dashboard from '~/components/commerce/pages/orders/dashboard.vue'
    import orders from '~/components/commerce/pages/orders/orders/my-orders.vue'
    import transactions from '~/components/commerce/pages/orders/transactions.vue'
    import shipments from '~/components/commerce/pages/orders/shipments.vue'
    import refunds from '~/components/commerce/pages/orders/orders/returns.vue'
    import creditmemos from '~/components/commerce/pages/orders/creditmemos.vue'
    //import orders from '~/components/commerce/pages/orders/orders.vue'

    import { ref } from 'vue'

    const tab = ref(null)

    definePageMeta({
        layout: "nolive",
        middleware: ['authenticated'],
    });

useHead({
    title: "Orders Center"
});
</script>