<template>
    <div>
        <v-dialog v-model="dialog" :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Contact
                </v-btn>
            </template>
            <form @submit.prevent="createContactAndRefresh">
                <v-card>
                    <v-toolbar color="info" title="Create Contact">
                        <v-select v-model="contactData.favorite" style="top: 15px; position: relative;" label="Favorite" :items="['Yes', 'No']"></v-select>
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
                        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                            Close
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="blue-darken-1" variant="text" type="submit" @click="reset = false">
                            Reset
                        </v-btn>
                        <v-btn color="blue-darken-1" variant="text" type="submit" @click="createNewContact">
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </form>
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
    import createContact from '@/composables/cms/contacts/createContact';

    // Make sure your props are properly defined
    // Update props to include spaces_id
    const props = defineProps({
        spaces_id: {
            type: String,
            required: true
        }
    });

    const route = useRoute();

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
        username: userDisplayName,
        spaces: [{
            spaces_id: {
                id: id
            }
        }], // Initialize with the spaces_id from props
    })

    const dialog = ref(false);
    const location = ref('bottom');

    const imageFile = ref(null);
    const documentFile = ref(null);
    const audioFile = ref(null);

    // Emit event for parent component updates
    const emit = defineEmits(['contact-created']);

    const handleImageUpload = (event) => {
        imageFile.value = event.target.files[0];
    };

    const handleMediaUpload = (event) => {
        documentFile.value = event.target.files[0];
    };

    const handleAudioUpload = (event) => {
        audioFile.value = event.target.files[0];
    };

    const createNewContact = async () => {
        try {
            // Upload files if any
            const uploadedFiles = await uploadFiles({
                imageFile: imageFile.value,
                documentFile: documentFile.value,
                audioFile: audioFile.value,
            });

            // Update contact data with uploaded files
            if (uploadedFiles) {
                contactData.value.image = uploadedFiles.imageId;
                contactData.value.media = uploadedFiles.documentId;
                contactData.value.audio = uploadedFiles.audioId;
            }

            // Set spaces_id in contactData to link contact to the space
            contactData.value.spaces_id = props.spaces_id;

            // Create the contact with space relationship
            const contact = await createContact(contactData.value);

            console.log('Created Contact:', contact);

            // Emit event to refresh parent component
            emit('contact-created', contact);

            // Close dialog and reset form
            dialog.value = false;
            reset();

            // Optional: Redirect to the space page
            router.push(`/social/members/${props.spaces_id}`);
        } catch (error) {
            console.error('Error creating contact:', error);
            // Add error handling here
        }
    };
</script>