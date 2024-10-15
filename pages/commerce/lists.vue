<template>
    <div class="accountPage">
        <!--<profilebar />-->
        <v-card elevation="0">
            <v-toolbar title="Meeovi Lists" color="green">
                <createlist />
            </v-toolbar>
            <v-tabs v-model="tab" bg-color="green">
                <v-tab value="one">All Lists</v-tab>
                <!--<v-tab value="two">Starred</v-tab>-->
            </v-tabs>

            <v-card-text>
                <v-tabs-window v-model="tab">
                    <v-tabs-window-item value="one">
                        <v-row>
                            <v-col cols="3" v-for="lists in data?.customer?.wishlists">
                                <list :list="lists" />
                            </v-col>
                        </v-row>
                    </v-tabs-window-item>

                    <v-tabs-window-item value="two">
                        
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
    import list from '~/components/commerce/related/lists.vue'
    import createlist from '~/components/commerce/partials/createListBtn.vue'
    import wishlists from '~/graphql/commerce/queries/lists.js'

    const tab = ref(null);

    const {
        data
    } = useQuery(wishlists); /**/


    useHead({
        title: 'Meeovi Lists',
    })

    definePageMeta({
        layout: "nolive",
        middleware: ['authenticated'],
    })
</script>