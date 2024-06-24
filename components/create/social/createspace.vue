<template>
    <div>
    <v-row justify="center">
        <v-dialog v-model="dialog" :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" stacked prepend-icon="fas fa-plus" text="Create A Space" size="150" variant="flat" style="height: 321px; margin-top: 27px;"></v-btn>
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
                    <div v-if="errorMessage">{{ errorMessage }}</div>
                    <div v-if="successMessage">{{ successMessage }}</div>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                apiUrl: process.env.API_URL,
                wordpressToken: process.env.WORDPRESS_TOKEN
            }
        }
    }
</script>

<script setup>
import { ref } from 'vue'

// Access environment variables
const apiUrl = process.env.API_URL || 'https://meeovi.meeovicms.com'
const wordpressToken = process.env.WORDPRESS_TOKEN || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21lZW92aS5tZWVvdmljbXMuY29tIiwiaWF0IjoxNzE4MjkxMTg0LCJuYmYiOjE3MTgyOTExODQsImV4cCI6MTcxODg5NTk4NCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.pER2LWpuRBgMUqqvD6pcZfb185nULQV_dq-ml67AFZc'

const name = ref('');
const description = ref('');
const attachmentCover = ref('');
const attachmentAvatar = ref('');
const errorMessage = ref('');
const successMessage = ref('');
const typeItems = ref('Default', 'Audio', 'Video');
const statusItems = ref('Public', 'Private', 'Hidden')

const createGroup = async () => {
  try {
    const response = await $fetch(`${apiUrl}/wp-json/buddypress/v1/groups`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${wordpressToken}`
      },
      body: JSON.stringify({
        name: name.value,
        description: description.value,
        attachmentCover: attachmentCover.value,
        attachmentAvatar: attachmentAvatar.value,
        status: 'public',  // You can set it to 'public', 'private', or 'hidden'
        enable_forum: false  // Set to true if you want to enable forums for the group
      })
    })

    console.log(response);

    if (response.id) {
      successMessage.value = 'Group created successfully!'
      errorMessage.value = ''
    } else {
      throw new Error('Failed to create group')
    }
  } catch (error) {
    console.error('Error creating group:', error);
    if (error.response) {
      console.error('Error response:', error.response);
      if (error.response.status === 403) {
        errorMessage.value = 'You do not have permission to create a group.'
      } else {
        errorMessage.value = `Error: ${error.response.status} ${error.response.statusText}`
      }
    } else {
      errorMessage.value = error.message
    }
    successMessage.value = ''
  }
}
</script>