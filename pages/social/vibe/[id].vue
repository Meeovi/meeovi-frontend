<template>
    <div class="contentPage">
        <v-row>
            <v-col cols="12">
                <v-card class="mx-auto" max-width="800">
                    <video loading="lazy" id="my-video" class="video-js" controls preload="auto"
                        style="width: 100% !important; height: 50% !important;" loop>
                        <source :src="`${$directus.url}assets/${short?.video?.filename_disk}`" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>


                    <v-card-subtitle class="pt-4">
                        {{ short?.name }}
                    </v-card-subtitle>

                    <v-card-text>
                        <div>Type: {{ short?.type }}</div>

                        <div>Duration: {{ short?.duration }}</div>

                        <div>{{ short?.description }}</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue-darken-1" variant="text" @click="confirmDelete" :loading="deleteLoading">
                            Delete
                        </v-btn>
                        <!--<updateshort :id="shortId" />-->
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12">
                <comments />
            </v-col>
        </v-row>

        <!-- Delete Confirmation Dialog -->
        <v-dialog v-model="deleteDialog" max-width="500px">
            <v-card>
                <v-card-title class="text-h5">Delete Short</v-card-title>
                <v-card-text>
                    Are you sure you want to delete this short? This action cannot be undone.
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="deleteDialog = false">
                        Cancel
                    </v-btn>
                    <v-btn color="error" variant="text" @click="deleteShort" :loading="deleteLoading">
                        Delete
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        result() {
            return {
                shortId: this.$route.params.id,
            }
        },
    }
</script>

<script setup>
    import {
        deleteItem
    } from '@directus/sdk'; // Add this import at the top
    import updateshort from '~/components/contacts/update-contact.vue'
    import comments from '~/components/partials/globals/comments.vue'

    import {
        ref
    } from 'vue'

    const model = ref(null);
    const route = useRoute();
    // Add these new refs for delete functionality
    const deleteDialog = ref(false);
    const deleteLoading = ref(false);

    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: short
    } = await useAsyncData('short', () => {
        return $directus.request($readItem('shorts', route.params.id, {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    useHead({
        title: computed(() => short.value?.name || 'Vibe Page')
    })

    // Add these new functions for delete functionality
    const confirmDelete = () => {
        deleteDialog.value = true;
    };

    const deleteShort = async () => {
        try {
            deleteLoading.value = true;
            const {
                $directus
            } = useNuxtApp();

            // Delete the short using the imported deleteItem function
            await $directus.request(deleteItem('shorts', route.params.id));

            // Close the delete dialog
            deleteDialog.value = false;

            // Show success message
            alert('Short deleted successfully');

            // Redirect to shorts page
            navigateTo('/social/vibez');
        } catch (error) {
            console.error('Error deleting short:', error);
            alert('Error deleting short: ' + error.message);
        } finally {
            deleteLoading.value = false;
        }
    };

    const validateForm = () => {
        if (!shortData.value.name) {
            alert('Short name is required');
            return false;
        }
        return true;
    };

    const props = defineProps({
        vibe: {
            type: Object,
            required: true,
        },
    });
    const {
        vibe
    } = props;
</script>