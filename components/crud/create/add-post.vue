<template>
    <div>
        <form @submit.prevent="createActivityAndRefresh">
            <v-card>
                <v-card-text>
                    <v-text-field v-model="postData.title" id="postName" label="Post Name*" required />
                    <v-textarea v-model="postData.content" label="What's happening?*" variant="outlined"
                        required></v-textarea>
                    <v-text-field v-model="postData.spaces" hidden id="postID" />
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
                        <v-col cols="12">
                            <v-file-input @change="handleAudioUpload" chips multiple clearable density="compact"
                                prepend-icon="fas fa-microphone" accept="audio/*" label="Audio" variant="solo-inverted">
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
                    <v-btn color="blue-darken-1" variant="text" type="submit" @click="createNewPost">
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
            reset() {
                this.$refs.form.reset()
            },
        },
    }
</script>

<script setup>
    import {
        ref
    } from 'vue';
    import {
        useRoute,
        useRouter
    } from 'vue-router';
    import uploadFiles from '@/composables/cms/content/uploadFiles';
    import createPost from '@/composables/cms/posts/createPost';
    import {
    useUserStore
  } from '~/stores/user'

  const userStore = useUserStore()
    // Make sure your props are properly defined
    // Update props to include spaces_id
    const props = defineProps({
        spaces_id: {
            type: String,
            required: true
        }
    });

    const userDisplayName = computed(() => {
    return userStore.user?.name || userStore.user?.username || 'User'
  })

    const route = useRoute();

    const id = route.params.id;

    const postData = ref({
        title: '',
        content: '',
        type: '',
        status: '',
        image: '',
        media: '',
        audio: '',
        reactions: '',
        coverFile: null,
        avatarFile: null,
        audioFile: null,
        username: userDisplayName,
        user_avatar: userStore.user?.photoUrl,
        spaces: [
            {
                spaces_id: {
                    id: id
                }
            }
        ], // Initialize with the spaces_id from props
    })

    const dialog = ref(false);
    const location = ref('bottom');

    const imageFile = ref(null);
    const documentFile = ref(null);
    const audioFile = ref(null);

    // Emit event for parent component updates
    const emit = defineEmits(['post-created']);

    const handleImageUpload = (event) => {
        imageFile.value = event.target.files[0];
    };

    const handleMediaUpload = (event) => {
        documentFile.value = event.target.files[0];
    };

    const handleAudioUpload = (event) => {
        audioFile.value = event.target.files[0];
    };

    const createNewPost = async () => {
    try {
        // Upload files if any
        const uploadedFiles = await uploadFiles({
            imageFile: imageFile.value,
            documentFile: documentFile.value,
            audioFile: audioFile.value,
        });

        // Update post data with uploaded files
        if (uploadedFiles) {
            postData.value.image = uploadedFiles.imageId;
            postData.value.media = uploadedFiles.documentId;
            postData.value.audio = uploadedFiles.audioId;
        }

        // Set spaces_id in postData to link post to the space
        postData.value.spaces_id = props.spaces_id;

        // Create the post with space relationship
        const post = await createPost(postData.value);

        console.log('Created Post:', post);

        // Emit event to refresh parent component
        emit('post-created', post);

        // Close dialog and reset form
        dialog.value = false;
        reset();

        // Optional: Redirect to the space page
        router.push(`/social/group/${props.spaces_id}`);
    } catch (error) {
        console.error('Error creating post:', error);
        // Add error handling here
    }
};

    // Add watch to update spaces_id if props change
    watch(() => props.spaces_id, (newSpaceId) => {
        postData.value.spaces_id = newSpaceId;
    });
</script>