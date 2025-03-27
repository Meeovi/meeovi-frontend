<template>
    <div class="contentPage">
        <v-row>
            <v-col cols="12">
                <v-card color="#b02564">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="text-h5">
                                {{ station?.name }} <share style="display: inline-block; font-size: 15px;" />
                            </v-card-title>

                            <v-card-subtitle>Format: {{ station?.format }}</v-card-subtitle>

                            <v-card-subtitle>Categories:
                                <div v-for="category in station?.categories" :key="category">
                                    {{ category?.categories_id?.name }}
                                </div>
                            </v-card-subtitle>

                            <v-card-subtitle v-html="station?.description"></v-card-subtitle>
                        </div>

                        <v-avatar class="ma-3" rounded="0" size="125">
                            <NuxtImg :src="`${$directus.url}assets/${station?.image?.filename_disk}`" />
                        </v-avatar>
                    </div>

                    <audio :src="`${$directus.url}assets/${station?.file?.filename_disk}`" controls loop class="radioStation"></audio>
                </v-card>
            </v-col>

            <v-col cols="12">
                <relatedstations />
            </v-col>

            <v-col cols="12">
                <comments />
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
    import {
        ref,
        computed
    } from 'vue'
    import comments from '~/components/partials/globals/comments.vue'
    import relatedstations from '@/components/product/relatedstations.vue'
    import share from '~/components/partials/globals/share.vue'

    const route = useRoute()

    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: station
    } = await useAsyncData('station', () => {
        return $directus.request($readItem('radios', route.params.id, {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    useHead({
        title: computed(() => station?.value?.name || 'Station Page'),
    });
</script>