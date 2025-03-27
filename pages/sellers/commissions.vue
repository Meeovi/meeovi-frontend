<template>
    <v-card>
        <v-toolbar color="" title=""></v-toolbar>
        <v-tabs v-model="tab" bg-color="primary">
            <v-tab value="one">Item One</v-tab>
            <!--<v-tab value="two">Item Two</v-tab>
            <v-tab value="three">Item Three</v-tab>-->
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
            </v-tabs-window>
        </v-card-text>
    </v-card>
</template>

<script setup>
    import {
        ref
    } from 'vue'

    const tab = ref(null);

    definePageMeta({
      layout: "sellers",
      middleware: ['auth'],
    });

    useHead({
        title: ''
    })
</script>