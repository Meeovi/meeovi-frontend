<template>
    <v-layout id="mobileNav" style="height: 56px;">
        <v-bottom-navigation v-model="value" bg-color="color" mode="shift">
            <v-btn href="/" icon="fas fa-home">
                <v-icon icon="fas fa-home"></v-icon>

                <span>Home</span>
            </v-btn>

            <v-btn href="/u/">
                <v-icon icon="fas fa-user"></v-icon>

                <span>You</span>
            </v-btn>

            <mobileSearch />

            <v-btn href="/checkout">
                <v-icon icon="fas fa-shopping-cart"></v-icon>

                <span>Basket</span>
            </v-btn>

            <v-btn href="/menu-page/">
                <v-icon icon="fas fa-bars"></v-icon>

                <span>Browse</span>
            </v-btn>

            <v-btn href="/notifications">
                <v-icon icon="fas fa-bell"></v-icon>

                <span>Notifications</span>
            </v-btn>
        </v-bottom-navigation>
    </v-layout>
</template>

<script setup>
    import {
        computed,
        ref
    } from 'vue'
    import mobileSearch from '#search/app/components/menus/mobilesearch.vue'

    const value = ref(1)
    const color = computed(() => {
        switch (value.value) {
            case 0:
                return 'blue-grey'
            case 1:
                return 'teal'
            case 2:
                return 'brown'
            case 3:
                return 'indigo'
            default:
                return 'blue-grey'
        }
    })
</script>