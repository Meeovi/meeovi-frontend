// composables/useAuth.ts
import { ref } from 'vue';
import { useRuntimeConfig } from '#app';

export const useAuth = () => {
  const config = useRuntimeConfig();
  const token = ref<string | null>(null);

  const login = async () => {
    try {
      const response = await $fetch<{ token: string }>('/jwt-auth/v1/token', {
        method: 'POST',
        baseURL: config.public.wordpressUrl,
        body: {
          username: config.wpApiUsername,
          password: config.wpApiPassword,
        },
      });
      token.value = response.token;
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return { token, login };
};
