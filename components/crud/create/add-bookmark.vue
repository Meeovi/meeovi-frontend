<template>
    <div>
        <v-row justify="center">
            <v-dialog v-model="dialog" :scrim="false" transition="dialog-bottom-transition">
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props">
                        <v-icon start icon="fas fa-plus"></v-icon>Create Bookmark
                    </v-btn>
                </template>
                <v-card>
                    <form @submit.prevent="createActivityAndRefresh">
                        <v-card>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="6"><v-text-field v-model="bookmarkData.name" id="bookmarkName"
                                            label="Bookmark Name*" required /></v-col>
                                    <v-col cols="6"><v-text-field v-model="bookmarkData.url" id="bookmarkUrl"
                                            label="Bookmark Url*" required /></v-col>
                                    <v-col cols="6">
                                        <v-select v-model="bookmarkData.type" label="What type of bookmark is this?"
                                            :items="['Website', 'Password']" />
                                    </v-col>
                                    <v-col cols="6">
                                        <v-select v-model="bookmarkData.status"
                                            label="Is this bookmark public or private?"
                                            :items="['Public', 'Private']" />
                                    </v-col>
                                    <v-col cols="12">
                                        <v-file-input @change="handleImageUpload" clearable density="compact"
                                            prepend-icon="fas fa-image" accept="image/*" label="Image"
                                            variant="solo-inverted" />
                                    </v-col>
                                    <v-col cols="12"><v-textarea v-model="bookmarkData.note" label="Note"
                                            variant="outlined"></v-textarea></v-col>
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
                                <v-btn color="blue-darken-1" variant="text" type="submit" @click="createNewBookmark">
                                    Create Bookmark
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </form>
                </v-card>
            </v-dialog>
        </v-row>
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
    import createBookmark from '@/composables/cms/bookmarks/createBookmark';
    import {
        useUserStore
    } from '~/stores/user'

    const userStore = useUserStore()

    const userDisplayName = computed(() => {
        return userStore.user?.name || userStore.user?.username || 'User'
    })

    const router = useRouter();

    const bookmarkData = ref({
        name: '',
        url: '',
        type: '',
        status: '',
        image: '',
        note: '',
        coverFile: null,
        username: userDisplayName,
    })

    const dialog = ref(false);
    const location = ref('bottom');

    const imageFile = ref(null);

    // Emit event for parent component updates
    const emit = defineEmits(['bookmark-created']);

    const handleImageUpload = (event) => {
        imageFile.value = event.target.files[0];
    };

    const createNewBookmark = async () => {
        try {
            // Upload files if any
            const uploadedFiles = await uploadFiles({
                imageFile: imageFile.value,
            });

            // Update bookmark data with uploaded files
            if (uploadedFiles) {
                bookmarkData.value.image = uploadedFiles.imageId;
            }

            // Create the bookmark with space relationship
            const bookmark = await createBookmark(bookmarkData.value);

            console.log('Created Bookmark:', bookmark);

            // Emit event to refresh parent component
            emit('bookmark-created', bookmark);

            // Close dialog and reset form
            dialog.value = false;
            reset();

            // Optional: Redirect to the space page
            router.push(`/commerce/lists/`);
        } catch (error) {
            console.error('Error creating bookmark:', error);
            // Add error handling here
        }
    };
</script>