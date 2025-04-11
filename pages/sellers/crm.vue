<template>
    <v-card>
        <v-toolbar color="primary" title="Customer Relationship Management"></v-toolbar>
        <v-tabs v-model="tab" bg-color="primary">
            <div v-for="(nav, index) in crm" :key="index">
                <v-tab :value="nav?.value">{{ nav?.name }}</v-tab>
            </div>
        </v-tabs>

        <v-card-text>
            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="one">
                    One
                </v-tabs-window-item>

                <v-tabs-window-item value="two">
                    Two
                </v-tabs-window-item>

                <v-tabs-window-item value="three">
                    Three
                </v-tabs-window-item>

                <v-tabs-window-item value="four">
                    Three
                </v-tabs-window-item>

                <v-tabs-window-item value="five">
                    Three
                </v-tabs-window-item>

                <v-tabs-window-item value="six">
                    Three
                </v-tabs-window-item>
            </v-tabs-window>
        </v-card-text>
    </v-card>
</template>

<script setup>
    import {
        ref
    } from 'vue'

    const tab = ref(null);

    const {
        $directus,
        $readItem
    } = useNuxtApp()
    const route = useRoute()

    const {
        data: crm
    } = await useAsyncData('crm', () => {
        return $directus.request($readItem('navigation', '26'))
    })

    definePageMeta({
        layout: "sellers",
        middleware: ['authenticated'],
    });

    useHead({
        title: ''
    })
</script>