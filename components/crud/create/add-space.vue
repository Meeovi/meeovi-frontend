<template>
    <div>
        <v-row justify="center">
            <v-card>
                <form>
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
                        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                            Close
                        </v-btn>
                        <v-btn color="blue-darken-1" variant="text" type="submit" @click="createNewSpace">
                            Create Space
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-row>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import uploadFiles from '@/composables/cms/content/uploadFiles';
import createSpace from '@/composables/cms/spaces/createSpace';

const spaceData = ref({
    name: '',
    type: '',
    status: '',
    description: '',
    coverFile: null,
    avatarFile: null,
})

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
    const uploadedFiles = await uploadFiles({
      imageFile: imageFile.value,
      documentFile: documentFile.value,
    });

    spaceData.value.image = uploadedFiles.imageId;
    spaceData.value.document = uploadedFiles.documentId;

    const space = await createSpace(spaceData.value);
    console.log('Created Space:', space);
  } catch (error) {
    console.error('Error creating space:', error);
  }
};
</script>
