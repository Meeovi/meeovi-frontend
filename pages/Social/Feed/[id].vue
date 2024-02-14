<template>
    <div class="contentPage">
        <v-row class="centralfeed">
            <v-col cols="12">
                <v-row>
                    <v-col cols="12">
                        <v-card class="mx-auto">
                            <v-img class="align-end text-white" height="200"
                                :src="`${newsfeed_by_id?.image?.filename_disk}`" :alt="newsfeed_by_id?.id" cover>
                                <v-card-title>{{ newsfeed?.name }}</v-card-title>
                            </v-img>

                            <v-list lines="two">
                                <v-list-item :title="newsfeed?.owner" :subtitle="newsfeed?.status"
                                    :prepend-avatar="newsfeed?.creator?.mediaItems?.edges?.node?.url">
                                </v-list-item>
                            </v-list>

                            <v-card-subtitle class="pt-4">
                                {{ newsfeed_by_id?.user_created }}
                            </v-card-subtitle>

                            <v-card-text class="pt-4">
                                {{ newsfeed_by_id?.post }}
                            </v-card-text>

                            <v-row>
                                <v-col cols="3"> Reposts</v-col>
                                <v-col cols="3"> Likes</v-col>
                                <v-col cols="3"> Bookmarks</v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="3">
                                    <v-btn title="Repost" prepend-icon="fas fa-repeat" variant="plain"></v-btn>
                                </v-col>
                                <v-col cols="3">
                                    <v-btn title="Like This" prepend-icon="fas fa-heart" variant="plain"></v-btn>
                                </v-col>
                                <v-col cols="3">
                                    <v-btn title="Bookmark" prepend-icon="fas fa-bookmark" variant="plain"></v-btn>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col cols="12">
                        <livecomments />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import livecomments from '../../../components/user/livecomments.vue'

    export default {
        components: {
            livecomments
        }
    }
</script>

<script setup>
const query = gql `
query ($id: ID!) {
  newsfeed_by_id (id: $id) {
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
        title: ''
    })
</script>