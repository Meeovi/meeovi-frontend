<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create a Space
                </v-btn>
            </template>
            <v-card>
                <form method="post" @submit.prevent="addSpace()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Space</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field v-model="name" id="spaceName" label="Space Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="description" label="Description" id="spaceDescription">
                                    </v-textarea>
                                </v-col>
                                <v-col cols="6">
                                    <v-file-input v-model="image" clearable density="compact" prepend-icon="fas fa-image"
                            accept="image/*" label="Photo/Video" variant="solo-inverted"></v-file-input>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="groupType" label="What type of group is this?" v-for="(space, index) in space?.items" :key="index" :items="[`${space?.groupType}`]"></v-select>
                                </v-col>
                                <v-col cols="12">
                                    <v-select v-model="status" label="Is this group public or private?" v-for="(space, index) in space?.items" :key="index" :items="[`${space?.status}`]"></v-select>
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
    import { CREATE_SPACE_ITEM } from "../../../apollo/Mutations/space";

    export default {
       data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                newsfeed: {
                            name: '',
                            description: '',
                            groupType: '',
                            status: '',
                            image: {
                                filename_disk: ''
                            },
                        }
                        };
                    },
         methods: {
              addLive() {
                  const name = this.name;
                  const description = this.description;
                  const media = this.media;
                  // eslint-disable-next-line camelcase
                  const groupType = this.groupType;
                  // eslint-disable-next-line camelcase
                  const image = this.image;
                  this.$apollo.mutate({
                      mutation: CREATE_SPACE_ITEM,
                      variables: {
                          name,
                          description,
                          media,
                          image,
                          groupType,
                      },
                      update: (store, {
                          data: {
                              addLive
                          }
                      }) => {
                          // Read data from store for this query
                          const data = store.readQuery({
                              query: Space,
                              variables: {
                                  first: 5,
                                  skip: 0,
                                  orderBy: 'created_at'
                              }
                          })
                      }
                  }).then((_data) => {
                      this.$router.push({
                          path: ''
                      })
                  }).catch(error => console.error(error));
                  this.name = ' ';
                  this.description = ' ';
                  this.media = ' ';
                  this.image = ' ';
                  this.groupType = ' ';
              },
          }, /* */
    }
</script>

<script setup>
const {
        getItems
    } = useDirectusItems()

    const space = await getItems({
        collection: "Space"
    });
</script>