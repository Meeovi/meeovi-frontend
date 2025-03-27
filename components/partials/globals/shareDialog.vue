<template>
    <div>
        <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn class="reactionButton" variant="text" v-bind="activatorProps" icon="fas fa-share-nodes" size="medium" title="Share This"></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card title="Share this content!">
                    <v-card-text>
                        <share />
                    </v-card-text>

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
    import {
        ref
    } from 'vue'
    import share from '~/components/partials/globals/share.vue'

    const dialog = ref(null)
</script>