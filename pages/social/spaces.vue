<template>
    <div class="contentPage">
        <!--<profilebar />-->
        <v-card elevation="0" style="min-height: 100vh !important;">
            <v-layout>
                <v-app-bar color="transparent" prominent elevation="0">
                    <!-- <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> Filters-->

                    <v-spacer></v-spacer>
                    <v-toolbar title="Spaces" color="transparent">
                        <v-dialog min-width="500">
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-btn v-bind="activatorProps" prepend-icon="fas fa-plus" title="Create a Space"
                                    variant="flat">
                                    Create a Space
                                </v-btn>
                            </template>

                            <template v-slot:default="{ isActive }">
                                <createspace />
                            </template>
                        </v-dialog>
                    </v-toolbar>

                    <v-spacer></v-spacer>
                </v-app-bar>

                <!--<v-navigation-drawer class="filtersPanel" v-model="drawer"
                    :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
                    <filters />
                </v-navigation-drawer>-->

                <v-main>
                    <v-tabs class="searchSection" center-active v-model="tab" bg-color="transparent">
                        <v-tab value="one">All Spaces</v-tab>
                        <v-tab value="two">Audio Spaces</v-tab>
                        <v-tab value="three">Video Spaces</v-tab>
                        <!---->
                    </v-tabs>

                    <v-card-text>
                        <v-tabs-window v-model="tab">
                            <v-tabs-window-item value="one">
                                <v-row>
                                    <v-col cols="3" v-for="(result, index) in result?.groups?.nodes" :key="index">
                                        <spaces :space="result" />
                                    </v-col>
                                </v-row>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="two">
                                <v-row>
                                    <v-col cols="3" v-for="(result, index) in result?.groups?.nodes" :key="index">
                                        <spaces :space="result" />
                                    </v-col>
                                </v-row>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="three">
                                <v-row>
                                    <v-col cols="3" v-for="(result, index) in result?.groups?.nodes" :key="index">
                                        <spaces :space="result" />
                                    </v-col>
                                </v-row>
                            </v-tabs-window-item>
                        </v-tabs-window>
                    </v-card-text>
                </v-main>
            </v-layout>
        </v-card>
    </div>
</template>

<script setup>
    import {
        ref,
    } from 'vue';
    import {
    useQuery
  } from '@vue/apollo-composable'
    import spaces from '~/components/cms/related/spaces.vue'
    import createspace from '~/components/crud/create/add-space.vue'
    import {groups} from '~/graphql/cms/queries/groups'
  

    const tab = ref(null);

    const {
    result
  } = useQuery(groups, null, {
    context: {
      clientName: 'secondary' // This will use the secondary endpoint
    }
  })

    useHead({
        title: 'Spaces',
    })
</script>