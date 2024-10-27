import { useRuntimeConfig } from '#imports';

export async function loginToMagento(email, password) {
  const config = useRuntimeConfig();
  try {
    const response = await $fetch(`${config.public.commerceUrl}/rest/V1/integration/customer/token`, {
      method: 'POST',
      body: JSON.stringify({ username: email, password: password }),
    });
    const magentoToken = response;  // Store or use this token as needed
    return magentoToken;
  } catch (error) {
    console.error('Magento login failed:', error);
    throw error;
  }
}
