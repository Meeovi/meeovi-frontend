<template>
    <div class="contentPage">
        <v-row>
            <v-col cols="12">
                <v-card color="#1F7087">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="text-h5">
                                {{ chart?.name }}
                            </v-card-title>

                            <v-card-subtitle>{{ chart?.description }}</v-card-subtitle>
                        </div>

                        <v-avatar class="ma-3" rounded="0" size="125">
                            <v-img :src="`${$directus.url}assets/${chart?.image?.filename_disk}`"></v-img>
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>

            <v-col cols="12">
                <v-card elevation="0">
                    <v-tabs v-model="tab" bg-color="#1F7087">
                        <div v-for="(menu, index) in chartbar?.menus" :key="index">
                            <v-tab :value="menu?.value">{{ menu?.name }}</v-tab>
                        </div>
                    </v-tabs>

                    <v-card-text>
                        <v-tabs-window v-model="tab">
                            <v-tabs-window-item value="one">
                                <v-table fixed-header>
                                    <thead>
                                        <tr>
                                            <th class="text-left">
                                                Name
                                            </th>
                                            <th class="text-left">
                                                This Week
                                            </th>
                                            <th class="text-left">
                                                Last Week
                                            </th>
                                            <th class="text-left">
                                                Peak Position
                                            </th>
                                            <th class="text-left">
                                                Award
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in desserts" :key="item.name">
                                            <td>{{ item.name }}</td>
                                            <td>{{ item.calories }}</td>
                                        </tr>
                                    </tbody>
                                </v-table>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="two">
                                <comments />
                            </v-tabs-window-item>

                            <v-tabs-window-item value="three">
                                Three
                            </v-tabs-window-item>
                        </v-tabs-window>
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
    import comments from '~/components/partials/comments.vue'

    const tab = ref(false)
    const route = useRoute();

    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: chart
    } = await useAsyncData('chart', () => {
        return $directus.request($readItem('musicchart', route.params.id, {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: chartbar
    } = await useAsyncData('chartbar', () => {
        return $directus.request($readItem('navigation', '35'))
    })

    useHead({
        title: computed(() => chart?.value?.name || 'Chart Page')
    })
</script>