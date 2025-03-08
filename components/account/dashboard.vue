<template>
    <div>
        <v-toolbar color="transparent" density="compact" title="My Dashboard"></v-toolbar>
        <v-row>
            <v-col cols="6"><recentorders /></v-col>
            <v-col cols="6"><recentlists /></v-col>
            <v-col cols="6"><billingagreements /></v-col>
            <v-col cols="6"><recentinvoices /></v-col>
        </v-row>
    </div>
</template>

<script setup>
import recentorders from '@/components/pages/account/accountDashboard/recentorders.vue';
import recentlists from '@/components/pages/account/accountDashboard/recentlists.vue';
import billingagreements from '@/components/pages/account/accountDashboard/billingagreements.vue';
import recentinvoices from '@/components/pages/account/accountDashboard/recentinvoices.vue';

    useHead({
        title: 'My Dashboard',
    });
</script>