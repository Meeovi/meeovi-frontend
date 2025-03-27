<template>
    <div class="productPage videoPage">
        <v-row>
            <v-col cols="8">
                <video :src="`${data?.video?.videoFields?.videoFile?.node?.sourceUrl}`" controls autoplay></video>

                <v-card elevation="2">
                    <div>
                        <v-toolbar color="red" :title="data?.video?.videoFields?.name"></v-toolbar>

                        <v-list lines="one">
                            <v-list-item :title="shorts?.customers?.customers_id?.username"
                                :prepend-avatar="`${$directus.url}assets/${shorts?.customers?.customers_id?.image?.filename_disk}`"></v-list-item>
                        </v-list>

                        <v-toolbar color="transparent" density="compact">
                            <v-btn color="red">Subscribe</v-btn>
                            <v-btn color="gray" disabled="">20,583,258</v-btn>
                            <v-btn icon="fas fa-bell" color="red"></v-btn>

                            <v-toolbar-items class="rightvideoviews">
                                <v-btn disabled>{{ data?.product?.averageRating }} views</v-btn>
                                <v-btn prepend-icon="fas fa-thumbs-up">()</v-btn>
                                <v-btn prepend-icon="fas fa-thumbs-down">()</v-btn>
                            </v-toolbar-items>

                        </v-toolbar>

                        <div class="videotags">
                            <h6>Tags: </h6>
                            <v-chip v-for="tags in data?.video?.videoFields?.media">{{ tags?.nodes?.name }}</v-chip>
                        </div>
                    </div>
                    <v-tabs v-model="tab">
                        <v-tab value="one">Description</v-tab>
                        <v-tab value="two">Share</v-tab>
                        <v-tab value="three">Other Content by User</v-tab>
                    </v-tabs>

                    <v-card-text>
                        <v-window v-model="tab">
                            <v-window-item value="one">
                                <v-list lines="one">
                                    <v-list-item :subtitle="data?.video?.videoFields?.description">
                                        <v-list-item-title>{{ new Date(data?.video?.date).toLocaleDateString() }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-window-item>

                            <v-window-item value="two">
                                <share />
                            </v-window-item>

                            <v-window-item value="three">
                                <relatedproducts /><!---->
                            </v-window-item>
                        </v-window>
                    </v-card-text>
                </v-card>

                <br>
                <v-expansion-panels>
                    <v-expansion-panel title="Comments ()" color="red">
                        <v-expansion-panel-text><comments /></v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>

            <v-col cols="4"><relatedproducts /><!----></v-col>
        </v-row>
        <recentlyviewed /><!---->
    </div>
</template>

<script setup>
  import { ref } from 'vue'
  import {
    useQuery
  } from '@vue/apollo-composable'
  import recentlyviewed from '~/components/product/recentlyviewed.vue'
  import relatedproducts from '~/components/product/relatedproducts.vue'
  //import editor from '~/components/Editors/editor.vue'
  import comments from '~/components/partials/globals/comments.vue'
  import share from '~/components/partials/globals/share.vue'
  import gql from 'graphql-tag'

const route = useRoute();
const tab = ref(null)

const query = gql`
query NewQuery ($id: ID!) {
  video(id: $id){
    date
    id
    videoFields {
      description
      name
      type
      videoFile {
        node {
          sourceUrl
        }
      }
      thumbnail {
        node {
          sourceUrl
        }
      }
      media {
        nodes {
          ... on Tag {
            id
            name
          }
        }
      }
    }
  }
}
`

  const {
    data
  } = useQuery(query, { id: route.params.id });
  
  useHead({
    title: shorts?.name,
  })
</script>