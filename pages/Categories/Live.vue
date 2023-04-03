<template>
    <div class="livefeed">
        <v-row>
            <v-col cols="4">
                <div class="text-center">
                    <v-dialog v-model="dialog" width="auto">
                        <template v-slot:activator="{ props }">
                            <v-avatar size="180" v-bind="props">
                                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
                            </v-avatar>
                        </template>

                        <v-card>
                            <video src=""></video>
                            <v-card-actions>
                                <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dialog: false,
            }
        },
    }
</script>

<script setup>
    useHead({
        title: ''
    })
</script>