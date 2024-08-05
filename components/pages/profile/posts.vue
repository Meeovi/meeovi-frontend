<template>
    <div>
        <v-row>
            <v-col cols="12">
                <v-toolbar color="orange" title="Your Social Feed" subtitle="Your Posts"></v-toolbar>
                <v-col cols="3" v-for="(member, index) in data?.members?.nodes" :key="index">
                    <v-card class="mx-auto" elevated="0">
                        <img class="align-end text-white" height="350"
                            :src="`${member?.featuredImage?.node?.sourceUrl}`" :alt="member?.title" cover />
                            <v-card-title>{{ member?.title }}</v-card-title>

                        <v-card-text>
                            <div><p v-text="member?.content"></p></div>
                        </v-card-text>

                        <v-card-actions>
                            <v-row>
                                <v-col cols="3">
                                    <v-btn title="Comments" prepend-icon="fas fa-comment" variant="plain" :href="`/blog/${member.id}`">()</v-btn>
                                </v-col>
                                <v-col cols="3">
                                    <v-btn title="Repost" prepend-icon="fas fa-repeat" variant="plain" @click="repost()">()</v-btn>
                                </v-col>
                                <v-col cols="3">
                                    <v-btn title="Like This" prepend-icon="fas fa-heart" variant="plain" @click="addLike">()</v-btn>
                                </v-col>
                                <v-col cols="3">
                                    <v-btn title="Bookmark" prepend-icon="fas fa-bookmark" variant="plain" @click="addBookmark">()
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

<script setup>
const query = gql `
query NewQuery {
  members {
    nodes {
      posts {
        nodes {
          categories {
            nodes {
              name
            }
          }
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
          id
          status
          slug
          title
        }
      }
    }
  }
}
`

    const {
        data
    } = useAsyncQuery(query);

/*const {
    getItems
  } = useDirectusItems()

  const newsfeed = await getItems({
    collection: "newsfeed"
  });*/

    useHead({
        title: 'Social Feed',
    })
</script>