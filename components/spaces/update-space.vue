<template>
  <div>
      <v-row justify="center">
          <v-card>
            <form @submit.prevent="handleSubmit">
                  <v-toolbar dark color="primary">
                      <v-btn icon dark @click="dialog = false">
                          <v-icon icon="fas fa-circle-xmark"></v-icon>
                      </v-btn>
                      <v-card-title>
                          <span class="text-h6">Update Space</span>
                      </v-card-title>
                  </v-toolbar>
                  <v-card-text>
                      <v-container>
                          <v-row>
                              <v-col cols="12">
                                  <v-text-field v-model="spaceData.name" id="spaceName" label="Space Name*" required />
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
                                  <v-textarea v-model="spaceData.description" label="Description" id="spaceDescription" />
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
                      <v-btn color="blue-darken-1" variant="text" @click="confirmDelete" :loading="deleteLoading">
                          Delete
                      </v-btn>
                      <v-btn color="blue-darken-1" variant="text" @click="resetForm = false">
                          Reset
                      </v-btn>
                      <v-btn color="blue-darken-1" variant="text" type="submit">
                          Update Space
                      </v-btn>
                  </v-card-actions>
              </form>
          </v-card>
      </v-row>

      <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="deleteDialog" max-width="500px">
            <v-card>
                <v-card-title class="text-h5">Delete Space</v-card-title>
                <v-card-text>
                    Are you sure you want to delete this space? This action cannot be undone.
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="deleteDialog = false">
                        Cancel
                    </v-btn>
                    <v-btn color="error" variant="text" @click="deleteSpace" :loading="deleteLoading">
                        Delete
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { readItem, deleteItem, updateItem } from '@directus/sdk'; // Add this import at the top
import uploadFiles from '@/composables/cms/content/uploadFiles';
import updateSpace from '@/composables/cms/spaces/updateSpace';

const route = useRoute();
const router = useRouter();

// Add these new refs for delete functionality
const deleteDialog = ref(false);
const deleteLoading = ref(false);

const spaceData = ref({
    id: '', // Add this to store the space ID
    name: '',
    type: '',
    status: '',
    description: '',
    image: null,
});

const dialog = ref(false);
const includeFiles = ref(true);
const imageFile = ref(null);
const loading = ref(false);

// Function to fetch existing space data
const fetchSpaceData = async () => {
    try {
        const { $directus, $readItem } = useNuxtApp();
        const spaceId = route.params.id; // Assuming you're passing the ID in the route
        const response = await $directus.request(readItem('spaces', spaceId));
        
        // Populate the form with existing data
        spaceData.value = {
            id: response.id,
            name: response.name,
            type: response.type,
            status: response.status,
            description: response.description,
            image: response.image
        };
    } catch (error) {
        console.error('Error fetching space:', error);
    }
};

// Load existing data when component mounts
onMounted(() => {
    if (route.params.id) {
        fetchSpaceData();
    }
});

const handleImageUpload = (event) => {
    imageFile.value = event.target.files[0];
};

const resetForm = () => {
    spaceData.value = {
        name: '',
        type: '',
        status: '',
        description: '',
        image: null,
    };
    imageFile.value = null;
};

const handleSubmit = async () => {
    try {
        loading.value = true;
        const { $directus } = useNuxtApp();

        // Handle image upload if there's a new image
        if (imageFile.value) {
            const uploadedFiles = await uploadFiles({
                imageFile: imageFile.value,
            });
            spaceData.value.image = uploadedFiles.imageId;
        }

        // Update the space using Directus SDK directly
        const updatedSpace = await $directus.request(
            updateItem('spaces', route.params.id, {
                name: spaceData.value.name,
                type: spaceData.value.type,
                status: spaceData.value.status,
                description: spaceData.value.description,
                image: spaceData.value.image,
            })
        );

        if (updatedSpace) {
            // Verify the update was successful
            await fetchSpaceData(); // Refresh the data
            alert('Space updated successfully');
            navigateTo('/social/spaces'); // Adjust this path as needed
        }
    } catch (error) {
        console.error('Error updating space:', error);
        alert('Error updating space: ' + error.message);
    } finally {
        loading.value = false;
    }
};


// Add these new functions for delete functionality
const confirmDelete = () => {
    deleteDialog.value = true;
};

const deleteSpace = async () => {
    try {
        deleteLoading.value = true;
        const { $directus } = useNuxtApp();
        
        // Delete the space using the imported deleteItem function
        await $directus.request(deleteItem('spaces', route.params.id));
        
        // Close the delete dialog
        deleteDialog.value = false;
        
        // Show success message
        alert('Space deleted successfully');
        
        // Redirect to spaces page
        navigateTo('/social/spaces');
    } catch (error) {
        console.error('Error deleting space:', error);
        alert('Error deleting space: ' + error.message);
    } finally {
        deleteLoading.value = false;
    }
};

const validateForm = () => {
    if (!spaceData.value.name) {
        alert('Space name is required');
        return false;
    }
    return true;
};
</script>