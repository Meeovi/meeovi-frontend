const apiUrl = process.env.API_URL || 'https://meeovi.meeovicms.com'
const wordpressToken = process.env.WORDPRESS_TOKEN ||
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21lZW92aS5tZWVvdmljbXMuY29tIiwiaWF0IjoxNzE5MTI0MTA1LCJuYmYiOjE3MTkxMjQxMDUsImV4cCI6MTcxOTcyODkwNSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.ldhiVbkDJL2Z4rQD0R-qnAd89qS3QW--_U7C_kuLxK0'

export const getGroups = async () => {
  try {
    const groups = await $fetch(`${apiUrl}/wp-json/buddypress/v1/groups`, {
      headers: {
        'Authorization': `Bearer ${wordpressToken}`
      }
    });
    return groups;
  } catch (error) {
    console.error('Error fetching groups:', error);
    return [];
  }
};

export const getGroupById = async (id) => {
  try {
    const group = await $fetch(`${apiUrl}/wp-json/buddypress/v1/groups/${id}`, {
      headers: {
        'Authorization': `Bearer ${wordpressToken}`
      }
    });
    return group;
  } catch (error) {
    console.error('Error fetching group:', error);
    return [];
  }
};