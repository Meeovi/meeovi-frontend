<template>
    <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center" elevation="0">
        <h4>Brands on Meeovi</h4>
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-primary" show-arrows>
            <v-slide-group-item v-for="brand in brands" :key="brand.id" v-slot="{ toggle, selectedClass }">
                <v-card color="#1F7087" :class="['ma-4', selectedClass]" @click="toggle" elevation="0">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="text-h5">
                                {{ brand.title }}
                            </v-card-title>

                            <v-card-subtitle>{{ brand.description }}</v-card-subtitle>

                            <v-card-actions>
                                <v-btn class="ms-2" size="small" text="VIEW PRODUCTS" variant="outlined"></v-btn>
                            </v-card-actions>
                        </div>

                        <v-avatar class="ma-3" rounded="0" size="125">
                            <v-img :src="brand.image"></v-img>
                        </v-avatar>
                    </div>
                </v-card>
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

    const model = ref(null)
    const brands = ref([])

    const fetchBrands = async () => {
        try {
            // Use Nuxt's $fetch to call our API
            const response = await $fetch('/api/commerce/catalog/brands')
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