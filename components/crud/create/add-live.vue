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
                        <v-btn color="blue-darken-1" variant="text" type="submit" @click="createNewShort">
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
    import uploadFiles from '@/composables/cms/content/uploadFiles';
    import createShort from '@/composables/cms/shorts/createShort';
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

    const shortData = ref({
        name: '',
        description: '',
        type: '',
        status: '',
        duration: '',
        video_url: '',
        age_requirement: '',
        video: '',
        thumbnail: null,
        host: userDisplayName,
        spaces: [{
            spaces_id: {
                id: id
            }
        }], // Initialize with the spaces_id from props
    })

    const dialog = ref(false);
    const location = ref('bottom');

    const imageFile = ref(null);
    const documentFile = ref(null);

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

    const handleThumbnailUpload = (event) => {
        imageFile.value = event.target.files[0];
    };

    const handleVideoUpload = async (event) => {
        videoFile.value = event.target.files[0];
        if (videoFile.value) {
            try {
                const duration = await getVideoDuration(videoFile.value);
                shortData.value.duration = Math.round(duration);
                console.log('Video duration:', shortData.value.duration);
            } catch (error) {
                console.error('Error getting video duration:', error);
                alert(error);
            }
        }
    };

    const createNewShort = async () => {
        try {
            loading.value = true;
            const {
                $directus
            } = useNuxtApp();

            let uploadedFiles = {};
            let videoDuration = shortData.value.duration; // Keep the existing duration as fallback

            if (videoFile.value || imageFile.value) {
                uploadedFiles = await uploadFiles({
                    videoFile: videoFile.value,
                    imageFile: imageFile.value
                });

                // Calculate video duration if a new video file is uploaded
                if (videoFile.value) {
                    try {
                        const duration = await getVideoDuration(videoFile.value);
                        videoDuration = Math.round(duration);
                        console.log('New video duration:', videoDuration);
                    } catch (error) {
                        console.error('Error getting video duration:', error);
                        // Don't throw here, we'll use the existing duration
                    }
                }
            }

            // Update the short using Directus SDK
            const createdShort = await $directus.request(
                createItem('shorts', route.params.id, {
                    name: shortData.value.name,
                    type: shortData.value.type,
                    status: shortData.value.status,
                    description: shortData.value.description,
                    video: uploadedFiles.videoId || shortData.value.video,
                    duration: videoDuration, // Use the calculated duration or existing one
                    video_url: shortData.value.video_url,
                    age_requirement: shortData.value.age_requirement,
                    thumbnail: uploadedFiles.imageId || shortData.value.thumbnail,
                })
            );

            if (createdShort) {
                await fetchShortData(); // Refresh the data
                alert('Short created successfully');
                dialog.value = false; // Close the dialog
                window.location.reload(); // Refresh the page
            }
        } catch (error) {
            console.error('Error create short:', error);
            alert('Error create short: ' + error.message);
        } finally {
            loading.value = false;
        }
    };

    // Add watch to update spaces_id if props change
    watch(() => props.spaces_id, (newSpaceId) => {
        shortData.value.spaces_id = newSpaceId;
    });
</script>