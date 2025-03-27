
export const getActivity = async () => {
  const config = useRuntimeConfig();
  try {
    const activity = await $fetch(`${config.public.wordpressUrl}/wp-json/buddypress/v1/activity`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.public.wordpressToken}`
      }
    });
    return activity;
  } catch (error) {
    console.error('Error fetching activity:', error);
    return [];
  }
};

export const getActivityById = async (id) => {
  const config = useRuntimeConfig();
  try {
    const activity = await $fetch(`${config.public.wordpressUrl}/wp-json/buddypress/v1/activity/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.public.wordpressToken}`
      }
    });
    return activity;
  } catch (error) {
    console.error('Error fetching activity:', error);
    return [];
  }
};