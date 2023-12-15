<template>
    <div>
        <profilebar />
        <v-row class="centralfeed">
            <v-col cols="3"></v-col>
            <v-col cols="5">
                <postform />
                <v-col cols="12" v-for="newsfeed in data.newsfeed" :key="newsfeed">
                    <v-card class="mx-auto">
                        <img class="align-end text-white" height="350"
                            :src="`${url}assets/${newsfeed.image.filesdisk}`" :alt="newsfeed.name" cover />
                            <v-card-title>{{ newsfeed.name }}</v-card-title>

                        <v-list lines="two">
                            <v-list-item title="Paul Bot" :subtitle="newsfeed.date_created"
                                prepend-avatar="https://cdn.vuetifyjs.com/images/john.png">
                            </v-list-item>
                        </v-list>

                        <v-card-text>
                            <div>{{ newsfeed.date_updated }}</div>

                            <div>{{ newsfeed.post }}</div>
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
            </v-col>
            <v-col cols="4">

            </v-col>
        </v-row>
    </div>
</template>

<script>
    import Editor from '../../components/Editors/editor.vue'
    import profilebar from '../../components/Menus/profilebar.vue'
    import postform from '../../components/user/postform.vue'

    export default {
        components: {
            Editor,
            profilebar,
            postform
        },
        data() {
            return {
                url: process.env.DIRECTUS_URL,
            }
        },

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
import query from '../../apollo/Queries/newsfeed.js'

const { data } = await useAsyncQuery(query)

    useHead({
        title: 'Social Feed',
    })
</script>