<template>
    <div>
        <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn v-bind="activatorProps" color="surface-variant" prepend-icon="fas fa-plus" text="Create A List" variant="flat"></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card>
                    <createlist />

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn text="Close" @click="isActive.value = false"></v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    </div>
</template>

<script setup>
    import createlist from '../create/commerce/createlist.vue'
    import { ref } from 'vue'

    
</script>