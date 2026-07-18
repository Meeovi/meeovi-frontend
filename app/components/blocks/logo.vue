<template>
    <div>
        <v-app-bar-title v-if="hasAsset(blocksSiteoverview?.media?.[0]?.file || blocksSiteoverview?.media?.[0])">
            <NuxtLink class="logobrand" href="/">
                <v-icon start color="orange">
                    <NuxtImg provider="cloudinary" :src="getAssetURL(blocksSiteoverview?.media?.[0]?.file || blocksSiteoverview?.media?.[0])"
                        :alt="blocksSiteoverview?.name" />
                </v-icon>
                <p class="logotext">{{ blocksSiteoverview?.name }}<!--Meeovi--></p>
            </NuxtLink>
        </v-app-bar-title>

        <v-app-bar-title v-else>
            <NuxtLink class="logobrand" href="/">
                <v-icon start color="orange">
                    <NuxtImg provider="cloudinary" src="/images/logo512alpha.png" :alt="blocksSiteoverview?.name" />
                </v-icon>
                <p class="logotext">{{ blocksSiteoverview?.name }}<!--Meeovi--></p>
            </NuxtLink>
        </v-app-bar-title>
    </div>
</template>

<script setup>
const { $directus, $readItem, $readItems } = useNuxtApp()

import { getAssetURL } from '#shared/app/utils/get-asset-url'

const hasAsset = (file) => Boolean(getAssetURL(file))

const { data: blocksSiteoverview } = await useAsyncData('blocksSiteoverview', async () => {
    const resp = await $directus.request($readItem('page_blocks', '5', {
        fields: ['*', 'media.*.*'],
    }))
    return resp?.data || resp || {}
})

console.log(blocksSiteoverview.value?.name)
</script>