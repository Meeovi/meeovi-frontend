<template>
    <div class="contentPage">
        <profilebar />
        <v-row class="centralfeed">
            <v-col cols="10">
                <v-row>
                    <v-col cols="12">
                        <v-card class="mx-auto">
                            <img class="align-end text-white" height="200"
                                :src="`${url}assets/${newsfeed?.image?.filename_disk}`" :alt="newsfeed?.id" cover />
                                <v-card-title>{{ newsfeed?.name }}</v-card-title>

                            <v-list lines="two">
                                <v-list-item :title="newsfeed?.owner" :prepend-avatar="newsfeed?.customers?.customers_id?.image?.filename_disk">
                                </v-list-item>
                            </v-list>

                            <v-card-subtitle class="pt-4">
                                {{ newsfeed?.date_created }}
                            </v-card-subtitle>

                            <v-card-text class="pt-4" v-html="newsfeed?.status"></v-card-text>

                            <v-card-text class="pt-4" v-html="newsfeed?.post"></v-card-text>

                            <v-row class="align-center">
                                <v-col cols="3">
                                    <repost />
                                </v-col>
                                <v-col cols="3">
                                    <reactions />
                                </v-col>
                                <v-col cols="3">
                                    <bookmark />
                                </v-col>
                                <v-col cols="3">
                                    <share />
                                </v-col>
                            </v-row>
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
    import profilebar from '../../../components/menus/profilebar'
    import comments from '../../../composables/social/comments.vue'
    import repost from '../../../composables/social/repost.vue'
    import reactions from '../../../composables/social/reactions.vue'
    import bookmark from '../../../composables/social/bookmark.vue'
    import share from '../../../composables/social/share.vue'

    export default {
        components: {
            profilebar,
            comments,
            repost,
            reactions,
            bookmark,
            share
        },
        data() {
            return {
                url: process.env.DIRECTUS_URL,
                newsfeed: []
            }
        },
        methods: {
            async repost(newsfeed) {
            // Mutation to repost content
            try {
                await this.$apollo.mutate({
                mutation: gql`
                    mutation Repost($postId: ID!) {
                    repost(postId: $postId) {
                        id
                        name
                        post
                    }
                    }
                `,
                variables: {
                    postId: newsfeed.id
                }
                })
                console.log('Reposted successfully!')
            } catch (error) {
                console.error('Error reposting:', error)
            }
            }
        }
    }
</script>

<script setup>
const route = useRoute()
const {
    getItemById
  } = useDirectusItems()

  const newsfeed = await getItemById({
    collection: "newsfeed",
    id: 1
  });

    useHead({
        title: route.params.id
    })
</script>