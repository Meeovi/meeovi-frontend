<template>
    <div>
        <eatsbar />
        <v-row class="contentSection">
            <v-col cols="12">
                <v-card class="mx-auto" height="620" width="350">
                    <v-row>
                        <v-col cols="8"><v-toolbar density="compact" title="Content Creator Name" color="transparent"></v-toolbar></v-col>
                        <v-col class="feedFollowBtn" cols="4"><v-btn variant="text" title="Follow" href="" size="medium">Follow</v-btn></v-col>
                    </v-row>
                    <video class="align-end text-white" height="400" controls src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></video>

                    <v-card-subtitle class="pt-4">
                        Number 10
                    </v-card-subtitle>

                    <v-card-text>
                        <div>Whitehaven Beach</div>

                        <div>Whitsunday Island, Whitsunday Islands</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-row>
                            <v-col cols="3">
                                <v-btn title="Comments" prepend-icon="fas fa-comment" variant="plain"
                                    href="/social/feed/id.vue">()</v-btn>
                            </v-col>
                            <v-col cols="3">
                                <v-btn title="Repost" prepend-icon="fas fa-repeat" variant="plain">()</v-btn>
                            </v-col>
                            <v-col cols="3">
                                <v-btn title="Like This" prepend-icon="fas fa-heart" variant="plain">()</v-btn>
                            </v-col>
                            <v-col cols="3">
                                <v-btn title="Bookmark" prepend-icon="fas fa-bookmark" variant="plain">()
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import eatsbar from '../../../components/Menus/eatsbar.vue'

    export default {
        components: { eatsbar }
    }
</script>

<script setup>
    useHead({
        title: 'Meeovi Eats'
    })
</script>