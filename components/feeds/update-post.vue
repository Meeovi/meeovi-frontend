<template>
    <div>
        <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn color="primary" v-bind="activatorProps" icon="fas fa-gear" size="medium"
                    title="Open Settings"></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card title="Dialog">
                    <v-card-text>
                        <form @submit.prevent="handleSubmit">
                            <v-card>
                                <v-card-text>
                                    <v-text-field v-model="postData.title" id="postName" label="Post Name*" required />
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
                                                prepend-icon="fas fa-image" accept="image/*" label="Image"
                                                variant="solo-inverted" />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-file-input @change="handleMediaUpload" chips multiple clearable
                                                density="compact" prepend-icon="fas fa-video" accept="video/*"
                                                label="Live Video" variant="solo-inverted">
                                            </v-file-input>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-file-input @change="handleAudioUpload" chips multiple clearable
                                                density="compact" prepend-icon="fas fa-microphone" accept="audio/*"
                                                label="Audio" variant="solo-inverted">
                                            </v-file-input>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                                <v-divider class="mt-12"></v-divider>
                                <v-card-actions>
                                    <v-btn color="blue-darken-1" variant="text" @click="isActive.value = false">
                                        Close
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue-darken-1" variant="text" type="submit" @click="confirmDelete"
                                        :loading="deleteLoading">
                                        Delete Post
                                    </v-btn>
                                    <v-btn color="blue-darken-1" variant="text" type="submit">
                                        Update Post
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </form>
                    </v-card-text>
                </v-card>
            </template>
        </v-dialog>

        <!-- Delete Confirmation Dialog -->
        <v-dialog v-model="deleteDialog" max-width="500px">
            <v-card>
                <v-card-title class="text-h5">Delete Post</v-card-title>
                <v-card-text>
                    Are you sure you want to delete this post? This action cannot be undone.
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="deleteDialog = false">
                        Cancel
                    </v-btn>
                    <v-btn color="error" variant="text" @click="deletePost" :loading="deleteLoading">
                        Delete
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue';
    import uploadFiles from '@/composables/cms/content/uploadFiles';
    import updatePost from '@/composables/cms/posts/updatePost';
    import { updateItem, deleteItem } from '@directus/sdk';
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

    // Add these new refs for delete functionality
    const deleteDialog = ref(false);
    const deleteLoading = ref(false);

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
        audio: null,
        username: userDisplayName,
        user_avatar: userStore.user?.photoUrl,
        space_id: props.space_id, // Initialize with the space_id from props
    });

    const dialog = ref(false);
    const includeFiles = ref(true);
    const imageFile = ref(null);
    const audioFile = ref(null);
    const loading = ref(false);

    // Function to fetch existing post data
    const fetchPostData = async () => {
        try {
            const {
                $directus,
                $readItem,
            } = useNuxtApp();
            const listId = route.params.id; // Assuming you're passing the ID in the route
            const response = await $directus.request($readItem('posts', listId));

            // Populate the form with existing data
            postData.value = {
                id: response.id,
                title: response.title,
                type: response.type,
                status: response.status,
                content: response.content,
                image: response.image,
                audio: response.audio,
                username: response.username,
                user_avatar: response.user_avatar,
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

    const handleMediaUpload = (event) => {
        imageFile.value = event.target.files[0];
    };

    const handleAudioUpload = (event) => {
        audioFile.value = event.target.files[0];
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
            audio: null,
        };
        imageFile.value = null;
    };

    const handleSubmit = async () => {
    try {
        loading.value = true;

        const { $directus } = useNuxtApp();
        
        // Prepare update data
        const updateData = {
            title: postData.value.title,
            type: postData.value.type,
            status: postData.value.status,
            content: postData.value.content,
        };

        // Handle image upload if there's a new image
        if (imageFile.value) {
            const uploadedFiles = await uploadFiles({
                imageFile: imageFile.value,
            });
            updateData.image = uploadedFiles.imageId;
        }

        // Update the post using Directus updateItem
        const updatedPost = await $directus.request(
            updateItem('posts', route.params.id, updateData)
        );

        if (updatedPost) {
            // Refresh the post data
            await fetchPostData();
            
            // Show success message
            alert('Post updated successfully');
        } else {
            throw new Error('Failed to update post');
        }

    } catch (error) {
        console.error('Error updating post:', error);
        alert('Error updating post: ' + error.message);
    } finally {
        loading.value = false;
    }
};


    // Add these new functions for delete functionality
    const confirmDelete = () => {
        deleteDialog.value = true;
    };

    const deletePost = async () => {
        try {
            deleteLoading.value = true;
            const {
                $directus
            } = useNuxtApp();

            // Delete the post using the imported deleteItem function
            await $directus.request(deleteItem('posts', route.params.id));

            // Close the delete dialog
            deleteDialog.value = false;

            // Show success message
            alert('Post deleted successfully');

            // Redirect to posts page
            navigateTo('/social/newsfeed');
        } catch (error) {
            console.error('Error deleting post:', error);
            alert('Error deleting post: ' + error.message);
        } finally {
            deleteLoading.value = false;
        }
    };
</script>