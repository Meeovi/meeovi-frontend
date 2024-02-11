<template>
    <div class="livebar">
        <v-card height="75" variant="text">
            <v-tabs v-model="tab" center-active height="75">
                <v-tab>
                    <div class="text-center">
                        <v-dialog v-model="createdialog" width="auto">
                            <template v-slot:activator="{ props }">
                                <v-avatar icon="fas fa-plus" style="background: steelblue; color: white;" size="60"
                                    v-bind="props"></v-avatar>
                            </template>
                            <v-card>
                                <video class="createVideo" src="" autoplay></video>
                                <v-card-actions>
                                    <v-btn color="primary" block @click="createdialog = false">Close Dialog</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </v-tab>

                <v-tab>
                    <div class="text-center">
                        <v-dialog v-model="dialog" width="auto">
                            <template v-slot:activator="{ props }">
                                <div class="avatarBorder">
                                    <v-avatar v-bind="props" size="60">
                                        <img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" alt="Live"
                                            cover />
                                    </v-avatar>
                                </div>
                            </template>

                            <v-card min-height="500" min-width="500">
                                <v-row>
                                    <v-col cols="6"><video class="liveVideo" src="" title="" autoplay controls></video></v-col>
                                    <v-col cols="6">
                                        <livecomments />
                                    </v-col>
                                </v-row>

                                <v-card-actions>
                                    <v-btn color="primary" block @click="dialog = false">Close</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </v-tab>
            </v-tabs>
        </v-card>
        <livebubbles />
    </div>
</template>

<script>
    import livecomments from '../../user/livecomments.vue'

    export default {
        components: {
            livecomments
        },
        data: () => ({
            tab: null,
            dialog: false,
            createdialog: false,
        }),
    }
</script>

<script setup>

</script>