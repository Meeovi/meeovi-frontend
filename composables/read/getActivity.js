const apiUrl = process.env.API_URL || 'https://meeovi.meeovicms.com'
const wordpressToken = process.env.WORDPRESS_TOKEN ||
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21lZW92aS5tZWVvdmljbXMuY29tIiwiaWF0IjoxNzE4MjkxMTg0LCJuYmYiOjE3MTgyOTExODQsImV4cCI6MTcxODg5NTk4NCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.pER2LWpuRBgMUqqvD6pcZfb185nULQV_dq-ml67AFZc'

export const getActivity = async () => {
  try {
    const activity = await $fetch(`${apiUrl}/wp-json/buddypress/v1/activity`, {
      headers: {
        'Authorization': `Bearer ${wordpressToken}`
      }
    });
    return activity;
  } catch (error) {
    console.error('Error fetching activity:', error);
    return [];
  }
};

export const getActivityById = async (id) => {
  try {
    const activity = await $fetch(`${apiUrl}/wp-json/buddypress/v1/activity/${id}`, {
      headers: {
        'Authorization': `Bearer ${wordpressToken}`
      }
    });
    return activity;
  } catch (error) {
    console.error('Error fetching activity:', error);
    return [];
  }
};