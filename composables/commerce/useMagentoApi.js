export const useMagentoApi = () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.commerceUrl; // Ensure this is set in your Nuxt config
  
    const makeRequest = async (endpoint, method = "GET", body = null) => {
      try {
        const token = useCookie("magento_token").value; // Use token if authentication is required
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };
  
        const options = { method, headers };
        if (body) options.body = JSON.stringify(body);
  
        const response = await $fetch(`${baseUrl}/${endpoint}`, options);
        return response;
      } catch (error) {
        console.error(`Magento API Error: ${error.message}`);
        throw error;
      }
    };
  
    return { makeRequest };
  };
  