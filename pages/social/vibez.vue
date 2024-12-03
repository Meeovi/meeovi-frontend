<template>
    <div class="contentPage">
        <!--<profilebar />-->
        <v-card elevation="0">
            <v-toolbar :title="vibebar?.name" color="primary">
                <v-dialog>
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn v-bind="activatorProps" prepend-icon="fas fa-plus" title="Create a Vibe"
                            variant="flat">Create a Vibe
                        </v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card color="white">
                            <addlive />

                            <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn text="Close" @click="isActive.value = false"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
            </v-toolbar>

            <v-tabs v-model="tab" bg-color="primary">
                <div v-for="(menu, index) in vibebar?.menus" :key="index">
                    <v-tab :value="menu?.value">{{ menu?.name }}</v-tab>
                </div>
            </v-tabs>

            <v-card-text>
                <v-tabs-window v-model="tab">
                    <v-tabs-window-item value="one">
                        <v-row style="padding-top: 15px;">
                            <v-col cols="4" v-for="(shorts, index) in vibez" :key="index">
                                <shorts :short="shorts" />
                            </v-col>
                        </v-row>
                    </v-tabs-window-item>

                    <v-tabs-window-item value="two">
                        <v-row style="padding-top: 15px;">
                            <v-col cols="4" v-for="(shorts, index) in livevibez" :key="index">
                                <shorts :short="shorts" />
                            </v-col>
                        </v-row>
                    </v-tabs-window-item>

                    <v-tabs-window-item value="three">
                        <v-row style="padding-top: 15px;">
                            <v-col cols="4" v-for="(shorts, index) in videoshorts" :key="index">
                                <shorts :short="shorts" />
                            </v-col>
                        </v-row>
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card-text>
        </v-card>

    </div>
</template>

<script setup>
    import shorts from '~/components/cms/related/shorts.vue'
    import addlive from '~/components/crud/create/add-live.vue'
    import {
        ref
    } from 'vue'

    const tab = ref(null);
    const {
        $directus,
        $readItems,
        $readItem
    } = useNuxtApp()

    const {
        data: vibez
    } = await useAsyncData('vibez', () => {
        return $directus.request($readItems('shorts', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: livevibez
    } = await useAsyncData('livevibez', () => {
        return $directus.request($readItems('shorts', {
            filter: {
                type: {
                    _eq: "Live"
                }
            },
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: videoshorts
    } = await useAsyncData('videoshorts', () => {
        return $directus.request($readItems('shorts', {
            filter: {
                creator: {
                    _eq: `${userDisplayName.value}`
                }
            },
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: vibebar
    } = await useAsyncData('vibebar', () => {
        return $directus.request($readItem('navigation', '30'))
    })

    useHead({
        title: 'Vibez',
    })

    definePageMeta({
        middleware: ['authenticated'],
    })
</script>