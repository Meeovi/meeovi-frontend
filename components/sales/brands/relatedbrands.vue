<template>
    <section data-bs-version="5.1" class="mbr-section features20 cid-txNnCwzel4" id="features20-4t"
        data-sortbtn="btn-primary">
        <div class="container-fluid">
            <h2 class="mbr-section-title align-left mbr-fonts-style display-5">
                {{ callouts?.menus?.[0]?.name }}</h2>
            <div class="underline align-left pb-3">
                <div class="line"></div>
            </div>
            <v-sheet class="mx-auto">
                <v-slide-group v-model="model" class="pa-4" show-arrows>
                    <v-slide-group-item v-for="(brand, index) in brands" :key="index"
                        v-slot="{ isSelected, toggle, selectedClass }">
                        <brand :brand="brand" :class="['ma-4', selectedClass]" @click="toggle" />

                        <div class="d-flex fill-height align-center justify-center">
                            <v-scale-transition>
                                <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline"
                                    size="48"></v-icon>
                            </v-scale-transition>
                        </div>
                    </v-slide-group-item>
                </v-slide-group>
            </v-sheet>
        </div>
    </section>
</template>

<script setup>
    import {
        ref,
        onMounted
    } from 'vue'
    import brand from '~/components/product/brands.vue'

    const {
        $directus,
        $readItems,
        $readItem
    } = useNuxtApp()

    const model = ref(null);
    const {
        data: brands
    } = await useAsyncData('brands', () => {
        return $directus.request($readItems('brands', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: callouts
    } = await useAsyncData('callouts', () => {
        return $directus.request($readItem('callouts', '3'))
    })
</script>