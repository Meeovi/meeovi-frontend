<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <v-card>
                <v-card-text>
                    <v-text-field v-model="postData.title" id="spaceName" label="Space Name*" required />
                    <v-textarea v-model="postData.content" label="What's happening?*" variant="outlined"
                        required></v-textarea>
                    <v-row>
                        <v-col cols="6">
                            <v-select v-model="postData.type" label="What type of post is this?"
                                :items="['Notes', 'News']" />
                        </v-col>
                        <v-col cols="6">
                            <v-select v-model="postData.status" label="Is this post public or private?"
                                :items="['Public', 'Private']" />
                        </v-col>
                        <v-col cols="12">
                            <v-file-input @change="handleImageUpload" clearable density="compact"
                                prepend-icon="fas fa-image" accept="image/*" label="Image" variant="solo-inverted" />
                        </v-col>
                        <v-col cols="12">
                            <v-file-input @change="handleMediaUpload" chips multiple clearable density="compact"
                                prepend-icon="fas fa-video" accept="video/*" label="Live Video" variant="solo-inverted">
                            </v-file-input>
                        </v-col>
                        <v-col cols="2">
                            <v-menu :location="location">
                                <template v-slot:activator="{ props }">
                                    <v-btn color="primary" v-bind="props" size="large" v-model="postData.reactions">
                                        <v-icon icon="fas fa-face-smile"></v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item>
                                        <v-row>
                                            <v-col cols="3">
                                                <v-btn href="" variant="text" v-model="postData.reactions">
                                                    <v-list-item-title>
                                                        <v-icon color="orange" icon="fas fa-face-smile"></v-icon>
                                                    </v-list-item-title>
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-btn href="" variant="text" v-model="postData.reactions">
                                                    <v-list-item-title>
                                                        <v-icon color="amber" icon="fas fa-face-smile-wink"></v-icon>
                                                    </v-list-item-title>
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-btn href="" variant="text" v-model="postData.reactions">
                                                    <v-list-item-title>
                                                        <v-icon color="green" icon="fas fa-face-smile-beam"></v-icon>
                                                    </v-list-item-title>
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-btn href="" variant="text" v-model="postData.reactions">
                                                    <v-list-item-title>
                                                        <v-icon color="blue-grey" icon="fas fa-face-laugh-squint">
                                                        </v-icon>
                                                    </v-list-item-title>
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-btn href="" variant="text" v-model="postData.reactions">
                                                    <v-list-item-title>
                                                        <v-icon color="blue" icon="fas fa-face-grin-squint-tears">
                                                        </v-icon>
                                                    </v-list-item-title>
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-btn href="" variant="text" v-model="postData.reactions">
                                                    <v-list-item-title>
                                                        <v-icon color="purple-lighten-1" icon="fas fa-face-grin-squint">
                                                        </v-icon>
                                                    </v-list-item-title>
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-btn href="" variant="text" v-model="postData.reactions">
                                                    <v-list-item-title>
                                                        <v-icon color="pink-darken-4" icon="fas fa-face-grin-hearts">
                                                        </v-icon>
                                                    </v-list-item-title>
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-btn href="" variant="text" v-model="postData.reactions">
                                                    <v-list-item-title>
                                                        <v-icon color="brown" icon="fas fa-face-grin-beam-sweat">
                                                        </v-icon>
                                                    </v-list-item-title>
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-btn href="" variant="text" v-model="postData.reactions">
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
                    </v-row>
                </v-card-text>
                <v-divider class="mt-12"></v-divider>
                <v-card-actions>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Close
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" type="submit" @click="resetForm = false">
                        Reset
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="text" type="submit">
                        Update Post
                    </v-btn>
                </v-card-actions>
            </v-card>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import uploadFiles from '@/composables/cms/content/uploadFiles';
import updatePost from '@/composables/cms/posts/updatePost';
import {
    useUserStore
  } from '~/stores/user'
  import {
    useRouter
  } from 'vue-router'

  const userStore = useUserStore()
    // Make sure your props are properly defined
    // Update props to include space_id
    const props = defineProps({
        space_id: {
            type: String,
            required: true
        }
    });

    const userDisplayName = computed(() => {
    return userStore.user?.name || userStore.user?.username || 'User'
  })

const route = useRoute();
const router = useRouter();

const postData = ref({
    id: '', // Add this to store the post ID
    title: '',
    type: '',
    status: '',
    content: '',
    image: null,
    media: null,
    username: userDisplayName,
    space_id: props.space_id, // Initialize with the space_id from props
});

const dialog = ref(false);
const includeFiles = ref(true);
const imageFile = ref(null);
const loading = ref(false);

// Function to fetch existing post data
const fetchPostData = async () => {
    try {
        const { $directus, $readItem } = useNuxtApp();
        const listId = route.params.id; // Assuming you're passing the ID in the route
        const response = await $directus.request(readItem('posts', listId));
        
        // Populate the form with existing data
        postData.value = {
            id: response.id,
            name: response.name,
            type: response.type,
            status: response.status,
            description: response.description,
            image: response.image,
            username: response.username
        };
    } catch (error) {
        console.error('Error fetching post:', error);
    }
};

// Load existing data when component mounts
onMounted(() => {
    if (route.params.id) {
        fetchPostData();
    }
});

const handleImageUpload = (event) => {
    imageFile.value = event.target.files[0];
};

const resetForm = () => {
    postData.value = {
        id: '', // Add this to store the post ID
        title: '',
        type: '',
        status: '',
        content: '',
        image: null,
        media: null,
    };
    imageFile.value = null;
};

const handleSubmit = async () => {
    try {
        loading.value = true;

        // Handle image upload if there's a new image
        if (imageFile.value) {
            const uploadedFiles = await uploadFiles({
                imageFile: imageFile.value,
            });
            postData.value.image = uploadedFiles.imageId;
        }

        // Update the post
        const updatedPost = await updatePost(route.params.id, {
            title: postData.value.title,
            type: postData.value.type,
            status: postData.value.status,
            content: postData.value.content,
            image: postData.value.image,
            media: postData.value.media
        });

        console.log('Post updated successfully:', updatedPost);
        
        // Show success message (you can implement your preferred notification system)
        alert('Post updated successfully');

    } catch (error) {
        console.error('Error updating post:', error);
        alert('Error updating post: ' + error.message);
    } finally {
        loading.value = false;
    }
};
</script>