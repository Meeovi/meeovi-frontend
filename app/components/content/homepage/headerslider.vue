<template>
    <div>
        <div class="indexHeaderSlider" v-if="hasAsset(blocksSlider?.media?.[0]?.file || blocksSlider?.media?.[0])">
            <v-carousel hide-delimiters show-arrows="hover" :continuous="true">
                <div v-for="(media, index) in blocksSlider?.media" :key="index">
                    <v-carousel-item :src="getAssetURL(media?.file || media)"
                        cover></v-carousel-item>
                </div>
            </v-carousel>
        </div>

        <div v-else>
            <intro />
        </div>
    </div>
</template>

<script setup>
    import intro from './intro.vue'
    const { $directus, $readItem, $readItems } = useNuxtApp()

    import { getAssetURL } from '#shared/app/utils/get-asset-url'

    const hasAsset = (file) => Boolean(getAssetURL(file))

    // lazy: true — don't block the whole page (and any navigateTo() landing
    // here, e.g. the post-login redirect) on this one section's fetch; it
    // renders its own placeholder (the `v-else` <intro/>) until data arrives.
    const {
        data: blocksSlider
    } = useAsyncData('blocksSlider', async () => {
        try {
            const resp = await $directus.request($readItem('page_blocks', '1', {
                fields: ['*', 'media.*.*'],
            }))
            return resp?.data || resp || null
        } catch {
            return null
        }
    }, { lazy: true })
</script>