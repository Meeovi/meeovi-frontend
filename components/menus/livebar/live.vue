<template>
    <div class="livebar">

        <v-card height="75" variant="text">
            <v-tabs v-model="tab" center-active height="75">
                <v-tab>
                    <div class="text-center">
                        <v-dialog v-model="createdialog" transition="dialog-bottom-transition">
                            <template v-slot:activator="{ props }">
                                <v-avatar icon="fas fa-plus"
                                    style="background: rgb(var(--v-theme-info))!important; color: white;" size="60"
                                    v-bind="props"></v-avatar>
                            </template>

                            <template v-slot:default="{ isActive }">
                                <v-card color="white">
                                    <addlive />

                                    <v-card-actions>
                                        <v-spacer></v-spacer>

                                        <v-btn text="Close" @click="isActive.value = false"></v-btn>
                                    </v-card-actions>
                                </v-card>
                            </template>
                        </v-dialog>
                    </div>
                </v-tab>

                <v-tab>
                    <div class="text-center">
                        <v-dialog v-model="dialog" transition="dialog-bottom-transition">
                            <template v-slot:activator="{ props }">
                                <div class="avatarBorder" v-for="(shorts, index) in short" :key="index">
                                    <v-avatar v-bind="props" size="60">
                                        <img :src="`${$directus.url}assets/${shorts?.thumbnail?.filename_disk}`" :alt="shorts?.name" cover />
                                    </v-avatar>
                                </div>
                            </template>

                            <v-card min-height="75%" min-width="75%">
                                <shortId :vibe="shortId" />

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
        result() {
            return {
                shortId: this.$route.params.id,
            }
        },
    }
</script>

<script setup>
    import comments from '~/components/partials/comments.vue'
    //import livebubbles from '../livebar/livebubbles.vue'
    import shortId from '~/pages/social/vibe/[id].vue'
    import addlive from '~/components/crud/create/add-live.vue'
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

    const {
        $directus,
        $readItems,
    } = useNuxtApp()

    const {
        data: short
    } = await useAsyncData('short', () => {
        return $directus.request($readItems('shorts', {
            fields: ['*', { '*': ['*'] }]
        }))
    })
</script>