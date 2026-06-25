<template>
    <div>
        <v-app-bar-title v-if="hasAsset(blocksSiteoverview?.media?.[0]?.file || blocksSiteoverview?.media?.[0])">
            <NuxtLink class="logobrand" href="/">
                <v-icon start color="orange">
                    <NuxtImg provider="cloudinary" :src="getAssetUrl(blocksSiteoverview?.media?.[0]?.file || blocksSiteoverview?.media?.[0])"
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
const { $sdk } = useNuxtApp()

const getAssetUrl = (file) => $sdk.content.getAssetUrl(file)
const hasAsset = (file) => Boolean(getAssetUrl(file))

const { data: blocksSiteoverview } = await useAsyncData('blocksSiteoverview', () => {
    return $sdk.content.getItem('page_blocks', '5', {
        fields: ['*', 'media.*.*'],
    })
})
</script>