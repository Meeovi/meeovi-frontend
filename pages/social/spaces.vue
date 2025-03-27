<template>
    <div class="contentPage">
        <!---->
        <v-card elevation="0">
            <v-toolbar :title="spacebar?.name" color="primary">
                <v-dialog min-width="500">
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn v-bind="activatorProps" prepend-icon="fas fa-plus" :title="spaceBlocks?.content?.[1]?.name"
                        variant="flat">{{ spaceBlocks?.content?.[1]?.name }}
                        </v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <createspace />
                    </template>
                </v-dialog>
            </v-toolbar>

            <v-tabs v-model="tab" bg-color="primary">
                <div v-for="(menu, index) in spacebar?.menus" :key="index">
                    <v-tab v-if="menu?.active === 'Active'" :value="menu?.value">{{ menu?.name }}</v-tab>
                </div>
            </v-tabs>

            <v-card-text>
                <v-tabs-window v-model="tab">
                    <v-tabs-window-item :value="spacebar?.menus[0]?.value">
                        <v-row style="padding-top: 15px;">
                            <v-col cols="3" v-for="(spaces, index) in spaces" :key="index">
                                <space :space="spaces" />
                            </v-col>
                        </v-row>
                    </v-tabs-window-item>

                    <v-tabs-window-item :value="spacebar?.menus[1]?.value">
                        <v-row style="padding-top: 15px;">
                            <v-col cols="3" v-for="(spaces, index) in audiospaces" :key="index">
                                <space :space="spaces" />
                            </v-col>
                        </v-row>
                    </v-tabs-window-item>

                    <v-tabs-window-item :value="spacebar?.menus[2]?.value">
                        <v-row style="padding-top: 15px;">
                            <v-col cols="3" v-for="(spaces, index) in videospaces" :key="index">
                                <space :space="spaces" />
                            </v-col>
                        </v-row>
                    </v-tabs-window-item>

                    <v-tabs-window-item :value="spacebar?.menus[3]?.value">
                        <v-row style="padding-top: 15px;">
                            <v-col cols="3" v-for="(spaces, index) in myspaces" :key="index">
                                <space :space="spaces" />
                            </v-col>
                        </v-row>
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card-text>
        </v-card>

    </div>
</template>

<script setup>
    import space from '~/components/spaces/spaces.vue'
    import createspace from '~/components/spaces/add-space.vue'
    import { ref } from 'vue'
    import {
        useUserStore
    } from '~/stores/user'
    
    const userStore = useUserStore()

    const tab = ref(null);
    const {
        $directus,
        $readItems,
        $readItem
    } = useNuxtApp()

    const userDisplayName = computed(() => {
        return userStore.user?.name || userStore.user?.username || 'User'
    })

    const {
        data: spaces
    } = await useAsyncData('spaces', () => {
        return $directus.request($readItems('spaces', {
            fields: ['*', { '*': ['*'] }]
        }))
    })

    const {
        data: audiospaces
    } = await useAsyncData('audiospaces', () => {
        return $directus.request($readItems('spaces', {
            filter: {
                type: {
                    _eq: "Audio"
                }
            }
        }))
    })

    const {
        data: videospaces
    } = await useAsyncData('videospaces', () => {
        return $directus.request($readItems('spaces', {
            filter: {
                type: {
                    _eq: "Video"
                }
            }
        }))
    })

    const {
        data: myspaces
    } = await useAsyncData('myspaces', () => {
        return $directus.request($readItems('spaces', {
            filter: {
                creator: {
                    _eq: `${userDisplayName.value}`
                }
            }
        }))
    })

    const {
        data: spacebar
    } = await useAsyncData('spacebar', () => {
        return $directus.request($readItem('navigation', '31'))
    })

    const {
        data: spaceBlocks
    } = await useAsyncData('spaceBlocks', () => {
        return $directus.request($readItem('page_blocks', '9', {
            fields: ['*', 'media.directus_files_id.filename_disk', 'content.*'],
        }))
    })

    definePageMeta({
        middleware: ['auth'],
    })

    useHead({
        title: 'Spaces',
    })
</script>