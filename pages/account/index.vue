<template>
    <div class="accountPage">
        <v-card elevation="0">
            <v-toolbar color="primary">
                <v-toolbar-title>My Account</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon="mdi-magnify"></v-btn>
                <template v-slot:extension>
                    <v-tabs v-model="tab">
                        <v-tab value="one">Dashboard</v-tab>
                        <v-tab value="two">Addresses</v-tab>
                        <v-tab value="three">Downloads</v-tab>
                        <v-tab value="four">Reviews</v-tab>
                        <v-tab value="five">Settings</v-tab>
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

    const tab = ref(null)

    definePageMeta({
        layout: 'nolive',
        middleware: ['authenticated'],
    });

    useHead({
        title: 'Meeovi Accounts',
    });
</script>