<template>
    <div>
        <v-row justify="center" style="position: relative; top: 20px;">
            <v-card>
                <form @submit.prevent="createNewShort">
                    <v-toolbar dark color="primary">
                        <v-card-title>
                            <span class="text-h6">Create a new Short</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field v-model="shortData.name" id="shortName" label="Short Name*"
                                        required />
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="shortData.type" label="What type of short is this?"
                                        :items="['Default', 'Live', 'Eats']" />
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="shortData.status" label="Is this short public or private?"
                                        :items="['Published', 'Private', 'Draft']" />
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="shortData.age_requirement" label="What is the Age Requirement?"
                                        :items="['Everyone', '18+', '16+']" />
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="shortData.description" label="Description"
                                        id="shortDescription" />
                                </v-col>
                                <v-col cols="6">
                                    <v-file-input @change="handleVideoUpload" clearable density="compact"
                                        prepend-icon="fas fa-video" accept="video/*" label="Video File"
                                        variant="solo-inverted" />
                                </v-col>
                                <v-col cols="6">
                                    <v-file-input @change="handleThumbnailUpload" clearable density="compact"
                                        prepend-icon="fas fa-image" accept="image/*" label="Image for Video"
                                        variant="solo-inverted" />
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue-darken-1" variant="text" type="submit">
                            Create Short
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-row>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue';
    import {
        useRouter
    } from 'vue-router';
    //import uploadFiles from '@/composables/cms/content/uploadFiles';
    import createShort from '@/composables/cms/shorts/createShort';
    import {
        createItem,
        uploadFiles
    } from '@directus/sdk';
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
    const loading = ref(false);

    const id = route.params.id;

    const shortData = ref({
        name: '',
        description: '',
        type: '',
        status: '',
        duration: '',
        video_url: '',
        age_requirement: '',
        video: null,
        thumbnail: null,
        creator: userDisplayName,
        spaces: [{
            spaces_id: {
                id: id
            }
        }], // Initialize with the spaces_id from props
    })

    const dialog = ref(false);
    const location = ref('bottom');

    const imageFile = ref(null);
    const videoFile = ref(null);

    const getVideoDuration = (file) => {
        return new Promise((resolve, reject) => {
            const video = document.createElement('video');
            video.preload = 'metadata';

            video.onloadedmetadata = function () {
                window.URL.revokeObjectURL(video.src);
                resolve(video.duration);
            }

            video.onerror = function () {
                reject("Invalid video. Please select a valid video file.");
            }

            video.src = URL.createObjectURL(file);
        });
    }

    // Emit event for parent component updates
    const emit = defineEmits(['short-created']);

    // File handling functions
    const handleVideoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Check file type
            if (!file.type.startsWith('video/')) {
                alert('Please upload a valid video file');
                return;
            }
            // Check file size (e.g., 100MB limit)
            if (file.size > 100 * 1024 * 1024) {
                alert('Video file size should be less than 100MB');
                return;
            }
            videoFile.value = file;
        }
    };

    const handleThumbnailUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Check file type
            if (!file.type.startsWith('image/')) {
                alert('Please upload a valid image file');
                return;
            }
            // Check file size (e.g., 15MB limit)
            if (file.size > 15 * 1024 * 1024) {
                alert('Image file size should be less than 15MB');
                return;
            }
            imageFile.value = file;
        }
    };

    const createNewShort = async () => {
        try {
            loading.value = true;
            const {
                $directus
            } = useNuxtApp();

            let videoFileId = null;
            let thumbnailFileId = null;
            let videoDuration = shortData.value.duration;

            // Handle file uploads first
            if (videoFile.value || imageFile.value) {
                try {
                    if (videoFile.value) {
                        // Create FormData for video upload
                        const videoFormData = new FormData();
                        videoFormData.append('file', videoFile.value);

                        // Upload video file using the correct Directus method
                        const videoUploadResponse = await $directus.request(
                            uploadFiles(videoFormData)
                        );
                        videoFileId = videoUploadResponse.id;

                        // Get video duration
                        try {
                            const duration = await getVideoDuration(videoFile.value);
                            videoDuration = Math.round(duration);
                        } catch (error) {
                            console.error('Error getting video duration:', error);
                        }
                    }

                    if (imageFile.value) {
                        // Create FormData for thumbnail upload
                        const thumbnailFormData = new FormData();
                        thumbnailFormData.append('file', imageFile.value);

                        // Upload thumbnail file using the correct Directus method
                        const thumbnailUploadResponse = await $directus.request(
                            uploadFiles(thumbnailFormData)
                        );
                        thumbnailFileId = thumbnailUploadResponse.id;
                    }
                } catch (error) {
                    console.error('Error uploading files:', error);
                    throw new Error('Failed to upload files');
                }
            }

            // Create the short with the uploaded file IDs
            const shortPayload = {
                name: shortData.value.name,
                type: shortData.value.type,
                status: shortData.value.status,
                description: shortData.value.description,
                duration: videoDuration,
                video_url: shortData.value.video_url,
                age_requirement: shortData.value.age_requirement,
                creator: userDisplayName.value,
                spaces: shortData.value.spaces
            };

            // Only add video and thumbnail if they were uploaded
            if (videoFileId) {
                shortPayload.video = videoFileId;
            }
            if (thumbnailFileId) {
                shortPayload.thumbnail = thumbnailFileId;
            }

            // Create the short
            const createdShort = await $directus.request(
                createItem('shorts', shortPayload)
            );

            if (createdShort) {
                alert('Short created successfully');
                dialog.value = false;
                window.location.reload();
            }
        } catch (error) {
            console.error('Error creating short:', error);
            alert('Error creating short: ' + error.message);
        } finally {
            loading.value = false;
        }
    };

    // Add watch to update spaces_id if props change
    watch(() => props.spaces_id, (newSpaceId) => {
        shortData.value.spaces_id = newSpaceId;
    });
</script>