<template>
    <div class="livebar">
        <v-card height="75" variant="text">
            <v-tabs v-model="tab" center-active height="75">
                <v-tab>
                    <div class="text-center">
                        <v-dialog v-model="createdialog" width="auto" transition="dialog-bottom-transition" fullscreen>
                            <template v-slot:activator="{ props }">
                                <v-avatar icon="fas fa-plus" style="background: rgb(var(--v-theme-primary))!important; color: white;" size="60"
                                    v-bind="props"></v-avatar>
                            </template>
                            <v-card>
                                <video-player class="createVideo" src="" />
                                <v-card-actions>
                                    <v-btn color="primary" block @click="createdialog = false">Close</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </v-tab>

                <v-tab>
                    <div class="text-center">
                        <v-dialog v-model="dialog" width="auto" transition="dialog-bottom-transition" fullscreen>
                            <template v-slot:activator="{ props }">
                                <div class="avatarBorder" v-for="video in data?.video?.videoFields" :key="video">
                                    <v-avatar v-bind="props" size="60">
                                        <img :src="`${video?.featuredImage?.node?.sourceUrl}`" :alt="video?.title" cover />
                                    </v-avatar>
                                </div>
                            </template>

                            <v-card min-height="75%" min-width="75%">
                                <v-row>
                                    <v-col cols="6"><video class="liveVideo" :src="videoid?.video?.videoFields?.videoFile?.node?.sourceUrl" autoplay controls></video></v-col>
                                    <v-col cols="6">
                                      <p>{{ videoid?.video?.title }}</p>
                                        <p>{{ videoid?.video?.content }}</p>
                                        <v-divider></v-divider>
                                        <disqus />
                                    </v-col>
                                </v-row>

                                <v-card-actions>
                                    <v-btn color="primary" block @click="dialog = false">Close</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </v-tab>
            </v-tabs>
        </v-card>
        <!--<livebubbles />-->
    </div>
</template>

<script>
    import disqus from '../../social/disqus.vue'
    //import livebubbles from '../livebar/livebubbles.vue'
    import VideoPlayer from '../../partials/videojs'

    export default {
        components: {
            disqus,
            //livebubbles,
            VideoPlayer
        },
        data: () => ({
            tab: null,
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
            createdialog: false,
            videoOptions: {
                autoplay: true,
                controls: true,
            }
        }),
    }
</script>

<script setup>
const query = gql `
query NewQuery {
  videos {
    nodes {
      date
      id
      content
      title
      videoFields {
        bookmarkVideoUrl
        type
        videoFile {
          node {
            sourceUrl
          }
        }
        media {
          nodes {
            id
            name
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}
`

    const {
        data
    } = useAsyncQuery(query);

const route = useRoute();
const queryid = gql`
query NewQuery ($id: ID!) {
  video(id: $id){
    id
    title
    content
    videoFields {
      type
      videoFile {
        node {
          sourceUrl
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}
`

  const {
    data: videoid
  } = useAsyncQuery(queryid, { id: route.params.id });
</script>