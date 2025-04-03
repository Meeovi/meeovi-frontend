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
                                    <v-text-field v-model="chartData.name" id="chartName" label="Chart Name*" required />
                                    <v-textarea v-model="chartData.description" label="What's happening?*" variant="outlined"
                                        required></v-textarea>
                                    <v-row>
                                        <v-col cols="6">
                                            <v-select v-model="chartData.type" label="What type of chart is this?"
                                                :items="['Notes', 'News']" />
                                        </v-col>
                                        <v-col cols="6">
                                            <v-select v-model="chartData.status" label="Is this chart public or private?"
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
                                        Delete Chart
                                    </v-btn>
                                    <v-btn color="blue-darken-1" variant="text" type="submit">
                                        Update Chart
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
                <v-card-title class="text-h5">Delete Chart</v-card-title>
                <v-card-text>
                    Are you sure you want to delete this chart? This action cannot be undone.
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="deleteDialog = false">
                        Cancel
                    </v-btn>
                    <v-btn color="error" variant="text" @click="deleteChart" :loading="deleteLoading">
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
    import updateChart from '@/composables/cms/charts/updateChart';
    import { updateItem, deleteItem } from '@directus/sdk';
    import {
        useUserStore
    } from '~/stores/user'
    import {
        useRouter
    } from 'vue-router'

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

    const { user } = useSupabaseAuth()

    const route = useRoute();
    const router = useRouter();

    const chartData = ref({
        id: '', // Add this to store the chart ID
        name: '',
        type: '',
        status: '',
        description: '',
        color: '',
        image: null,
        media: null,
        audio: null,
        username: user?.email,
        space_id: props.space_id, // Initialize with the space_id from props
    });

    const dialog = ref(false);
    const includeFiles = ref(true);
    const imageFile = ref(null);
    const audioFile = ref(null);
    const loading = ref(false);

    // Function to fetch existing chart data
    const fetchChartData = async () => {
        try {
            const {
                $directus,
                $readItem,
            } = useNuxtApp();
            const listId = route.params.id; // Assuming you're passing the ID in the route
            const response = await $directus.request($readItem('musicchart', listId));

            // Populate the form with existing data
            chartData.value = {
                id: response.id,
                name: response.name,
                type: response.type,
                status: response.status,
                description: response.description,
                color: response.color,
                image: response.image,
                audio: response.audio,
                username: response.username
            };
        } catch (error) {
            console.error('Error fetching chart:', error);
        }
    };

    // Load existing data when component mounts
    onMounted(() => {
        if (route.params.id) {
            fetchChartData();
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
        chartData.value = {
            id: '', // Add this to store the chart ID
            name: '',
            type: '',
            status: '',
            description: '',
            color: '',
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
            name: chartData.value.name,
            type: chartData.value.type,
            status: chartData.value.status,
            description: chartData.value.description,
            color: chartData.value.color
        };

        // Handle image upload if there's a new image
        if (imageFile.value) {
            const uploadedFiles = await uploadFiles({
                imageFile: imageFile.value,
            });
            updateData.image = uploadedFiles.imageId;
        }

        // Update the chart using Directus updateItem
        const updatedChart = await $directus.request(
            updateItem('charts', route.params.id, updateData)
        );

        if (updatedChart) {
            // Refresh the chart data
            await fetchChartData();
            
            // Show success message
            alert('Chart updated successfully');
        } else {
            throw new Error('Failed to update chart');
        }

    } catch (error) {
        console.error('Error updating chart:', error);
        alert('Error updating chart: ' + error.message);
    } finally {
        loading.value = false;
    }
};


    // Add these new functions for delete functionality
    const confirmDelete = () => {
        deleteDialog.value = true;
    };

    const deleteChart = async () => {
        try {
            deleteLoading.value = true;
            const {
                $directus
            } = useNuxtApp();

            // Delete the chart using the imported deleteItem function
            await $directus.request(deleteItem('musicchart', route.params.id));

            // Close the delete dialog
            deleteDialog.value = false;

            // Show success message
            alert('Chart deleted successfully');

            // Redirect to charts page
            navigateTo('/social/newsfeed');
        } catch (error) {
            console.error('Error deleting chart:', error);
            alert('Error deleting chart: ' + error.message);
        } finally {
            deleteLoading.value = false;
        }
    };
</script>