<template>
    <div id="minSearch">
        <div class="text-center">
            <v-dialog v-model="dialog" width="auto">
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" variant="text" icon="fas fa-search"></v-btn>
                </template>

                <v-card min-height="100" min-width="500">
                    <v-text-field density="compact" variant="outlined" label="Search Meeovi"
                        append-inner-icon="fas fa-search" single-line hide-details>
                    </v-text-field>
                    <v-card-actions>
                        <v-btn color="primary" block @click="dialog = false">Close Search</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script setup>
   import {
        ref
    } from 'vue'
    import { useRuntimeConfig } from '#imports';

    const config = useRuntimeConfig();

    const dialog = ref(false);
</script>