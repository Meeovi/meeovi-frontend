// composables/deletePost.js
import { deleteItem } from '@directus/sdk';

export default async function deletePost(postId) {
    const { $directus } = useNuxtApp();
  
    try {
      $directus.request(deleteItem('posts', postId));
      console.log('Post deleted successfully');
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  }
  