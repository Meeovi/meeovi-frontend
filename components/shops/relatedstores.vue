<template>
    <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center" elevation="0">
        <v-toolbar title="Stores on Meeovi" color="transparent">
            <div><NuxtLink to="/shops/">All Stores</NuxtLink></div>
        </v-toolbar>
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-primary" show-arrows>
            <v-slide-group-item v-for="store in stores" :key="store" v-slot="{ toggle, selectedClass }">
                <store :store="store" />
            </v-slide-group-item>
        </v-slide-group>

        <v-expand-transition>
            <v-sheet v-if="model != null" height="200">
                <div class="d-flex fill-height align-center justify-center">
                    <h3 class="text-h6">
                        Selected {{ model }}
                    </h3>
                </div>
            </v-sheet>
        </v-expand-transition>
    </v-sheet>
</template>

<script setup>
    import {
        ref,
        onMounted
    } from 'vue'
    import store from '~/components/product/stores.vue'

    const model = ref(null)
    const stores = ref([])

    const fetchStores = async () => {
        try {
            // Use Nuxt's $fetch to call our API
            const response = await $fetch('/api/commerce/catalog/marketplace/stores')
            stores.value = response
        } catch (error) {
            console.error('Error fetching stores:', error)
            // Handle error (e.g., show an error message to the user)
        }
    }

    onMounted(() => {
        fetchStores()
    })
</script>