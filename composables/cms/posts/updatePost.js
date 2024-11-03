// composables/updatePost.js
import { updateItem } from '@directus/sdk';

export default async function updatePost(spaceId, spaceData) {
    const { $directus } = useNuxtApp();
  
    try {
      const post = await $directus.request(updateItem('posts', spaceId));
      return post;
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  }
  