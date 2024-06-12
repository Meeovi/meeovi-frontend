<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create a Space
                </v-btn>
            </template>
            <v-card>
                <form @submit.prevent="createGroup">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Space</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field v-model="name" id="spaceName" label="Space Name*" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="type" label="What type of space is this?" :items="typeItems"></v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="status" label="Is this space public or private?" :items="statusItems"></v-select>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="description" label="Description" id="spaceDescription">
                                    </v-textarea>
                                </v-col>
                                <v-col cols="6">
                                    <v-file-input @change="onFileChange('cover', $event)" clearable density="compact"
                                        prepend-icon="fas fa-image" accept="image/*" label="Image for Banner"
                                        variant="solo-inverted"></v-file-input>
                                </v-col>
                                <v-col cols="6">
                                    <v-file-input @change="onFileChange('avatar', $event)" clearable density="compact"
                                        prepend-icon="fas fa-image" accept="image/*" label="Image for Avatar"
                                        variant="solo-inverted"></v-file-input>
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
                        <v-btn color="blue-darken-1" variant="text" type="submit" @click="dialog = false">
                            Create Space
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
            }
        }
    }
</script>

<script setup>
import { ref } from 'vue'

// Reactive data for form fields
const name = ref('');
const description = ref('');
const status = ref('public'); // Default value
const type = ref('default'); // Add type if needed

// Select items for status and type
const statusItems = ['public', 'private', 'hidden'];
const typeItems = ['Default', 'Audio', 'Video']; // Add actual types if needed

// Using an environment variable for the API URL
const apiUrl = 'https://meeovi.meeovicms.com';
//const apiToken = process.env.NUXT_PUBLIC_API_TOKEN

const createGroup = async () => {
  try {
    const response = await $fetch(`${apiUrl}/buddypress/v1/groups`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //'Authorization': `Bearer ${apiToken}`
      },
      body: JSON.stringify({
        name: name.value,
        description: description.value,
        status: status.value,
        type: type.value
        // Add any other fields as needed
      })
    });

    console.log('Group Created:', response);
  } catch (error) {
    console.error('Error creating group:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    }
  }
}

// Function to handle file changes
const onFileChange = (type, event) => {
  const file = event.target.files[0];
  if (file) {
    // Handle file upload
    console.log(`${type} file selected:`, file);
  }
}
</script>