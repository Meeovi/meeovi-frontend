<template>
    <div>
        <form @submit.prevent="postToActivityFeed">
            <v-card ref="form">
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
                    <v-btn color="primary" variant="text" type="submit">
                        Post
                    </v-btn>
                </v-card-actions>
            </v-card>
        </form>
    </div>
</template>

<script>
    //import video from '../../../components/partials/videojs'

    export default {
        components: {
            //video
        },
        data() {
            return {
                location: 'bottom',
            };
        },
    }
</script>

<script setup>
import { ref } from 'vue';

// Define the GraphQL mutation
const CREATE_ACTIVITY = gql`
  mutation CreateActivity($content: String!, $component: ActivityComponentEnum!, $type: ActivityTypeEnum!) {
    createActivity(input: {
      content: $content,
      component: $component,
      type: $type
    }) {
      activity {
        content
        id
      }
    }
  }
`;

// Set up the ref for content
const content = ref('');

// Use the useMutation hook to create a mutate function
const { mutate } = useMutation(CREATE_ACTIVITY);

// Define the function to post to the activity feed
const postToActivityFeed = async () => {
  const variables = {
    content: content.value,
    component: "ACTIVITY", // Ensure this is the correct enum value
    type: "ACTIVITY_UPDATE" // Ensure this is the correct enum value
  };

  console.log('Variables:', variables); // Debugging: Log variables to ensure they are correct

  try {
    const result = await mutate({ variables });
    console.log('Mutation result:', result);
    if (result.errors) {
      console.error('GraphQL Errors:', result.errors);
    } else {
      console.log('Activity posted:', result.data.createActivity.activity);
    }
  } catch (error) {
    console.error('Error posting activity:', error);
  }
};
</script>