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
                                            <v-autocomplete :items="['Skiing']" label="Choose A List" auto-select-first
                                                multiple></v-autocomplete>
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
                            <v-toolbar title="Create A List"></v-toolbar>
                            <v-form>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field label="List Name" required></v-text-field>
                                        </v-col>
                                        <v-col cols="6">
                                            <v-combobox label="Type"
                                                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']">
                                            </v-combobox>
                                        </v-col>
                                        <v-col cols="6">
                                            <v-file-input clearable label="List Image"></v-file-input>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-textarea label="List Description"></v-textarea>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-form>
                        </v-tabs-window-item>
                    </v-tabs-window>
                </v-card-text>
            </v-card>

        </v-dialog>
    </div>
</template>

<script>
    export default {
        data: () => ({
            dialog: false,
            tab: null,
        }),
    }
</script>

<script setup>

</script>