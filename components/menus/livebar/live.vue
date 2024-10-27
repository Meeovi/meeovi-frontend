<template>
    <div class="livebar">
        <v-card height="75" variant="text">
            <v-tabs v-model="tab" center-active height="75">
                <v-tab>
                    <div class="text-center">
                        <v-dialog v-model="createdialog" transition="dialog-bottom-transition" fullscreen>
                            <template v-slot:activator="{ props }">
                                <v-avatar icon="fas fa-plus" style="background: rgb(var(--v-theme-info))!important; color: white;" size="60"
                                    v-bind="props"></v-avatar>
                            </template>
                            <v-card>
                                <video src="" controls></video>
                                <v-card-actions>
                                    <v-btn color="info" block @click="createdialog = false">Close</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </v-tab>

                <v-tab>
                    <div class="text-center">
                        <v-dialog v-model="dialog" width="auto" transition="dialog-bottom-transition" fullscreen>
                            <template v-slot:activator="{ props }">
                                <div class="avatarBorder">
                                    <v-avatar v-bind="props" size="60">
                                        <img src="~/assets/images/face6.jpg" alt="video?.title" cover />
                                    </v-avatar>
                                </div>
                            </template>

                            <v-card min-height="75%" min-width="75%">
                                <v-row>
                                    <v-col cols="6"><video class="liveVideo" src="//vjs.zencdn.net/v/oceans.mp4" autoplay controls></video></v-col>
                                    <v-col cols="6">
                                      <p>{{ videoid?.video?.title }}</p>
                                        <p>{{ videoid?.video?.content }}</p>
                                        <v-divider></v-divider>
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
        <!--<livebubbles />-->
    </div>
</template>

<script>
    export default {
        data: () => ({
            videoOptions: {
                autoplay: true,
                controls: true,
            }
        }),
    }
</script>

<script setup>
    import comments from '~/components/partials/comments.vue'
    //import livebubbles from '../livebar/livebubbles.vue'
    import video from '~/components/media/live/livePlayer'
    import {
        ref
    } from 'vue';
    import {
        useRoute,
        useRouter
    } from 'vue-router';

    const tab = ref(null);
    const createdialog = ref(false);
    const dialog = ref(false);
    const notifications = ref(false);
    const sound = ref(true);
    const widgets = ref(false)
    const route = useRoute();
</script>