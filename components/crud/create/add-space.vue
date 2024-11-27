<template>
    <div>
        <v-row justify="center">
            <v-card>
                <form @submit.prevent="createNewSpace">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create a new Space</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-select v-model="spaceData.departments"
                                        label="What department would this Space belong to?" :items="departmentOptions"
                                        item-title="title" item-value="value"
                                        :rules="[(v) => !!v || 'Department is required']"
                                        @change="(val) => console.log('Selected department:', val)" />
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="spaceData.name" id="spaceName" label="Space Name*"
                                        required />
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="spaceData.type" label="What type of space is this?"
                                        :items="['Default', 'Audio', 'Video']" />
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="spaceData.status" label="Is this space public or private?"
                                        :items="['Public', 'Private', 'Hidden']" />
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="spaceData.description" label="Description"
                                        id="spaceDescription" />
                                </v-col>
                                <v-col cols="6">
                                    <v-file-input @change="handleImageUpload" clearable density="compact"
                                        prepend-icon="fas fa-image" accept="image/*" label="Image for Cover"
                                        variant="solo-inverted" />
                                </v-col>
                                <v-col cols="6">
                                    <v-file-input @change="handleAvatarUpload" clearable density="compact"
                                        prepend-icon="fas fa-image" accept="image/*" label="Image for Avatar"
                                        variant="solo-inverted" />
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                            Close
                        </v-btn>
                        <v-btn color="blue-darken-1" variant="text" type="submit">
                            Create Space
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
    import createSpace from '@/composables/cms/spaces/createSpace';
    import {
        useUserStore
    } from '~/stores/user'
    
    const emit = defineEmits(['space-created']);

    const userStore = useUserStore()

    const {
        $directus,
        $readItems
    } = useNuxtApp()

    const router = useRouter();

    const {
        data: departments
    } = await useAsyncData('departments', () => {
        return $directus.request($readItems('departments'))
    })

    const userDisplayName = computed(() => {
        return userStore.user?.name || userStore.user?.username || 'User'
    })

    // Modified to handle nested department-department relationship
    const departmentOptions = computed(() => {
        if (!departments.value) return []

        return departments.value.map(department => ({
            title: department.name, // Vuetify uses 'title' for display text
            value: department.id, // The actual value that will be saved
        }))
    })

    const spaceData = ref({
        name: '',
        type: '',
        status: '',
        description: '',
        coverFile: null,
        avatarFile: null,
        creator: userDisplayName.value,
        departments: null // This will store the selected department ID
    });


    const dialog = ref(false);

    const imageFile = ref(null);
    const documentFile = ref(null);

    const handleImageUpload = (event) => {
        imageFile.value = event.target.files[0];
    };

    const handleAvatarUpload = (event) => {
        documentFile.value = event.target.files[0];
    };

    const createNewSpace = async () => {
        try {
            // Upload files if any
            const uploadedFiles = await uploadFiles({
                imageFile: imageFile.value,
                documentFile: documentFile.value,
            });

            // Update space data with uploaded files
            if (uploadedFiles) {
                spaceData.value.coverFile = uploadedFiles.imageId;
                spaceData.value.avatarFile = uploadedFiles.documentId;
            }

            // Set spaces_id in spaceData to link space to the department
            //spaceData.value.departments;

            // Create the space with space relationship
            const space = await createSpace(spaceData.value);

            console.log('Created Space:', space);

            // Emit event to refresh parent component
            emit('space-created', space);

            // Close dialog and reset form
            dialog.value = false;

            // Refresh the page by navigating to the same route
            await router.push('/social/spaces');

            // If you need to force a refresh after navigation
            window.location.reload();
        } catch (error) {
            console.error('Error creating space:', error);
            // Add error handling here
        }
    };
</script>