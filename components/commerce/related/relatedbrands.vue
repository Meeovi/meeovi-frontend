<template>
    <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center" elevation="0">
        <v-toolbar title="Brands on Meeovi" color="transparent">
            <div><NuxtLink to="/brands/">All Brands</NuxtLink></div>
        </v-toolbar>
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-primary" show-arrows>
            <v-slide-group-item v-for="brand in brands" :key="brand.brand_id" v-slot="{ toggle, selectedClass }">
                <brand :brand="brand" />
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
    import brand from '~/components/commerce/related/brands.vue'

    const model = ref(null)
    const brands = ref([])

    const fetchBrands = async () => {
        try {
            // Use Nuxt's $fetch to call our API
            const response = await $fetch('/api/commerce/catalog/brands/brands')
            brands.value = response
        } catch (error) {
            console.error('Error fetching brands:', error)
            // Handle error (e.g., show an error message to the user)
        }
    }

    onMounted(() => {
        fetchBrands()
    })
</script>