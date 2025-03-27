export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();

    const user = await getUser(event); // Get authenticated user
    if (!user) return { error: 'Not authenticated' };
  
    return await $fetch(`${config.public.commerceUrl}/rest/V1/orders`, {
      headers: { Authorization: `Bearer ${useRuntimeConfig().magentoApiToken}` },
    });
  });
  