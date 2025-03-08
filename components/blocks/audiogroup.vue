<template>
    <div>
        <v-card class="mx-auto">
            <v-row>
                <v-col cols="12">
                    <v-card color="info">
                        <v-toolbar color="transparent">
                            <v-toolbar-title>{{ post?.title }}</v-toolbar-title>

                            <v-spacer></v-spacer>

                            <div>
                                <v-menu>
                                    <template v-slot:activator="{ props }">
                                        <v-btn color="white" v-bind="props" icon="fas fa-ellipsis-vertical"></v-btn>
                                    </template>
                                    <v-list>
                                        <v-list-item>
                                            <v-list-item-title><v-btn variant="text" @click="confirmDelete"
                                                    :loading="deleteLoading">Delete This
                                                    Post</v-btn></v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </div>
                        </v-toolbar>
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-subtitle>@{{ post?.username || 'Unknown User' }}</v-card-subtitle>

                                <v-card-subtitle>{{ post?.content }}</v-card-subtitle>

                                <v-card-actions>
                                    <audio :src="post?.file?.filename_disk" controls></audio>
                                </v-card-actions>
                            </div>

                            <v-avatar class="ma-3" rounded="0" size="125">
                                <NuxtImg loading="lazy" :src="post?.image?.filename_disk" :alt="post?.title || 'No Title'" />
                            </v-avatar>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
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
        updateItem,
        deleteItem
    } from '@directus/sdk';
    import {
        useRouter
    } from 'vue-router'

    // Add these new refs for delete functionality
    const deleteDialog = ref(false);
    const deleteLoading = ref(false);
    const route = useRoute();

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

    const props = defineProps({
        post: {
            type: Object,
            required: true,
        },
    });

    const {
        post
    } = props;
</script>