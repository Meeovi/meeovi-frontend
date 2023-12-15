<template>
    <div class="text-center feedButton">
        <v-dialog v-model="dialog" max-height="600" max-width="600">
            <template v-slot:activator="{ props }">
                <v-btn icon="fas fa-plus" class="postbtn" title="Post to Social Feed" v-bind="props">
                </v-btn>
            </template>

            <postform />
        </v-dialog>
    </div>
</template>

<script>
import postform from './user/postform.vue'

    export default {
        components: { postform },
        data() {
            return {
                dialog: false,
            }
        },
    }
</script>

<script setup>

</script>