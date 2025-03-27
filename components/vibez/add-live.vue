<template>
    <div>
        <v-row justify="center" style="position: relative; top: 20px;">
            <v-card>
                <form @submit.prevent="createNewShort">
                    <v-toolbar dark color="primary">
                        <v-card-title>
                            <span class="text-h6">Create a new Vibe</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field v-model="shortData.name" id="shortName" label="Name*"
                                        required />
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="shortData.type" label="What type of vibe is this?"
                                        :items="['Default', 'Live', 'Eats']" />
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="shortData.status" label="Is this vibe public or private?"
                                        :items="['Published', 'Private', 'Draft']" />
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="shortData.age_requirement" label="What is the Age Requirement?"
                                        :items="['Safe for Kids', 'Over 18', 'Everyone']" />
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="shortData.departments"
                                        label="What department would this Vibe belong to?" :items="departmentOptions"
                                        item-title="title" item-value="value"
                                        :rules="[(v) => !!v || 'Department is required']"
                                        @change="(val) => console.log('Selected department:', val)" />
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
                            Create Vibe
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
        useRoute
    } from 'vue-router';
    import uploadFiles from '@/composables/cms/content/uploadFiles';
    import createShort from '@/composables/cms/shorts/createShort';

    const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: departments
    } = await useAsyncData('departments', () => {
        return $directus.request($readItems('departments'))
    })

    const {
            data: options
        } = await useAsyncData('options', () => {
            return $directus.request($readItems('shorts', {
                fields: ['*', {
                    '*': ['*']
                }]
            }))
        })

    const props = defineProps({
        departments_id: {
            type: String,
            required: true
        }
    });

    // Modified to handle nested department-department relationship
    const departmentOptions = computed(() => {
        if (!departments.value) return []

        return departments.value.map(department => ({
            title: department.name, // Vuetify uses 'title' for display text
            value: department.id, // The actual value that will be saved
        }))
    })

    const route = useRoute();

    const id = route.params.id;

    const shortData = ref({
        name: '',
        type: '',
        status: '',
        description: '',
        duration: '',
        video: null,
        thumbnail: null,
        age_requirement: '',
        creator: userDisplayName.value,
        departments: null,
    });

    // Add these refs for file handling
    const videoFile = ref(null);
    const imageFile = ref(null);
    const dialog = ref(false);
    const location = ref('bottom');

    const handleThumbnailUpload = (event) => {
        imageFile.value = event.target.files[0];
    };

    const handleVideoUpload = (event) => {
        videoFile.value = event.target.files[0];
    };

    const createNewShort = async () => {
        try {
            // Upload files if any
            const uploadedFiles = await uploadFiles({
                imageFile: imageFile.value,
                documentFile: videoFile.value
            });

            // Update vibe data with uploaded files
            if (uploadedFiles) {
                shortData.value.thumbnail = uploadedFiles.imageId;
                shortData.value.video = uploadedFiles.documentId
            }

            // Set departments_id in shortData
            //shortData.value.departments_id = props.departments_id;

            // Create the vibe with department relationship
            const short = await createShort(shortData.value);

            console.log('Created Vibe:', short);

            // Emit event to refresh parent component
            emit('vibe-created', short);

            // Close dialog and reset form
            dialog.value = false;
            reset();

            // Optional: Redirect to the shorts page
            router.push(`/social/vibez/${props.departments_id}`);
        } catch (error) {
            console.error('Error creating vibe:', error);
            // Add error handling here
        }
    };

    watch(() => props.departments_id, (newDepartmentId) => {
        shortData.value.departments_id = newDepartmentId;
    });

    
</script>