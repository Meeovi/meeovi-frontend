<template>
    <div class="contentPage">
        <!--<profilebar />-->
        <v-row>
            <v-col cols="12">
                <v-card title="Meeovi Social Feed" color="green">
                    <v-sheet class="mx-auto" elevation="0" color="transparent">
                        <h5 style="padding: 15px;">Your Top Posts</h5>
                        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                            <v-slide-group-item v-for="members in data?.members?.nodes" :key="members"
                                v-slot="{ isSelected, toggle, selectedClass }">
                                <v-col cols="4" v-for="newsfeed in members?.activities?.nodes" :key="newsfeed">
                                    <v-card :class="['ma-4', selectedClass]" color="white" class="mx-auto" elevated="0" min-height="250px"
                                        @click="toggle">
                                        <v-card-title v-html="newsfeed?.title"></v-card-title>

                                        <v-list lines="one">
                                            <v-list-item :title="newsfeed?.creator?.username"
                                                :subtitle="newsfeed?.capabilities"
                                                :prepend-avatar="newsfeed?.creator?.avatar?.url">
                                            </v-list-item>
                                        </v-list>

                                        <v-card-text>
                                            <div>
                                                <p v-html="newsfeed?.content"></p>
                                            </div>
                                        </v-card-text>

                                        <v-card-subtitle><em>Posted:
                                                {{ new Date(newsfeed?.date).toLocaleDateString() }}</em>
                                        </v-card-subtitle>

                                        <v-card-actions>
                                            <v-row>
                                                <v-col cols="3">
                                                    <v-btn title="Comments" prepend-icon="fas fa-comment"
                                                        variant="plain" :href="`/social/feed/${newsfeed.id}`">()</v-btn>
                                                </v-col>
                                                <v-col cols="3">
                                                    <v-btn title="Repost" prepend-icon="fas fa-repeat" variant="plain"
                                                        @click="repost()">()
                                                    </v-btn>
                                                </v-col>
                                                <v-col cols="3">
                                                    <v-btn title="Like This" prepend-icon="fas fa-heart" variant="plain"
                                                        @click="addLike">()
                                                    </v-btn>
                                                </v-col>
                                                <v-col cols="3">
                                                    <v-btn title="Bookmark" prepend-icon="fas fa-bookmark"
                                                        variant="plain" @click="addBookmark">()
                                                    </v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                            </v-slide-group-item>
                        </v-slide-group>
                    </v-sheet>
                </v-card>
            </v-col>

            <div v-for="members in data?.members?.nodes" :key="members" style="padding-top: 10px;">
                <v-row>
                    <v-col cols="4" v-for="newsfeed in members?.activities?.nodes" :key="newsfeed">
                        <v-card class="mx-auto" elevated="0">
                            <v-card-title v-html="newsfeed?.title"></v-card-title>

                            <v-list lines="one">
                                <v-list-item :title="newsfeed?.creator?.username" :subtitle="newsfeed?.capabilities"
                                    :prepend-avatar="newsfeed?.creator?.avatar?.url">
                                </v-list-item>
                            </v-list>

                            <v-card-text>
                                <div>
                                    <p v-html="newsfeed?.content"></p>
                                </div>
                            </v-card-text>

                            <v-card-subtitle><em>Posted: {{ new Date(newsfeed?.date).toLocaleDateString() }}</em>
                            </v-card-subtitle>

                            <v-card-actions>
                                <v-row>
                                    <v-col cols="3">
                                        <v-btn title="Comments" prepend-icon="fas fa-comment" variant="plain"
                                            :href="`/social/feed/${newsfeed.id}`">()</v-btn>
                                    </v-col>
                                    <v-col cols="3">
                                        <v-btn title="Repost" prepend-icon="fas fa-repeat" variant="plain"
                                            @click="repost()">()
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="3">
                                        <v-btn title="Like This" prepend-icon="fas fa-heart" variant="plain"
                                            @click="addLike">()
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="3">
                                        <v-btn title="Bookmark" prepend-icon="fas fa-bookmark" variant="plain"
                                            @click="addBookmark">()
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </v-row>
    </div>
</template>

<script>
    import profilebar from '../../components/menus/profilebar.vue'

    export default {
        components: {
            profilebar,
        },
        data() {
            return {
                model: null,
                url: process.env.DIRECTUS_URL,
            }
        },
    }
</script>

<script setup>
import gql from 'graphql-tag'
import { useAsyncQuery } from '@vue/apollo-composable'

const { data } = useAsyncQuery(gql`
query NewQuery {
  members {
    nodes {
      activities(where: {order: DESC, type: ACTIVITY_UPDATE, component: ACTIVITY}) {
        nodes {
          content
          id
          date
          status
          title
          type
        }
      }
    }
  }
}`
)

  /*  const {
        getItems
      } = useDirectusItems()

      const newsfeed = await getItems({
        collection: "newsfeed"
      });*/

    useHead({
        title: 'Social Feed',
    })

    definePageMeta({
        //middleware: ['auth-logged-in'],
    })
</script>