<template>
    <div>
        <v-form @submit.prevent="addPost">
        <v-card ref="form">
            <v-card-text>
                <v-textarea v-model="name" label="Title" variant="outlined"></v-textarea>
                <v-textarea v-model="post" label="What's happening?" variant="outlined"></v-textarea>
                <v-row>
                    <v-col cols="3">
                        <v-file-input v-model="image" chips multiple clearable density="compact" prepend-icon="fas fa-image"
                            accept="image/*" label="Photo/Video" variant="solo-inverted"></v-file-input>
                    </v-col>
                    <v-col cols="3">
                        <v-file-input v-model="media" chips multiple clearable density="compact" prepend-icon="fas fa-video"
                            accept="video/*" label="Live Video" variant="solo-inverted"></v-file-input>
                    </v-col>
                    <v-col cols="2">
                        <v-menu :location="location">
                            <template v-slot:activator="{ props }">
                                <v-btn color="primary" v-bind="props" size="large" v-model="reactions">
                                    <v-icon icon="fas fa-face-smile"></v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item>
                                    <v-row>
                                        <v-col cols="3">
                                            <v-btn href="" variant="text" v-model="reactions"><v-list-item-title>
                                                <v-icon color="orange" icon="fas fa-face-smile"></v-icon>
                                            </v-list-item-title></v-btn>
                                        </v-col>
                                        <v-col cols="3">
                                            <v-btn href="" variant="text" v-model="reactions"><v-list-item-title>
                                                <v-icon color="amber" icon="fas fa-face-smile-wink"></v-icon>
                                            </v-list-item-title></v-btn>
                                        </v-col>
                                        <v-col cols="3">
                                            <v-btn href="" variant="text" v-model="reactions"><v-list-item-title>
                                                <v-icon color="green" icon="fas fa-face-smile-beam"></v-icon>
                                            </v-list-item-title></v-btn>
                                        </v-col>
                                        <v-col cols="3">
                                            <v-btn href="" variant="text" v-model="reactions"><v-list-item-title>
                                                <v-icon color="blue-grey" icon="fas fa-face-laugh-squint"></v-icon>
                                            </v-list-item-title></v-btn>
                                        </v-col>
                                        <v-col cols="3">
                                            <v-btn href="" variant="text" v-model="reactions"><v-list-item-title>
                                                <v-icon color="blue" icon="fas fa-face-grin-squint-tears"></v-icon>
                                            </v-list-item-title></v-btn>
                                        </v-col>
                                        <v-col cols="3">
                                            <v-btn href="" variant="text" v-model="reactions"><v-list-item-title>
                                                <v-icon color="purple-lighten-1" icon="fas fa-face-grin-squint"></v-icon>
                                            </v-list-item-title></v-btn>
                                        </v-col>
                                        <v-col cols="3">
                                            <v-btn href="" variant="text" v-model="reactions"><v-list-item-title>
                                                <v-icon color="pink-darken-4" icon="fas fa-face-grin-hearts"></v-icon>
                                            </v-list-item-title></v-btn>
                                        </v-col>
                                        <v-col cols="3">
                                            <v-btn href="" variant="text" v-model="reactions"><v-list-item-title>
                                                <v-icon color="brown" icon="fas fa-face-grin-beam-sweat"></v-icon>
                                            </v-list-item-title></v-btn>
                                        </v-col>
                                        <v-col cols="3">
                                            <v-btn href="" variant="text" v-model="reactions"><v-list-item-title>
                                                <v-icon color="red" icon="fas fa-heart"></v-icon>
                                            </v-list-item-title></v-btn>
                                        </v-col>
                                    </v-row>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                    <v-col cols="4">
                        <v-file-input v-model="image" chips clearable density="compact" prepend-icon="fas fa-sheet-plastic" label="Choose a background" variant="solo-inverted"></v-file-input>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-divider class="mt-12"></v-divider>
            <v-card-actions>
                <v-btn variant="text">
                    Cancel
                </v-btn>
                <v-spacer></v-spacer>
                <v-slide-x-reverse-transition>
                    <v-tooltip location="start">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon class="my-0" v-bind="attrs" @click="reset" v-on="on">
                                <v-icon icon="fas fa-rotate-right"></v-icon>
                            </v-btn>
                        </template>
                        <span>Refresh form</span>
                    </v-tooltip>
                </v-slide-x-reverse-transition>
                <v-btn color="primary" variant="text" type="submit" @click="submit">
                    Post
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
    </div>
</template>

<script>
    //import video from '../../../components/partials/videojs'
    import { CREATE_NEWSFEED_ITEM } from "../../../apollo/Mutations/Newsfeed";

    export default {
        components: {
            //video
        },
        data() {
            return {
                location: 'bottom',
                          newsfeed: {
                            name: '',
                            post: '',
                            media: {
                                filename_disk: ''
                            },
                            reactions: {
                                reactions_id: {
                                    reaction_type: ''
                                }
                            },
                            image: {
                                filename_disk: ''
                            },
                        }
                        };
                    },
         methods: {
              addLive() {
                  const name = this.name;
                  const post = this.post;
                  const video = this.video;
                  // eslint-disable-next-line camelcase
                  const reactions = this.reactions;
                  // eslint-disable-next-line camelcase
                  const image = this.image;
                  this.$apollo.mutate({
                      mutation: CREATE_NEWSFEED_ITEM,
                      variables: {
                          name,
                          post,
                          video,
                          image,
                          reactions,
                      },
                      update: (store, {
                          data: {
                              addLive
                          }
                      }) => {
                          // Read data from store for this query
                          const data = store.readQuery({
                              query: newsfeed,
                              variables: {
                                  first: 5,
                                  skip: 0,
                                  orderBy: 'created_at'
                              }
                          })
                          data.reactions.push(addLive)
                          store.writeQuery({
                              query: reactions,
                              variables: {
                                  first: 5,
                                  skip: 0,
                                  orderBy: 'created_at'
                              },
                              data
                          })
                      }
                  }).then((_data) => {
                      this.$router.push({
                          path: ''
                      })
                  }).catch(error => console.error(error));
                  this.name = ' ';
                  this.post = ' ';
                  this.video = ' ';
                  this.image = ' ';
                  this.reactions = ' ';
              },
          }, /* */
    }
</script>

<script setup>

</script>