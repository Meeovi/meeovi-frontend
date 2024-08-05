import { useRuntimeConfig } from '#imports';

export const getGroups = async () => {
  const config = useRuntimeConfig();
  try {
    const groups = await $fetch(`${config.public.wordpressUrl}/wp-json/buddypress/v1/groups`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.public.wordpressToken}`
      }
    });
    return groups;
  } catch (error) {
    console.error('Error fetching groups:', error);
    return [];
  }
};

export const getGroupById = async (id) => {
  const config = useRuntimeConfig();
  try {
    const group = await $fetch(`${config.public.wordpressUrl}/wp-json/buddypress/v1/groups/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.public.wordpressToken}`
      }
    });
    return group;
  } catch (error) {
    console.error('Error fetching group:', error);
    return [];
  }
};