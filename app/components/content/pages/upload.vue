<template>
    <div class="contentPage">
        <v-row>
            <v-col cols="12" v-for="page in result?.cmsPage" :key="page">
                <p class="uploadHeader" v-dompurify-html="page?.content"></p>
            </v-col>

            <v-col cols="12">
                <v-card>
                    <v-tabs v-model="tab" bg-color="orange">
                        <v-tab v-for="(menu, index) in uploadbar?.menus" :key="index">
                            <NuxtLink :to="menu?.url">{{ menu?.name }}</NuxtLink>
                        </v-tab>
                    </v-tabs>

                    <v-card-text>
                        <v-window v-model="tab">
                            <v-window-item :value="uploadbar?.menus[1]?.value">
                                <createproduct />
                            </v-window-item>

                            <v-window-item :value="uploadbar?.menus[2]?.value">
                                <createlist />
                            </v-window-item>

                            <v-window-item :value="uploadbar?.menus[3]?.value">
                                <!--<bookmarkvideo />-->
                            </v-window-item>
                        </v-window>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
    import createproduct from '#commerce/app/components/catalog/product/add-product.vue'
    import createlist from '#social/app/components/features/lists/add-list.vue'

    const {
        $directus,
        $readItem,
    } = useNuxtApp()

    const {
        data: uploadbar
    } = await useAsyncData('uploadbar', async () => {
        const resp = await $directus.request($readItem('navigation', '56'))
        return resp?.data || resp || {}
    })

    definePageMeta({
        middleware: ['auth'],
    })
</script>