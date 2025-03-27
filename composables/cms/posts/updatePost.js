// composables/updatePost.js
import { updateItem } from '@directus/sdk';

export default async function updatePost(postId, postData) {
    const { $directus } = useNuxtApp();
  
    try {
      const post = await $directus.request(updateItem('posts', postId));
      return post;
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  }
  