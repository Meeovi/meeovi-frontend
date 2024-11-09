// composables/createPost.js
import { createItem } from '@directus/sdk';

export default async function createPost(postData) {
    const route = useRoute();

    const id = route.params.id;
    const { $directus } = useNuxtApp();
  
    try {
      const post = await $directus.request(createItem('posts', [
        {
          title: postData.title,
          content: postData.content,
          status: postData.status,
          type: postData.type,
          image: postData.image,
          media: postData.media,
          audio: postData.audio,
          video: postData.video,
          document: postData.document,
          coverFile: null,
          avatarFile: null,
          username: postData.username,
          spaces: [
            {
                spaces_id: {
                    id: id
                }
            }
        ],
        }
      ]));
      return post;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  }
  