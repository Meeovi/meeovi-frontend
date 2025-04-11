<template>
    <div>
        <v-dialog v-model="dialog" :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" text="Update Contact" variant="text">
                </v-btn>
            </template>
            <form @submit.prevent="handleSubmit">
                <v-card>
                    <v-toolbar color="info" title="Update Contact">
                        <v-select v-model="contactData.favorite" style="top: 15px; position: relative;" label="Favorite"
                            :items="['Yes', 'No']"></v-select>
                    </v-toolbar>
                    <v-card-text>
                        <v-row>
                            <v-col cols="4"><v-text-field v-model="contactData.first_name" id="contactName"
                                    label="Contact First Name*" prepend-icon="fas fa-user" required /></v-col>
                            <v-col cols="4"><v-text-field v-model="contactData.middle_name" id="contactMiddleName"
                                    label="Middle Name" prepend-icon="fas fa-user"></v-text-field></v-col>
                            <v-col cols="4"><v-text-field v-model="contactData.last_name" id="contactLastName"
                                    label="Last Name" prepend-icon="fas fa-user"></v-text-field></v-col>

                            <v-col cols="12">
                                <v-expansion-panels>
                                    <v-expansion-panel title="Add more details">
                                        <v-expansion-panel-text>
                                            <v-row>
                                                <v-col cols="6"><v-text-field v-model="contactData.suffix"
                                                        id="contactSuffix" label="Suffix"
                                                        prepend-icon="fas fa-user"></v-text-field></v-col>
                                                <v-col cols="6"><v-text-field v-model="contactData.phonetic_first"
                                                        id="contactPhoneticFirst" label="Phonetic first"
                                                        prepend-icon="fas fa-user"></v-text-field></v-col>
                                                <v-col cols="6"><v-text-field v-model="contactData.phonetic_middle"
                                                        id="contactPhoneticMiddle" label="Phonetic middle"
                                                        prepend-icon="fas fa-user"></v-text-field></v-col>
                                                <v-col cols="6"><v-text-field v-model="contactData.phonetic_last"
                                                        id="contactPhoneticLast" label="Phonetic last"
                                                        prepend-icon="fas fa-user"></v-text-field></v-col>
                                                <v-col cols="6"><v-text-field v-model="contactData.nickname"
                                                        id="contactNickname" label="Nickname"
                                                        prepend-icon="fas fa-user"></v-text-field></v-col>
                                                <v-col cols="6"><v-text-field v-model="contactData.file_as"
                                                        id="contactFileAs" label="File as"
                                                        prepend-icon="fas fa-user"></v-text-field></v-col></v-row>
                                        </v-expansion-panel-text>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-col>

                            <v-col cols="12"><v-text-field v-model="contactData.company" id="contactName"
                                    label="Company" prepend-icon="fas fa-building" /></v-col>

                            <v-col cols="12">
                                <v-expansion-panels>
                                    <v-expansion-panel title="Add more details about company">
                                        <v-expansion-panel-text>
                                            <v-row>
                                                <v-col cols="6"><v-text-field v-model="contactData.job_title"
                                                        id="contactJobTitle" label="Job title"
                                                        prepend-icon="fas fa-user-doctor"></v-text-field></v-col>
                                                <v-col cols="6"><v-text-field v-model="contactData.department"
                                                        id="contactDepartment" label="Department"
                                                        prepend-icon="fas fa-user-doctor"></v-text-field></v-col>
                                            </v-row>
                                        </v-expansion-panel-text>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-col>

                            <v-col cols="6"><v-text-field v-model="contactData.email" id="contactEmail"
                                    label="Contact Email" prepend-icon="fas fa-envelope" /></v-col>
                            <v-col cols="6"><v-text-field v-model="contactData.phone" id="contactPhone"
                                    label="Contact Phone" prepend-icon="fas fa-phone" /></v-col>
                            <v-col cols="6"><v-text-field v-model="contactData.street" id="contactAddress"
                                    label="Contact Address" prepend-icon="fas fa-earth-americas" /></v-col>
                            <v-col cols="6"><v-text-field v-model="contactData.address2" id="contactAddress2"
                                    label="Contact Address 2" prepend-icon="fas fa-earth-americas" /></v-col>
                            <v-col cols="6"><v-text-field v-model="contactData.city" id="contactCity"
                                    label="Contact City" prepend-icon="fas fa-earth-americas" /></v-col>
                            <v-col cols="6"><v-text-field v-model="contactData.state" id="contactState"
                                    label="Contact State" prepend-icon="fas fa-earth-americas" /></v-col>
                            <v-col cols="6"><v-text-field v-model="contactData.zip" id="contactZip" label="Contact Zip"
                                    prepend-icon="fas fa-earth-americas" /></v-col>
                            <v-col cols="6"><v-text-field v-model="contactData.country" id="contactCountry"
                                    label="Contact Country" prepend-icon="fas fa-earth-americas" /></v-col>

                            <v-col cols="6">
                                <v-expansion-panels>
                                    <v-expansion-panel title="Add a Website">
                                        <v-expansion-panel-text>
                                            <v-col cols="12"><v-text-field v-model="contactData.website"
                                                    id="contactWebsite" label="Add a website" type="url"
                                                    prepend-icon="fas fa-computer"></v-text-field></v-col>
                                        </v-expansion-panel-text>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-col>

                            <br />

                            <v-col cols="6">
                                <v-expansion-panels>
                                    <v-expansion-panel title="Add a Birthday">
                                        <v-expansion-panel-text>
                                            <v-col cols="12"><v-text-field v-model="contactData.birthday"
                                                    id="contactBirthday" label="Contact Birthday" type="datetime"
                                                    prepend-icon="fas fa-cake-candles" /></v-col>
                                        </v-expansion-panel-text>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-col>

                            <v-col cols="12"><v-text-field v-model="contactData.related_person"
                                    id="contactRelatedPerson" label="Related Person"
                                    prepend-icon="fas fa-user" /></v-col>

                            <v-col cols="12"><v-text-field v-model="contactData.label" id="contactRelatedPerson"
                                    label="Label" prepend-icon="fas fa-plus" /></v-col>

                            <v-col cols="12"><v-textarea v-model="contactData.notes" label="Notes" variant="outlined"
                                    prepend-icon="fas fa-note-sticky"></v-textarea></v-col>

                            <v-col cols="12">
                                <v-file-input @change="handleImageUpload" clearable density="compact"
                                    prepend-icon="fas fa-image" accept="image/*" label="Image"
                                    variant="solo-inverted" />
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
                            Delete Contact
                        </v-btn>
                        <v-btn color="blue-darken-1" variant="text" type="submit">
                            Update Contact
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </form>
        </v-dialog>

        <!-- Delete Confirmation Dialog -->
        <v-dialog v-model="deleteDialog" max-width="500px">
            <v-card>
                <v-card-title class="text-h5">Delete Contact</v-card-title>
                <v-card-text>
                    Are you sure you want to delete this contact? This action cannot be undone.
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="deleteDialog = false">
                        Cancel
                    </v-btn>
                    <v-btn color="error" variant="text" @click="deleteContact" :loading="deleteLoading">
                        Delete
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
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
    import updateContact from '@/composables/cms/contacts/updateContact';
    import { updateItem, deleteItem } from '@directus/sdk';

    // Make sure your props are properly defined
    // Update props to include spaces_id
    const props = defineProps({
        spaces_id: {
            type: String,
            required: true
        }
    });

    // Add these new refs for delete functionality
    const deleteDialog = ref(false);
    const deleteLoading = ref(false);

    const route = useRoute();

    const { user } = useSupabaseAuth()

    const id = route.params.id;

    const contactData = ref({
        first_name: '',
        last_name: '',
        company: '',
        department: '',
        job_title: '',
        email: '',
        phone: '',
        street: '',
        postcode: '',
        address_two: '',
        po_box: '',
        city: '',
        state: '',
        country: '',
        label: '',
        birthday: null,
        notes: '',
        website: '',
        related_person: '',
        middle_name: '',
        prefix: '',
        suffix: '',
        nickname: '',
        file_as: '',
        phonetic_first: '',
        phonetic_middle: '',
        phonetic_last: '',
        favorite: '',
        image: '',
        coverFile: null,
        avatarFile: null,
        username: user?.name,
        spaces: [{
            spaces_id: {
                id: id
            }
        }], // Initialize with the spaces_id from props
    })

    const dialog = ref(false);
    const location = ref('bottom');
    const loading = ref(false);

    const imageFile = ref(null);
    const documentFile = ref(null);
    const audioFile = ref(null);

    // Function to fetch existing contact data
    const fetchContactData = async () => {
        try {
            const {
                $directus,
                $readItem,
            } = useNuxtApp();
            const listId = route.params.id; // Assuming you're passing the ID in the route
            const response = await $directus.request($readItem('contacts', listId));

            // Populate the form with existing data
            contactData.value = {
                id: response.id,
                first_name: response.first_name,
                last_name: response.last_name,
                company: response.company,
                department: response.department,
                job_title: response.job_title,
                email: response.email,
                phone: response.phone,
                street: response.street,
                postcode: response.postcode,
                address_two: response.address_two,
                po_box: response.po_box,
                city: response.city,
                state: response.state,
                country: response.country,
                label: response.label,
                birthday: response.birthday,
                notes: response.notes,
                website: response.website,
                related_person: response.related_person,
                middle_name: response.middle_name,
                prefix: response.prefix,
                suffix: response.suffix,
                nickname: response.nickname,
                file_as: response.file_as,
                phonetic_first: response.phonetic_first,
                phonetic_middle: response.phonetic_middle,
                phonetic_last: response.phonetic_last,
                favorite: response.favorite,
                image: response.image,
                media: response.media,
                coverFile: null,
                avatarFile: null,
            };
        } catch (error) {
            console.error('Error fetching contact:', error);
        }
    };

    // Load existing data when component mounts
    onMounted(() => {
        if (route.params.id) {
            fetchContactData();
        }
    });

    // Emit event for parent component updates
    const emit = defineEmits(['contact-updated']);

    const handleImageUpload = (event) => {
        imageFile.value = event.target.files[0];
    };

    const handleMediaUpload = (event) => {
        documentFile.value = event.target.files[0];
    };

    const handleAudioUpload = (event) => {
        audioFile.value = event.target.files[0];
    };

    const handleSubmit = async () => {
        try {
            loading.value = true;

            const {
                $directus
            } = useNuxtApp();

            // Prepare update data
            const updateData = {
                first_name: contactData.value.first_name,
                last_name: contactData.value.last_name,
                company: contactData.value.company,
                department: contactData.value.department,
                job_title: contactData.value.job_title,
                email: contactData.value.email,
                phone: contactData.value.phone,
                street: contactData.value.street,
                postcode: contactData.value.postcode,
                address_two: contactData.value.address_two,
                po_box: contactData.value.po_box,
                city: contactData.value.city,
                state: contactData.value.state,
                country: contactData.value.country,
                label: contactData.value.label,
                birthday: contactData.value.birthday,
                notes: contactData.value.notes,
                website: contactData.value.website,
                related_person: contactData.value.related_person,
                middle_name: contactData.value.middle_name,
                prefix: contactData.value.prefix,
                suffix: contactData.value.suffix,
                nickname: contactData.value.nickname,
                file_as: contactData.value.file_as,
                phonetic_first: contactData.value.phonetic_first,
                phonetic_middle: contactData.value.phonetic_middle,
                phonetic_last: contactData.value.phonetic_last,
                favorite: contactData.value.favorite,
                image: contactData.value.image,
                media: contactData.value.media,
                audio: contactData.value.audio,
                video: contactData.value.video,
                document: contactData.value.document,
                coverFile: null,
                avatarFile: null,
                username: contactData.value.username,
            };

            // Handle image upload if there's a new image
            if (imageFile.value) {
                const uploadedFiles = await uploadFiles({
                    imageFile: imageFile.value,
                });
                updateData.image = uploadedFiles.imageId;
            }

            // Update the contact using Directus updateItem
            const updatedContact = await $directus.request(
                updateItem('contacts', route.params.id, updateData)
            );

            if (updatedContact) {
                // Refresh the contact data
                await fetchContactData();

                // Show success message
                alert('Contact updated successfully');
            } else {
                throw new Error('Failed to update contact');
            }

        } catch (error) {
            console.error('Error updating contact:', error);
            alert('Error updating contact: ' + error.message);
        } finally {
            loading.value = false;
        }
    };


    // Add these new functions for delete functionality
    const confirmDelete = () => {
        deleteDialog.value = true;
    };

    const deleteContact = async () => {
        try {
            deleteLoading.value = true;
            const {
                $directus
            } = useNuxtApp();

            // Delete the contact using the imported deleteItem function
            await $directus.request(deleteItem('contacts', route.params.id));

            // Close the delete dialog
            deleteDialog.value = false;

            // Show success message
            alert('Contact deleted successfully');

            // Redirect to contacts page
            navigateTo('/social/members');
        } catch (error) {
            console.error('Error deleting contact:', error);
            alert('Error deleting contact: ' + error.message);
        } finally {
            deleteLoading.value = false;
        }
    };
</script>