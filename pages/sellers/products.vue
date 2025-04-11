<template>
    <v-card>
        <v-toolbar color="" title="Products"><NuxtLinkddproduct /></v-toolbar>
        <v-tabs v-model="tab" bg-color="primary">
            <v-tab value="one">My Products</v-tab>
            <!--<v-tab value="two">Item Two</v-tab>
            <v-tab value="three">Item Three</v-tab>-->
        </v-tabs>

        <v-card-text>
            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="one">
                    <productCard />
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
    import addproduct from '~/components/crud/create/add-product.vue'
    import productCard from '~/components/productCard.vue'

    const tab = ref(null);

    definePageMeta({
      layout: "sellers",
      middleware: ['authenticated'],
    });

    useHead({
        title: 'Sellers Products'
    })
</script>