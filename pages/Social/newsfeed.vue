<template>
    <div class="contentPage">
        <profilebar />
        <v-row>
            <v-col cols="12">
                <v-toolbar color="orange" title="Your Social Feed" subtitle="Posts of people you follow."></v-toolbar>
                <v-col cols="3" v-for="(newsfeed, index) in data?.activies?.edges" :key="index">
                    <v-card class="mx-auto" :href="`/social/feed/${newsfeed.id}`">
                        <img class="align-end text-white" height="350"
                            :src="newsfeed?.image.filesdisk" :alt="newsfeed?.title" cover />
                            <v-card-title>{{ newsfeed?.title }}</v-card-title>

                        <v-list lines="two">
                            <v-list-item :title="newsfeed?.creator?.username" :subtitle="newsfeed?.status"
                                :prepend-avatar="newsfeed?.creator?.mediaItems?.edges?.node?.url">
                            </v-list-item>
                        </v-list>

                        <v-card-text>
                            <div>{{ newsfeed?.type }}</div>

                            <div>{{ newsfeed?.content }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-row>
                                <v-col cols="3">
                                    <v-btn title="Comments" prepend-icon="fas fa-comment" variant="plain">()</v-btn>
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
  activities {
    edges {
      node {
        id
        title
        type
        content
        dateGmt
        isFavorited
        status
        component
        creator {
          username
          mediaItems {
            edges {
              node {
                uri
              }
            }
          }
        }
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