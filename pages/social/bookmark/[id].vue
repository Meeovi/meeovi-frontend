<template>
    <v-row class="contentPage">
        <v-col cols="12">
            <v-card class="mx-auto" max-width="800px" elevation="0">
                <NuxtImg loading="lazy" class="align-end text-white" height="200" :src="`${$directus.url}assets/${website?.image?.filename_disk}`" :alt="website?.name" cover />
                <v-card-title>{{ website?.name }}</v-card-title>

                <v-card-subtitle class="pt-4">
                    Created: {{ new Date(website?.created_at).toLocaleDateString() }}
                </v-card-subtitle>

                <v-card-text>
                    <div>Type: {{ website?.type }}</div>

                    <div>{{ website?.note }}</div>
                </v-card-text>

                <v-card-actions>
                    <updatebookmark />

                    <v-spacer></v-spacer>
                    <v-btn color="orange" text="Visit" :href="website?.url"></v-btn>
                </v-card-actions>
            </v-card>
        </v-col>

        <v-divider></v-divider>
        <v-col cols="12">
            <comments />
        </v-col>
    </v-row>
</template>

<script setup>
    import {
        ref,
        computed
    } from 'vue'
    import updatebookmark from '~/components/lists/update-bookmark.vue'
    import createListBtn from '~/components/partials/globals/createListBtn.vue'
    import comments from '~/components/partials/globals/comments.vue'

    const route = useRoute();

    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: website
    } = await useAsyncData('website', () => {
        return $directus.request($readItem('websites', route.params.id, {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })


    // Add this debug log
    watchEffect(() => {
        if (website.value) {
            console.log('Fetched website data:', website.value)
        }
    })


    useHead({
        title: computed(() => website?.value?.name || 'Bookmark Page')
    })

    definePageMeta({
        middleware: ['auth'],
    })
</script>