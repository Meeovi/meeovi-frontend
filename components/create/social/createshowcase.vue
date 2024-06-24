<template>
    <div>
        <v-card elevation="0">
            <v-toolbar title="Create A Showcase"></v-toolbar>
            <v-form @submit.prevent="createShowcase">
                <v-container>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field v-model="title" label="Showcase Name" required></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-combobox v-model="type" label="Status" :items="['Public', 'Private']"></v-combobox>
                        </v-col>
                        <v-col cols="12">
                            <v-file-input clearable label="Showcase Image"></v-file-input>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea v-model="description" label="Showcase Description"></v-textarea>
                        </v-col>
                        <v-col cols="12">
                            <v-card title="Choose a Product for your Showcase">
                                <v-card-text>
                                    <v-text-field density="compact" variant="solo" label="Search Meeovi for products"
                                        append-inner-icon="fas fa-search" single-line hide-details
                                        @click:append-inner="onClick"></v-text-field>
                                    <v-spacer></v-spacer>
                                    <div class="d-flex pa-4">
                                        <v-checkbox-btn v-model="includeFiles" class="pe-2" color="orange">
                                        </v-checkbox-btn>
                                        <!--<a :href="`/product/${products.id}`">
                                        <v-card class="ma-4" height="580" width="250" @click="toggle">
                                            <img class="align-end text-white" height="280"
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
                                    </a>-->
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>

                <v-divider class="mt-12"></v-divider>
                <v-card-actions>
                    <v-btn color="blue-darken-1" variant="text" type="submit" @click="reset = false">
                        Reset
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" type="submit">
                        Create
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </div>
</template>

<script>
    export default {
        data: () => ({
            dialog: false,
            includeFiles: true,
            enabled: false,
        }),
    }
</script>

<script setup>
    import {
        ref
    } from 'vue'

    // Access environment variables
    const apiUrl = process.env.API_URL || 'https://meeovi.meeovicms.com'
    const wordpressToken = process.env.WORDPRESS_TOKEN ||
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21lZW92aS5tZWVvdmljbXMuY29tIiwiaWF0IjoxNzE4MjkxMTg0LCJuYmYiOjE3MTgyOTExODQsImV4cCI6MTcxODg5NTk4NCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.pER2LWpuRBgMUqqvD6pcZfb185nULQV_dq-ml67AFZc'

    const title = ref('');
    const acf = ref('');
    const ispublic = ref('');
    const description = ref('');
    const type = ref('');
    const products = ref('');
    const owner = ref('');
    const image = ref('');
    const errorMessage = ref('');
    const successMessage = ref('');

    const createShowcase = async () => {
        try {
            const response = await $fetch(`${apiUrl}/wp-json/wp/v2/list`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${wordpressToken}`
                },
                body: JSON.stringify({
                    title: title.value,
                    ispublic: ispublic.value,
                    description: description.value,
                    image: image.value,
                    type: type.value,
                    products: products.value,
                    owner: owner.value,
                    status: 'publish',
                })
            })

            console.log(response);

            if (response.id) {
                successMessage.value = 'Showcase created successfully!'
                errorMessage.value = ''
            } else {
                throw new Error('Failed to create list')
            }
        } catch (error) {
            console.error('Error creating list:', error);
            if (error.response) {
                console.error('Error response:', error.response);
                if (error.response.status === 403) {
                    errorMessage.value = 'You do not have permission to create a list.'
                } else {
                    errorMessage.value = `Error: ${error.response.status} ${error.response.statusText}`
                }
            } else {
                errorMessage.value = error.message
            }
            successMessage.value = ''
        }
    }

    useHead({
        title: 'Create Showcase',
    })
</script>