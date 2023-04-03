<template>
    <div class="newsfeed-channel">
        <v-row class="centralfeed">
            <v-col cols="8">
                <v-row>
                    <v-col cols="12">
                        <v-textarea title="What's happening?" variant="underlined"></v-textarea>
                        <v-row>
                            <v-col cols="4"><v-file-input prepend-icon="fas fa-image" accept="image/*"></v-file-input></v-col>
                            <v-col cols="4"><v-file-input prepend-icon="fas fa-video" accept="video/*"></v-file-input></v-col>
                            <v-col cols="4"><v-btn title="Post" color="info">Post</v-btn></v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12">
                        <v-card class="mx-auto">
                            <v-img class="align-end text-white" height="200"
                                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                                <v-card-title>Top 10 Australian beaches</v-card-title>
                            </v-img>

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
            </v-col>

            <v-col cols="4">

            </v-col>
        </v-row>
    </div>
</template>

<script>
    import Editor from '../../components/Editors/editor.vue'

    export default {
        components: {
            Editor
        },
        data: () => ({
            step: 1,
        }),

        computed: {
            currentTitle() {
                switch (this.step) {
                    case 1:
                        return 'Sign-up'
                    case 2:
                        return 'Create a password'
                    default:
                        return 'Account created'
                }
            },
        },
    }
</script>

<script setup>
    useHead({
        title: 'Social Feed',
    })
</script>