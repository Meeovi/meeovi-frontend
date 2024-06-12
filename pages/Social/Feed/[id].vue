<template>
    <div class="contentPage">
        <profilebar />
        <v-row class="centralfeed">
            <v-col cols="10">
                <v-row>
                    <v-col cols="12">
                        <v-card class="mx-auto">
                            <v-list lines="two">
                                <v-list-item :title="data?.activity?.creator?.username" :prepend-avatar="data?.activity?.creator?.avatar?.url">
                                </v-list-item>
                            </v-list>

                            <v-card-text class="pt-4" v-html="data?.activity?.content"></v-card-text>

                            <v-card-subtitle class="pt-4">
                                Posted: {{ new Date(data?.activity?.date).toLocaleDateString() }}
                            </v-card-subtitle>

                            <v-card-text class="pt-4" v-html="data?.activity?.status"></v-card-text>

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
                        <disqus />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import profilebar from '../../../components/menus/profilebar.vue'
    import disqus from '../../../components/social/disqus.vue'
    import comments from '../../../components/social/comments.vue'
    import repost from '../../../components/social/repost.vue'
    import reactions from '../../../components/social/reactions.vue'
    import bookmark from '../../../components/social/bookmark.vue'
    import share from '../../../components/social/share.vue'

    export default {
        components: {
            profilebar,
            disqus,
            comments,
            repost,
            reactions,
            bookmark,
            share
        },
        data() {
            return {
                url: process.env.DIRECTUS_URL,
            }
        },
    }
</script>

<script setup>
const route = useRoute();
const query = gql`
query NewQuery ($id: ID!) {
  activity(id: $id) {
    content
    creator {
      avatar {
        url
      }
      username
    }
    date
    id
    status
    title
    type
  }
}
`

  const {
    data
  } = useAsyncQuery(query, { id: route.params.id });

/*const {
    getItemById
  } = useDirectusItems()

  const newsfeed = await getItemById({
    collection: "newsfeed",
    id: route.params.id
  });*/

    useHead({
        title: data?.value?.activity?.title,
    })

    definePageMeta({
	  //middleware: ['auth-logged-in'],
	})
</script>