<template>
    <div class="contentPage">
        <profilebar />
        <v-row>
            <v-col cols="12">
                <v-toolbar color="orange" title="Your Social Feed" subtitle="Posts of people you follow."></v-toolbar>
                <v-col cols="3" v-for="(newsfeed, index) in data?.newsfeed" :key="index">
                    <v-card class="mx-auto" elevated="0">
                        <img class="align-end text-white" height="350"
                            :src="`${url}assets/${newsfeed?.image?.filename_disk}`" :alt="newsfeed?.name" cover />
                            <v-card-title>{{ newsfeed?.name }}</v-card-title>

                        <v-list lines="two">
                            <v-list-item :title="newsfeed?.owner" :subtitle="newsfeed?.status"
                                :prepend-avatar="newsfeed?.creator?.mediaItems?.edges?.node?.url">
                            </v-list-item>
                        </v-list>

                        <v-card-text>
                            <div>{{ newsfeed?.post }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-row>
                                <v-col cols="3">
                                    <v-btn title="Comments" prepend-icon="fas fa-comment" variant="plain" :href="`/social/feed/${newsfeed.id}`">()</v-btn>
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
        </v-row>
    </div>
</template>

<script>
    import Editor from '../../components/Editors/editor.vue'
    import profilebar from '../../components/Menus/profilebar.vue'

    export default {
        components: {
            Editor,
            profilebar,
        },
        data() {
            return {
                url: process.env.DIRECTUS_URL,
            }
        },
    }
</script>

<script setup>
const query = gql `
query {
  newsfeed {
    id
    name
    post
    owner
    status
    user_updated
    user_created
    media {
      directus_files_id {
        filename_disk
      }
    }
    image {
      filename_disk
    }
    reactions {
      reactions_id {
        id
        reaction_type
      }
    }
  }
}`

  const {
    data
  } = useAsyncQuery(query);

    useHead({
        title: 'Social Feed',
    })
</script>