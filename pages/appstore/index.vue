<template>
    <div class="customerDashboard">
    <v-card elevation="0">
        <v-toolbar title="Meeovi Appstore" color="green"></v-toolbar>
        <v-tabs v-model="tab" bg-color="green">
            <v-tab value="one">All Apps</v-tab>
            <v-tab value="two">Games</v-tab>
            <v-tab value="three">Integrations</v-tab>
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
    </div>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref(null)

definePageMeta({
    layout: 'nolive',
  });

useHead({
    title: 'Meeovi Appstore'
})
</script>