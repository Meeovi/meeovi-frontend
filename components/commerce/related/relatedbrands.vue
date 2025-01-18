<template>
    <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center" elevation="0">
        <v-toolbar :title="callouts?.menus?.[0]?.name" color="transparent">
            <div><NuxtLink :to="`${callouts?.menus?.[0]?.description }`">{{ callouts?.name }}</NuxtLink></div>
        </v-toolbar>
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-primary" show-arrows>
            <v-slide-group-item v-for="brand in brands" :key="brand.id" v-slot="{ toggle, selectedClass }">
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