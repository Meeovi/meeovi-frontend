<template>
    <div>
        <form>
            <v-card>
                <v-card-text>
                    <v-textarea v-model="content" label="What's happening?*" variant="outlined" required></v-textarea>
                    <v-row>
                        <v-col cols="12">
                            <v-file-input v-model="image" chips multiple clearable density="compact"
                                prepend-icon="fas fa-image" accept="image/*" label="Photo/Video"
                                variant="solo-inverted"></v-file-input>
                        </v-col>
                        <v-col cols="12">
                            <v-file-input v-model="media" chips multiple clearable density="compact"
                                prepend-icon="fas fa-video" accept="video/*" label="Live Video" variant="solo-inverted">
                            </v-file-input>
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
                                                <v-btn href="" variant="text" v-model="reactions">
                                                    <v-list-item-title>
                                                        <v-icon color="orange" icon="fas fa-face-smile"></v-icon>
                                                    </v-list-item-title>
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-btn href="" variant="text" v-model="reactions">
                                                    <v-list-item-title>
                                                        <v-icon color="amber" icon="fas fa-face-smile-wink"></v-icon>
                                                    </v-list-item-title>
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-btn href="" variant="text" v-model="reactions">
                                                    <v-list-item-title>
                                                        <v-icon color="green" icon="fas fa-face-smile-beam"></v-icon>
                                                    </v-list-item-title>
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-btn href="" variant="text" v-model="reactions">
                                                    <v-list-item-title>
                                                        <v-icon color="blue-grey" icon="fas fa-face-laugh-squint">
                                                        </v-icon>
                                                    </v-list-item-title>
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-btn href="" variant="text" v-model="reactions">
                                                    <v-list-item-title>
                                                        <v-icon color="blue" icon="fas fa-face-grin-squint-tears">
                                                        </v-icon>
                                                    </v-list-item-title>
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-btn href="" variant="text" v-model="reactions">
                                                    <v-list-item-title>
                                                        <v-icon color="purple-lighten-1" icon="fas fa-face-grin-squint">
                                                        </v-icon>
                                                    </v-list-item-title>
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-btn href="" variant="text" v-model="reactions">
                                                    <v-list-item-title>
                                                        <v-icon color="pink-darken-4" icon="fas fa-face-grin-hearts">
                                                        </v-icon>
                                                    </v-list-item-title>
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-btn href="" variant="text" v-model="reactions">
                                                    <v-list-item-title>
                                                        <v-icon color="brown" icon="fas fa-face-grin-beam-sweat">
                                                        </v-icon>
                                                    </v-list-item-title>
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-btn href="" variant="text" v-model="reactions">
                                                    <v-list-item-title>
                                                        <v-icon color="red" icon="fas fa-heart"></v-icon>
                                                    </v-list-item-title>
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-col>
                        <v-col cols="10">
                            <v-file-input v-model="image" chips clearable density="compact"
                                prepend-icon="fas fa-sheet-plastic" label="Choose a background" variant="solo-inverted">
                            </v-file-input>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-divider class="mt-12"></v-divider>
                <v-card-actions>
                    <v-btn variant="text" @click="resetForm">
                        Cancel Update
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
                    <v-btn color="primary" variant="text" type="submit" @click.prevent="deleteActivityAndRefresh">
                        Delete Post
                    </v-btn>

                    <v-btn color="primary" variant="text" type="submit" @click.prevent="updateActivityAndRefresh">
                        Update Post
                    </v-btn>
                </v-card-actions>
            </v-card>
            
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useApolloClient } from '@vue/apollo-composable';
import { useRoute, useRouter } from 'vue-router';
import { UPDATE_ACTIVITY, DELETE_ACTIVITY } from '~/graphql/cms/mutations/activities'
    //import video from '~/components/partials/videojs'

const location = ref('bottom');
const route = useRoute();
const router = useRouter();
const id = route.params.id;

const content = ref('');
const image = ref('');
const media = ref('');
const reactions = ref('');

const { client: apolloClient } = useApolloClient();

const updateActivity = async () => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: UPDATE_ACTIVITY,
      variables: {
        content: content.value,
        id: id,
      },
      context: {
        clientName: 'secondary'  // This will use the secondary endpoint
      }
    });
    console.log('Activity updated:', data.updateActivity.activity);
  } catch (error) {
    console.error('Error updating activity:', error);
  }
};

const deleteActivity = async () => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: DELETE_ACTIVITY,
      variables: {
        id: id,
      },
      context: {
        clientName: 'secondary'  // This will use the secondary endpoint
      }
    });
    console.log('Activity deleted:', data.deleteActivity.activity.id);
  } catch (error) {
    console.error('Error deleting activity:', error);
  }
};

const deleteActivityAndRefresh = async () => {
  await deleteActivity();
  router.push('/social/newsfeed');  // Refresh the current route
};

const updateActivityAndRefresh = async () => {
  await updateActivity();
  router.go(0);  // Refresh the current route
};

const resetForm = () => {
  content.value = '';
  image.value = '';
  media.value = '';
  reactions.value = '';
};

const reset = () => {
  router.go(0);
};
</script>