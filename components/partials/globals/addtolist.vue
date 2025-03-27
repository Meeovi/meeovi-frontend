<template>
    <div class="text-center">
        <v-dialog v-model="dialog" max-width="600">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn prepend-icon="fas fa-plus" text="Add to List" color="primary" size="large"
                    v-bind="activatorProps"></v-btn>
            </template>

            <v-card>
                <v-tabs v-model="tab" bg-color="primary">
                    <v-tab value="one">Add to List</v-tab>
                    <v-tab value="two">Create List</v-tab>
                </v-tabs>

                <v-card-text>
                    <v-tabs-window v-model="tab">
                        <v-tabs-window-item value="one">
                            <v-card prepend-icon="fas fa-plus" title="Add to List">
                                <v-card-text>
                                    <v-row dense>
                                        <v-col cols="12" sm="6">
                                            <v-autocomplete v-for="(lists, index) in result?.lists?.nodes" :key="index"
                                                :items="[`${lists?.lists?.name}`]" label="Choose A List"
                                                auto-select-first multiple></v-autocomplete>
                                        </v-col>
                                    </v-row>

                                    <small class="text-caption text-medium-emphasis">*indicates required field</small>
                                </v-card-text>

                                <v-divider></v-divider>

                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>

                                    <v-btn color="primary" text="Save" variant="tonal" @click="dialog = false"></v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-tabs-window-item>

                        <v-tabs-window-item value="two">
                            <createlist />
                        </v-tabs-window-item>
                    </v-tabs-window>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
    import {
        ref,
    } from 'vue';
    import {
        useQuery
    } from '@vue/apollo-composable'
    import createlist from '~/components/lists/add-list.vue'
    import lists from '~/graphql/commerce/queries/lists'

    const dialog = ref(false)
    const tab = ref(null)
    const {
        result
    } = useQuery(lists);
</script>