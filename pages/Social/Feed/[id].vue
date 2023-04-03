<template>
        <div class="newsfeed-channel">
        <v-row class="centralfeed">
            <v-col cols="8">
                <v-row>
                    <v-col cols="12">
                        <v-card class="mx-auto">
                            <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                                <v-card-title>Top 10 Australian beaches</v-card-title>
                            </v-img>

                            <v-card-subtitle class="pt-4">
                                Number 10 -  Views
                            </v-card-subtitle>

                            <v-row>
                                <v-col cols="3"> Comments</v-col>
                                <v-col cols="3"> Reposts</v-col>
                                <v-col cols="3"> Likes</v-col>
                                <v-col cols="3"> Bookmarks</v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="3"><v-btn title="Comments" prepend-icon="fas fa-comment" variant="plain"></v-btn></v-col>
                                <v-col cols="3"><v-btn title="Repost" prepend-icon="fas fa-repeat" variant="plain"></v-btn></v-col>
                                <v-col cols="3"><v-btn title="Like This" prepend-icon="fas fa-heart" variant="plain"></v-btn></v-col>
                                <v-col cols="3"><v-btn title="Bookmark" prepend-icon="fas fa-bookmark" variant="plain"></v-btn></v-col>
                            </v-row>

                            <v-card-text>
                                <div>Whitehaven Beach</div>

                                <div>Whitsunday Island, Whitsunday Islands</div>
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col cols="12">
                        <v-textarea title="Post your reply" variant="underlined"></v-textarea>
                        <v-row>
                            <v-col cols="4"><v-file-input prepend-icon="fas fa-image" accept="image/*"></v-file-input></v-col>
                            <v-col cols="4"><v-file-input prepend-icon="fas fa-video" accept="video/*"></v-file-input></v-col>
                            <v-col cols="4"><v-btn title="Reply" color="info">Reply</v-btn></v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="12">
                        <v-card class="mx-auto">
                            <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
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
                                <v-btn color="orange">
                                    Share ()
                                </v-btn>

                                <v-btn color="orange" href="/social/feed/id.vue">
                                    Comments ()
                                </v-btn>
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
export default {
    
}
</script>

<script setup>
    useHead({
        title: ''
    })
</script>