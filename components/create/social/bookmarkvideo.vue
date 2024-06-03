<template>
    <div>
        <v-toolbar title="Bookmark a Video"></v-toolbar>
        <v-form>
            <v-container>
                <v-row>
                    <v-col cols="6">
                        <v-text-field v-model="name" label="Video Name" required></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-combobox label="Category"
                            :items="['California', 'Colorado']" hint="Choose the appropriate video category"></v-combobox>
                    </v-col>
                    <v-col cols="6">
                        <v-file-input clearable label="Video Image"></v-file-input>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field label="Video URL" type="url"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-textarea label="Video Description"></v-textarea>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    import video from '../../../Partials/videojs'
   // import { CREATE_SHORT_ITEM } from "../../../apollo/Mutations/shorts";

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
                /*          shorts: {
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
//import query from '../../../apollo/Queries/categories'

const {
    data
  } = await useAsyncQuery(query)

    useHead({
        title: 'Bookmark a Video',
    })
</script>