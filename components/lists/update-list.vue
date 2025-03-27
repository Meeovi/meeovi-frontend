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
                            <span class="text-h6">Create a new Space</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field v-model="listData.name" label="List Name" required></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="listData.type" label="Type"
                                        :items="['List', 'Registry', 'Playlist', 'Todo']"></v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="listData.status" label="Status"
                                        :items="['Public', 'Private']"></v-select>
                                </v-col>
                                <v-col cols="12">
                                    <v-file-input @change="handleImageUpload" clearable
                                        density="compact" prepend-icon="fas fa-image" accept="image/*"
                                        label="Image for List" variant="solo-inverted" />
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="listData.description" label="List Description"></v-textarea>
                                </v-col>
                                <v-col cols="12">
                                    <v-card title="Choose a Product for your List">
                                        <v-card-text>
                                            <v-text-field density="compact" variant="solo"
                                                label="Search Meeovi for products" append-inner-icon="fas fa-search"
                                                single-line hide-details></v-text-field>
                                            <div class="d-flex pa-4">
                                                <v-checkbox-btn v-model="includeFiles" class="pe-2" color="orange">
                                                </v-checkbox-btn>
                                                <!--<NuxtLink :to="`/product/${products.id}`">
                                        <v-card class="ma-4" height="580" width="250" @click="toggle">
                                            <NuxtImg loading="lazy" class="align-end text-white" height="280"
                                                :src="`${products.featuredAsset.preview}`" :alt="products.name" cover />

                                            <v-card-title class="pt-4">
                                                {{ products.name }}
                                            </v-card-title>

                                            <v-card-text>
                                                <div>Sku: {{ products.variants.sku }}</div>
                                            </v-card-text>

                                            <v-card-actions>
                                                <v-card-title>$ {{ products.variants.price }}
                                                </v-card-title>
                                            </v-card-actions>
                                            <div class="d-flex fill-height align-center justify-center">
                                                <v-scale-transition>
                                                    <v-icon v-if="isSelected" color="white" size="48"
                                                        icon="mdi-close-circle-outline"></v-icon>
                                                </v-scale-transition>
                                            </div>
                                        </v-card>
                                    </NuxtLink>-->
                                            </div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-divider class="mt-12"></v-divider>
                    <v-card-actions>
                        <v-btn color="blue-darken-1" variant="text" type="submit" @click="resetForm = false">
                            Reset
                        </v-btn>
                        <v-btn color="blue-darken-1" variant="text" type="submit">
                            Update
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-row>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import uploadFiles from '@/composables/cms/content/uploadFiles';
import updateList from '@/composables/cms/lists/updateList';

const route = useRoute();
const router = useRouter();

const listData = ref({
    id: '', // Add this to store the list ID
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

// Function to fetch existing list data
const fetchListData = async () => {
    try {
        const { $directus, $readItem } = useNuxtApp();
        const listId = route.params.id; // Assuming you're passing the ID in the route
        const response = await $directus.request(readItem('lists', listId));
        
        // Populate the form with existing data
        listData.value = {
            id: response.id,
            name: response.name,
            type: response.type,
            status: response.status,
            description: response.description,
            image: response.image
        };
    } catch (error) {
        console.error('Error fetching list:', error);
    }
};

// Load existing data when component mounts
onMounted(() => {
    if (route.params.id) {
        fetchListData();
    }
});

const handleImageUpload = (event) => {
    imageFile.value = event.target.files[0];
};

const resetForm = () => {
    listData.value = {
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

        // Handle image upload if there's a new image
        if (imageFile.value) {
            const uploadedFiles = await uploadFiles({
                imageFile: imageFile.value,
            });
            listData.value.image = uploadedFiles.imageId;
        }

        // Update the list
        const updatedList = await updateList(route.params.id, {
            name: listData.value.name,
            type: listData.value.type,
            status: listData.value.status,
            description: listData.value.description,
            image: listData.value.image,
        });

        console.log('List updated successfully:', updatedList);
        
        // Show success message (you can implement your preferred notification system)
        alert('List updated successfully');

    } catch (error) {
        console.error('Error updating list:', error);
        alert('Error updating list: ' + error.message);
    } finally {
        loading.value = false;
    }
};
</script>