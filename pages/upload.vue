<template>
    <div class="contentPage">
        <v-row>
            <v-col cols="12" v-for="page in result?.cmsPage" :key="page">
                <p class="uploadHeader" v-html="page?.content"></p>
            </v-col>

            <v-col cols="12">
                <v-card>
                    <v-tabs v-model="tab" bg-color="orange">
                        <v-tab value="one">Create A Product</v-tab>
                        <v-tab value="two">Create A List</v-tab>
                        <v-tab value="three">Bookmark A Video</v-tab>
                    </v-tabs>

                    <v-card-text>
                        <v-window v-model="tab">
                            <v-window-item value="one">
                                <createproduct />
                            </v-window-item>

                            <v-window-item value="two">
                                <createlist />
                            </v-window-item>

                            <v-window-item value="three">
                                <bookmarkvideo />
                            </v-window-item>
                        </v-window>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    import {
    useQuery
  } from '@vue/apollo-composable'
    import createproduct from '~/components/products/add-product.vue'
    import createlist from '~/components/lists/add-list.vue'
    import bookmarkvideo from '~/components/products/add-bookmarkvideo.vue'
    import { uploadPage } from '~/graphql/commerce/queries/pages/upload'

    useHead({
        title: 'Upload Center',
    })

    const tab = ref(null)

    const {
    result
  } = useQuery(uploadPage)

    definePageMeta({
        middleware: ['auth'],
    })
</script>