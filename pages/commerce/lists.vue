<template>
    <div class="contentPage">
        <!--<profilebar />-->
        <v-card elevation="0">
            <v-toolbar title="Meeovi Lists" color="green">
                <listbtn />

                <v-divider vertical></v-divider>
                <createbookmark />
            </v-toolbar>
            <v-tabs v-model="tab" bg-color="green">
                <v-tab value="one">All Lists</v-tab>
                <v-tab value="two">Bookmarks</v-tab>
                <v-tab value="three">Starred</v-tab>
                <v-tab value="four">Archived</v-tab>
                <!---->
            </v-tabs>

            <v-card-text>
                <v-tabs-window v-model="tab">
                    <v-tabs-window-item value="one">
                        <v-row>
                            <v-col cols="3" v-for="lists in lists" :key="lists">
                                <list :list="lists" />
                            </v-col>
                        </v-row>
                    </v-tabs-window-item>

                    <v-tabs-window-item value="two">
                        <v-row>
                            <v-col cols="3" v-for="websites in websites" :key="websites">
                                <bookmark :website="websites" />
                            </v-col>
                        </v-row>
                    </v-tabs-window-item>

                    <v-tabs-window-item value="three">
                        <v-row>
                            <v-col cols="3" v-for="fave in listsfave" :key="fave">
                                <list :list="fave" />
                            </v-col>
                        </v-row>
                    </v-tabs-window-item>

                    <v-tabs-window-item value="four">
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
    //import profilebar from '~/components/menus/profilebar.vue'
    import {
        ref
    } from 'vue'
    import {
        useQuery
    } from '@vue/apollo-composable'
    import bookmark from '~/components/cms/related/bookmark.vue'
    import createbookmark from '~/components/crud/create/add-bookmark.vue'
    import list from '~/components/commerce/related/lists.vue'
    import listbtn from '~/components/partials/listBtn.vue'

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

    useHead({
        title: 'Meeovi Lists',
    })

    definePageMeta({
        middleware: ['authenticated'],
    })
</script>