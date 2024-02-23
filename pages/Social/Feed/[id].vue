<template>
    <div class="contentPage">
        <v-row class="centralfeed">
            <v-col cols="10">
                <v-row>
                    <v-col cols="12">
                        <v-card class="mx-auto">
                            <img class="align-end text-white" height="200"
                                :src="`${url}assets/${newsfeed?.image?.filename_disk}`" :alt="newsfeed?.id" cover />
                                <v-card-title>{{ newsfeed?.name }}</v-card-title>

                            <v-list lines="two">
                                <v-list-item :title="newsfeed?.owner" :prepend-avatar="newsfeed?.creator?.mediaItems?.edges?.node?.url">
                                </v-list-item>
                            </v-list>

                            <v-card-subtitle class="pt-4">
                                {{ newsfeed?.date_created }}
                            </v-card-subtitle>

                            <v-card-text class="pt-4" v-html="newsfeed?.status"></v-card-text>

                            <v-card-text class="pt-4" v-html="newsfeed?.post"></v-card-text>

                            <v-row class="align-center">
                                <v-col cols="3">
                                    <v-btn title="Repost" stacked="" prepend-icon="fas fa-repeat" variant="plain">Repost</v-btn>
                                </v-col>
                                <v-col cols="3">
                                    <v-btn title="Like This" stacked="" prepend-icon="fas fa-heart" variant="plain">Like This</v-btn>
                                </v-col>
                                <v-col cols="3">
                                    <v-btn title="Bookmark" stacked="" prepend-icon="fas fa-bookmark" variant="plain">Bookmark</v-btn>
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
    import comments from '../../../components/user/comments.vue'

    export default {
        components: {
            comments
        },
        data() {
            return {
                url: process.env.DIRECTUS_URL,
            }
        },
    }
</script>

<script setup>
const {
    getItemById
  } = useDirectusItems()

  const newsfeed = await getItemById({
    collection: "newsfeed",
    id: 1
  });

    useHead({
        title: 'this.params.name'
    })
</script>