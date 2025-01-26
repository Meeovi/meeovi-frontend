import { useRuntimeConfig } from '#imports';

export const useMagento = () => {
    const config = useRuntimeConfig();
    const magentoUrl = config.public.commerceUrl;
  
    const signInToMagento = async (email, password) => {
      try {
        const response = await $fetch(`${magentoUrl}/rest/V1/integration/customer/token`, {
          method: "POST",
          body: { username: email, password },
        });
        return response; // Token response
      } catch (error) {
        console.error("Magento Sign-In Error:", error.message);
        throw error;
      }
    };
  
    const createUserInMagento = async (email, firstName, lastName, password) => {
      const adminToken = config.public.commerceApiToken;
      try {
        const response = await $fetch(`${magentoUrl}/rest/V1/customers`, {
          method: "POST",
          headers: { Authorization: `Bearer ${adminToken}` },
          body: {
            customer: {
              email,
              firstname: firstName,
              lastname: lastName,
              website_id: 1, // Replace with your website ID
            },
            password,
          },
        });
        return response;
      } catch (error) {
        console.error("Magento User Creation Error:", error.message);
        throw error;
      }
    };
  
    return { signInToMagento, createUserInMagento };
  };
  