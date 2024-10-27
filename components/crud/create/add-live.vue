<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Live Video
                </v-btn>
            </template>
            <v-card>
                <form @submit.prevent="addLive">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Live Video</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field v-model="shorts.name" id="listName" label="Live Video Name*" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="shorts.description" label="Description" id="listDescription">
                                    </v-textarea>
                                </v-col>
                                <v-col cols="6">
                                    <div><video /></div>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="customers.customers_id.username" label="Username"
                                        placeholder="" disabled></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-select label="What category does this video belong in?" v-for="(category, index) in data?.categories?.items" :key="index"
                                        :items="[`${category?.name}`]">
                                    </v-select>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                            Close
                        </v-btn>
                        <v-btn color="blue-darken-1" variant="text" type="submit" @click="dialog = false">
                            Save
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import video from '~/components/media/video/videojs.vue'
    //import { CREATE_SHORT_ITEM } from "~/apollo/Mutations/shorts";

    export default {
        components: {
            video
        },
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                      /*    shorts: {
                            name: '',
                            description: '',
                            video: {
                                filename_disk: ''
                            },
                            customers: {
                                customers_id: {
                                    username: ''
                                }
                            },
                            categories: {
                                items: {
                                    children: {
                                        name: ''
                                    }
                                }
                            }
                        }
                        };
                    },
         methods: {
              addLive() {
                  const name = this.name;
                  const description = this.description;
                  const video = this.video;
                  // eslint-disable-next-line camelcase
                  const customers = this.customers;
                  // eslint-disable-next-line camelcase
                  const categories = this.categories;
                  this.$apollo.mutate({
                      mutation: CREATE_SHORT_ITEM,
                      variables: {
                          name,
                          description,
                          video,
                          categories,
                          customers,
                      },
                      update: (store, {
                          data: {
                              addLive
                          }
                      }) => {
                          // Read data from store for this query
                          const data = store.readQuery({
                              query: shorts,
                              variables: {
                                  first: 5,
                                  skip: 0,
                                  orderBy: 'created_at'
                              }
                          })
                          data.customers.push(addLive)
                          store.writeQuery({
                              query: customers,
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
                  this.description = ' ';
                  this.video = ' ';
                  this.categories = ' ';
                  this.customers = ' ';
              },*/
          }
        }
    }
</script>

<script setup>
    import {
        ref
    } from 'vue';
    import {
        useApolloClient
    } from '@vue/apollo-composable';
    import {
        useRoute,
        useRouter
    } from 'vue-router';
    import CREATE_VIDEO from '~/graphql/cms/queries/videos'

    const route = useRoute();
    const router = useRouter();
    //const id = ref('');

    const content = ref('');
    const name = ref('');
    const image = ref('');
    const media = ref('');
    const reactions = ref('');

    const {
        client: apolloClient
    } = useApolloClient();

    const createGroup = async () => {
        try {
            const {
                data
            } = await apolloClient.mutate({
                mutation: CREATE_VIDEO,
                variables: {
                    description: description.value,
                    name: name.value
                    //id: id.value,
                },
            });
            console.log('Group created:', data.createGroup.activity);
        } catch (error) {
            console.error('Error updating activity:', error);
        }
    };

    const createGroupAndRefresh = async () => {
        await createGroup();
        router.go(0); // Refresh the current route
    };
</script>