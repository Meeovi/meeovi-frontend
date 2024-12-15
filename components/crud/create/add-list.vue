<template>
    <div>
        <v-row justify="center">
            <v-dialog v-model="dialog" :scrim="false" transition="dialog-bottom-transition">
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" variant="text">
                        <v-icon start icon="fas fa-plus"></v-icon>Create List
                    </v-btn>
                </template>
                <v-card>
                    <form>
                        <v-toolbar dark color="info">
                            <v-btn icon dark @click="dialog = false">
                                <v-icon icon="fas fa-circle-xmark"></v-icon>
                            </v-btn>
                            <v-card-title>
                                <span class="text-h6">Create a new List</span>
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
                                        <v-file-input @change="handleImageUpload" clearable density="compact"
                                            prepend-icon="fas fa-image" accept="image/*" label="Image for List"
                                            variant="solo-inverted" />
                                    </v-col>
                                    <v-col cols="12">
                                        <v-textarea v-model="listData.description"
                                            label="List Description"></v-textarea>
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
                            <v-btn color="blue-darken-1" variant="text" type="submit" @click="reset = false">
                                Reset
                            </v-btn>
                            <v-btn color="blue-darken-1" variant="text" type="submit" @click="createNewList">
                                Create
                            </v-btn>
                        </v-card-actions>
                    </form>
                </v-card>
            </v-dialog>
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
    import createList from '@/composables/cms/lists/createList';

    const listData = ref({
        name: '',
        type: '',
        status: '',
        description: '',
        coverFile: null,
    })

    const dialog = ref(false);
    const includeFiles = ref(true);
    const enabled = ref(false);

    const imageFile = ref(null);

    const handleImageUpload = (event) => {
        imageFile.value = event.target.files[0];
    };

    const createNewList = async () => {
        try {
            const uploadedFiles = await uploadFiles({
                imageFile: imageFile.value,
            });

            listData.value.image = uploadedFiles.imageId;

            const list = await createList(listData.value);
            console.log('Created List:', list);
        } catch (error) {
            console.error('Error creating list:', error);
        }
    };
</script>