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
                            <v-card min-height="500" min-width="500">
                                <video-player class="createVideo" src="" />
                                <v-card-actions>
                                    <v-btn color="primary" block @click="createdialog = false">Close</v-btn>
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

                            <v-card min-height="75%" min-width="75%">
                                <v-row>
                                    <v-col cols="6"><video class="liveVideo" src="" title="" autoplay controls></video></v-col>
                                    <v-col cols="6">
                                        <comments />
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
    import comments from '../../social/comments.vue'
    import VideoPlayer from '../../partials/videojs'

    export default {
        components: {
            comments,
            VideoPlayer
        },
        data: () => ({
            tab: null,
            dialog: false,
            createdialog: false,
            videoOptions: {
                autoplay: true,
                controls: true,
            }
        }),
    }
</script>

<script setup>

</script>