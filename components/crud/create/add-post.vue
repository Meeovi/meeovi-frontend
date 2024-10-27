<template>
    <div>
        <form @submit.prevent="createActivityAndRefresh">
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
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                            Close
                        </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" type="submit" @click="reset = false">
                            Reset
                        </v-btn>
                    <v-btn color="blue-darken-1" variant="text" type="submit" @click="dialog = false">
                            Post
                        </v-btn>
                </v-card-actions>
            </v-card>
        </form>
    </div>
</template>

<script>
    export default {
        methods: {
            reset () {
                this.$refs.form.reset()
            },
        },
    }
</script>

<script setup>
import { ref } from 'vue';
import { useApolloClient } from '@vue/apollo-composable';
import { useRoute, useRouter } from 'vue-router';
import {CREATE_ACTIVITY} from '~/graphql/cms/mutations/activities'
    //import video from '~/components/partials/videojs'

const dialog = ref(false)
const location = ref('bottom');
const route = useRoute();
const router = useRouter();
//const id = ref('');

const content = ref('');
const image = ref('');
const media = ref('');
const reactions = ref('');

const { client: apolloClient } = useApolloClient();

const createActivity = async () => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: CREATE_ACTIVITY,
      variables: {
        content: content.value,
        //id: id.value,
      },
    });
    console.log('Activity created:', data.createActivity.activity);
  } catch (error) {
    console.error('Error updating activity:', error);
  }
};

const createActivityAndRefresh = async () => {
  await createActivity();
  router.go(0);  // Refresh the current route
};
</script>