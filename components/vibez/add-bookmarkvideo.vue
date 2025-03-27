<template>
    <div>
        <v-toolbar title="Bookmark a Video"></v-toolbar>
        <v-form>
            <v-container>
                <v-row>
                    <v-col cols="6">
                        <v-text-field v-model="title" label="Video Name" required></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-combobox label="Category" :items="['California', 'Colorado']"
                            hint="Choose the appropriate video category"></v-combobox>
                    </v-col>
                    <v-col cols="6">
                        <v-file-input clearable label="Video Image"></v-file-input>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field v-model="videoFile" label="Video URL" type="url"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-textarea v-model="content" label="Video Description"></v-textarea>
                    </v-col>
                    <v-btn color="blue-darken-1" variant="text" type="submit" @submit="createVideo">
                        Create
                    </v-btn>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script setup>
   import {
        ref
    } from 'vue'
    import { useRuntimeConfig } from '#imports';
    import video from '~/components/media/video/videojs.vue'

    const config = useRuntimeConfig();
    const dialog = ref(false);
    const notifications = ref(false);
    const sound = ref(true);
    const widgets = ref(false);
    const title = ref('');
    const videoFile = ref('');
    const content = ref('');
    const featuredImage = ref('');
    const errorMessage = ref('');
    const successMessage = ref('');

    const createVideo = async () => {
        try {
            const response = await $fetch(`${config.public.wordpressUrl}/wp-json/wp/v2/video`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${config.public.wordpressToken}`
                },
                body: JSON.stringify({
                    title: title.value,
                    content: content.value,
                    featuredImage: featuredImage.node.sourceUrl.value,
                    videoFile: videoFields.videoFile.node.sourceUrl.value,
                })
            })

            console.log(response);

            if (response.id) {
                successMessage.value = 'Video created successfully!'
                errorMessage.value = ''
            } else {
                throw new Error('Failed to create video')
            }
        } catch (error) {
            console.error('Error creating video:', error);
            if (error.response) {
                console.error('Error response:', error.response);
                if (error.response.status === 403) {
                    errorMessage.value = 'You do not have permission to create a video.'
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
        title: 'Bookmark a Video',
    })
</script>