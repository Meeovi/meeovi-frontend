<template>
    <div>
        <form @submit.prevent="createActivityAndRefresh">
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
                                prepend-icon="fas fa-image" accept="image/*" label="Image" variant="solo-inverted" />
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
                    <v-btn color="blue-darken-1" variant="text" type="submit" @click="createNewChart">
                        Create
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
    import createChart from '@/composables/cms/charts/createChart';
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

    const chartData = ref({
        name: '',
        description: '',
        type: '',
        status: '',
        image: '',
        reactions: '',
        color: '',
        coverFile: null,
        avatarFile: null,
        creator: userDisplayName,
    })

    const dialog = ref(false);
    const location = ref('bottom');

    const imageFile = ref(null);
    const documentFile = ref(null);

    // Emit event for parent component updates
    const emit = defineEmits(['chart-created']);

    const handleImageUpload = (event) => {
        imageFile.value = event.target.files[0];
    };

    const handleMediaUpload = (event) => {
        documentFile.value = event.target.files[0];
    };

    const createNewChart = async () => {
    try {
        // Upload files if any
        const uploadedFiles = await uploadFiles({
            imageFile: imageFile.value,
            documentFile: documentFile.value,
        });

        // Update chart data with uploaded files
        if (uploadedFiles) {
            chartData.value.image = uploadedFiles.imageId;
            chartData.value.media = uploadedFiles.documentId;
        }

        // Set spaces_id in chartData to link chart to the space
        chartData.value.spaces_id = props.spaces_id;

        // Create the chart with space relationship
        const chart = await createChart(chartData.value);

        console.log('Created Chart:', chart);

        // Emit event to refresh parent component
        emit('chart-created', chart);

        // Close dialog and reset form
        dialog.value = false;
        reset();

        // Optional: Redirect to the space page
        router.push(`/departments/categories/chart/${props.spaces_id}`);
    } catch (error) {
        console.error('Error creating chart:', error);
        // Add error handling here
    }
};

    // Add watch to update spaces_id if props change
    watch(() => props.spaces_id, (newSpaceId) => {
        chartData.value.spaces_id = newSpaceId;
    });
</script>