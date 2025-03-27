<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" :title="eco?.description">
                    <v-icon start icon="fas fa-bars-staggered"></v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="dialog = false">
                        <v-icon icon="fas fa-circle-xmark"></v-icon>
                    </v-btn>
                    <v-card-title>
                        <span class="text-h6">{{ eco?.name }}</span>
                    </v-card-title>
                </v-toolbar>
                <v-row style="padding: 10px;">
                    <v-col cols="3" v-for="menu in activeMenus" :key="menu?.id">
                        <NuxtLink :to="menu?.slug">
                            <v-card class="mx-auto" max-width="300">
                                <div class="ecoAvatar">
                                    <v-avatar :icon="`fas fa-${menu?.icon}`" size="180"></v-avatar>
                                </div>
                                <v-card-title class="ecoTitle">{{ menu?.name }}</v-card-title>
                            </v-card>
                        </NuxtLink>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    const {
        $directus,
        $readItem
    } = useNuxtApp()
    const route = useRoute()

    const {
        data: eco
    } = await useAsyncData('eco', () => {
        return $directus.request($readItem('navigation', '12'))
    })

    const dialog = ref(false);

    // Add this computed property to filter active menus
const activeMenus = computed(() => {
    return eco.value?.menus?.filter(menu => menu.active === 'Active') || []
})
</script>