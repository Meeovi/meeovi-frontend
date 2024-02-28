<template>
    <div class="text-center feedButton">
        <v-dialog v-model="dialog" max-height="600" max-width="600">
            <template v-slot:activator="{ props }">
                <v-btn icon="fas fa-plus" class="postbtn" title="Post to Social Feed" v-bind="props">
                </v-btn>
            </template>

            <createpost />
        </v-dialog>
    </div>
</template>

<script>
import createpost from './create/social/createpost.vue'

    export default {
        components: { createpost },
        data() {
            return {
                dialog: false,
            }
        },
    }
</script>

<script setup>

</script>