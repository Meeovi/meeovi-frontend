<template>
        <div class="contentPage">
        <v-row class="centralfeed">
            <v-col cols="12">
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
                        <comments />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import comments from '../../../components/user/comments.vue'

export default {
    components: { comments }
}
</script>

<script setup>
    useHead({
        title: ''
    })
</script>