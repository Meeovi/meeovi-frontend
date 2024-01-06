<template>
    <div class="livebar">
        <v-card height="75" variant="text">
            <v-tabs v-model="tab" center-active height="75">
                <v-tab>
                    <div class="text-center">
                        <v-dialog v-model="dialog" width="auto">
                            <template v-slot:activator="{ props }">
                                <v-avatar icon="fas fa-plus" style="background: steelblue; color: white;" size="50" v-bind="props"></v-avatar>
                            </template>
                            <v-card>
                                <video src=""></video>
                                <v-card-actions>
                                    <v-btn color="primary" block @click="dialog = false">Close</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </v-tab>
            </v-tabs>
        </v-card>
    </div>
</template>

<script>
    //import comments from '../../user/comments.vue'

    export default {
        data: () => ({
            tab: null,
            dialog: false,
            url: process.env.DIRECTUS_URL,
        }),
    }
</script>

<script setup>

</script>