// composables/createContact.js
import { createItem } from '@directus/sdk';

export default async function createContact(userData) {
    const route = useRoute();

    const id = route.params.id;
    const { $directus } = useNuxtApp();
  
    try {
      const user = await $directus.request(createItem('users', [
        {
          first_name: userData.first_name,
          last_name: userData.last_name,
          description: userData.description,
          title: userData.title,
          email: userData.email,
          location: userData.location,
          language: userData.language,
          email_notifications: userData.email_notifications,
          status: userData.status,
          tags: userData.tags,
          password: userData.password,
          role: userData.role,
          avatar: null,
          videos: userData.videos,
          external_identifier: userData.external_identifier
        }
      ]));
      return user;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }
  