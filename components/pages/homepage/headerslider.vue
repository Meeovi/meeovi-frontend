<template>
    <div class="indexHeaderSlider">
        <v-carousel hide-delimiters show-arrows="hover" :continuous="true">
            <div v-for="(media, index) in blocksSlider?.media" :key="index">
                <v-carousel-item :src="`${$directus.url}assets/${media?.directus_files_id?.filename_disk}`"
                    cover></v-carousel-item>
            </div>
        </v-carousel>
    </div>
</template>

<script setup>
    const {
        $directus,
        $readItem
    } = useNuxtApp()
    import {
        useUserStore
    } from '~/stores/user'

    const userStore = useUserStore()

    const userDisplayName = computed(() => {
        return userStore.user?.email || ''
    })

    const {
        data: blocksSlider
    } = await useAsyncData('blocksSlider', () => {
        return $directus.request($readItem('page_blocks', '1', {
            fields: ['*', 'media.*.*'],
        }))
    })
</script>