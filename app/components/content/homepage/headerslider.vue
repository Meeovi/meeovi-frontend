<template>
    <div>
        <div class="indexHeaderSlider" v-if="hasAsset(blocksSlider?.media?.[0]?.file || blocksSlider?.media?.[0])">
            <v-carousel hide-delimiters show-arrows="hover" :continuous="true">
                <div v-for="(media, index) in blocksSlider?.media" :key="index">
                    <v-carousel-item :src="getAssetUrl(media?.file || media)"
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
    const gateway = useGateway()
    const content = gateway.content
    const getAssetUrl = (file) => content.getAssetUrl(file)
    const hasAsset = (file) => Boolean(getAssetUrl(file))

    const {
        data: blocksSlider
    } = await useAsyncData('blocksSlider', async () => {
        try {
            return await content.readItem('page_blocks', '1', {
                fields: ['*', 'media.*.*'],
            })
        } catch {
            return null
        }
    })
</script>