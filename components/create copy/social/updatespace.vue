<template>
    <div>
        <v-card elevation="0">
            <form @submit.prevent="updateGroup">
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="name" id="spaceName" label="Space Name*">
                                </v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-select v-model="type" label="What type of space is this?" :items="typeItems">
                                </v-select>
                            </v-col>
                            <v-col cols="6">
                                <v-select v-model="status" label="Is this space public or private?"
                                    :items="statusItems"></v-select>
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
                    <v-btn color="orange-darken-1" variant="text" type="submit" @click="dialog = false" @submit="deleteGroup">
                        Delete Space
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" type="submit" @click="dialog = false">
                        Update Space
                    </v-btn>
                </v-card-actions>
                <div v-if="errorMessage">{{ errorMessage }}</div>
                <div v-if="successMessage">{{ successMessage }}</div>
            </form>
        </v-card>
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
                //wordpressToken: process.env.WORDPRESS_TOKEN
            }
        }
    }
</script>

<script setup>
import { ref } from 'vue'
const route = useRoute();

// Props
const props = defineProps({
    id: {
      type: Object,
      required: true,
    },
  });

  const {
    id
  } = props;

// Access environment variables
const apiUrl = process.env.API_URL || 'https://meeovi.meeovicms.com'
const wordpressToken = process.env.WORDPRESS_TOKEN || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21lZW92aS5tZWVvdmljbXMuY29tIiwiaWF0IjoxNzE4ODk5NDUzLCJuYmYiOjE3MTg4OTk0NTMsImV4cCI6MTcxOTUwNDI1MywiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.LZhiDr1iYKF8qSwVZ5ZUsPfuObwCsSO3oN5tXvxGHdg'

const name = ref('');
const type = ref('');
const description = ref('');
const attachmentCover = ref('');
const attachmentAvatar = ref('');
const errorMessage = ref('');
const successMessage = ref('')
const typeItems = ref('Default', 'Audio', 'Video');
const statusItems = ref('Public', 'Private', 'Hidden')

const updateGroup = async () => {
  try {
    const response = await $fetch(`${apiUrl}/wp-json/buddypress/v1/groups/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${wordpressToken}`
      },
      body: JSON.stringify({
        name: name.value,
        description: description.value,
        attachmentCover: attachmentCover.value,
        attachmentAvatar: attachmentAvatar.value,
        type: type.value,
        status: 'public',  // You can set it to 'public', 'private', or 'hidden'
        enable_forum: false  // Set to true if you want to enable forums for the group
      })
    })

    console.log(response);

    if (response.id) {
      successMessage.value = 'Group updated successfully!'
      errorMessage.value = ''
    } else {
      throw new Error('Failed to update group')
    }
  } catch (error) {
    console.error('Error creating group:', error);
    if (error.response) {
      console.error('Error response:', error.response);
      if (error.response.status === 403) {
        errorMessage.value = 'You do not have permission to update a group.'
      } else {
        errorMessage.value = `Error: ${error.response.status} ${error.response.statusText}`
      }
    } else {
      errorMessage.value = error.message
    }
    successMessage.value = ''
  }
}

const deleteGroup = async () => {
  try {
    const response = await $fetch(`${apiUrl}/wp-json/buddypress/v1/groups/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${wordpressToken}`
      },
    })
    console.log('Group deleted:', response)
    router.push('/social/spaces');
  } catch (error) {
    console.error('Error deleting group:', error)
  }
}

const onFileChange = (type, event) => {
  const file = event.target.files[0]
  if (type === 'cover') {
    attachmentCover.value = file
  } else if (type === 'avatar') {
    attachmentAvatar.value = file
  }
}
</script>