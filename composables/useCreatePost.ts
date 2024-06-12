// composables/useCreatePost.ts
import { useAuth } from '~/composables/useAuth';
import { useRuntimeConfig } from '#app';

export const useCreatePost = () => {
  const { token } = useAuth();
  const config = useRuntimeConfig();

  const createPost = async (title: string, content: string) => {
    if (!token.value) {
      throw new Error('No token available');
    }

    try {
      const response = await $fetch('/posts', {
        method: 'POST',
        baseURL: config.public.wordpressUrl,
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          title,
          content,
          status: 'publish', // or 'draft' if you want to save it as a draft
        },
      });
      return response;
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return { createPost };
};
