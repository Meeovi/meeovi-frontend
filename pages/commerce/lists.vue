<template>
    <div class="contentPage">
        <v-card elevation="0">
            <v-toolbar :title="listbar?.name" color="green">
                <listbtn />

                <v-divider vertical></v-divider>
                <createbookmark />
            </v-toolbar>
            <v-tabs v-model="tab" bg-color="green">
                <div v-for="(menu, index) in listbar?.menus" :key="index">
                    <v-tab :value="menu?.value">{{ menu?.name }}</v-tab>
                </div>
            </v-tabs>

            <v-card-text>
                <v-tabs-window v-model="tab">
                    <v-tabs-window-item :value="listbar?.menus[0]?.value">
                        <v-row>
                            <v-col cols="3" v-for="lists in lists" :key="lists">
                                <list :list="lists" />
                            </v-col>
                        </v-row>
                    </v-tabs-window-item>

                    <v-tabs-window-item :value="listbar?.menus[0]?.value">
                        <v-row>
                            <v-col cols="3" v-for="websites in websites" :key="websites">
                                <bookmark :website="websites" />
                            </v-col>
                        </v-row>
                    </v-tabs-window-item>

                    <v-tabs-window-item :value="listbar?.menus[0]?.value">
                        <v-row>
                            <v-col cols="3" v-for="fave in listsfave" :key="fave">
                                <list :list="fave" />
                            </v-col>
                        </v-row>
                    </v-tabs-window-item>

                    <v-tabs-window-item :value="listbar?.menus[0]?.value">
                        <v-row>
                            <v-col cols="3" v-for="archive in listsarchive" :key="archive">
                                <list :list="archive" />
                            </v-col>
                        </v-row>
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card-text>
        </v-card>

    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    import {
        useQuery
    } from '@vue/apollo-composable'
    import bookmark from '~/components/lists/bookmark.vue'
    import createbookmark from '~/components/lists/add-bookmark.vue'
    import list from '~/components/lists/lists.vue'
    import listbtn from '~/components/partials/globals/listBtn.vue'

    const tab = ref(null);
    const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: lists
    } = await useAsyncData('lists', () => {
        return $directus.request($readItems('lists', {
            filter: {
                status: {
                    _eq: 'Public'
                }
            },
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: listsfave
    } = await useAsyncData('listsfave', () => {
        return $directus.request($readItems('lists', {
            filter: {
                favorite: {
                    _eq: 'yes'
                }
            },
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: listsarchive
    } = await useAsyncData('listsarchive', () => {
        return $directus.request($readItems('lists', {
            filter: {
                status: {
                    _eq: 'Archived'
                }
            },
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: websites
    } = await useAsyncData('websites', () => {
        return $directus.request($readItems('websites', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: listbar
    } = await useAsyncData('listbar', () => {
        return $directus.request($readItem('navigation', '46'))
    })

    useHead({
        title: 'Meeovi Lists',
    })

    definePageMeta({
        middleware: ['authenticated'],
    })
</script>