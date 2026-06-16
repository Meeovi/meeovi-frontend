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
    import { useDirectusUrl } from '#imports'

    const directusUrl = useDirectusUrl()
    const getAssetUrl = (file) => {
        const fileId = file?.id || file?.directus_files_id?.id || file?.filename_disk || file
        if (!fileId || !directusUrl) return ''
        return `${directusUrl.replace(/\/$/, '')}/assets/${fileId}`
    }
    const hasAsset = (file) => Boolean(getAssetUrl(file))

    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: blocksSiteoverview
    } = await useAsyncData('blocksSiteoverview', () => {
        return $directus.request($readItem('page_blocks', '5', {
            fields: ['*', 'media.*.*'],
        }))
    })
</script>